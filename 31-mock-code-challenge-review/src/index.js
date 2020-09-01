document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "http://localhost:3000/dogs/"
  
  const getDogs = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(dogs => {
      renderDogs(dogs)
    })
  }

  const renderDogs = dogs => {
    const tableBody = document.querySelector('#table-body')
    tableBody.innerHTML = ''
    dogs.forEach(dog => renderDog(dog, tableBody))
  }

  const renderDog = (dog, tableBody) => {
    const row = document.createElement('tr')
    row.dataset.id = dog.id

    row.innerHTML = `
      <td>${dog.name}</td> 
      <td>${dog.breed}</td> 
      <td>${dog.sex}</td> 
      <td>
        <button>Edit</button>
      </td>
    `

    tableBody.append(row)
  }

  const clickHandler = () => {
    document.addEventListener("click", e => {
      if(e.target.textContent === 'Edit'){
        const row = e.target.closest('tr')
        const cells = row.children

        const name = cells[0].textContent
        const breed = cells[1].textContent
        const sex = cells[2].textContent

        const form = document.querySelector('#dog-form')

        form.name.value = name
        form.breed.value = breed
        form.sex.value = sex

        form.dataset.id = row.dataset.id
      }
    })
  }
  
  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()

      const form = e.target

      const name = form.name.value 
      const breed = form.breed.value 
      const sex = form.sex.value 
      
      const id = form.dataset.id
      
      const options = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({ name: name, breed: breed, sex: sex })
      }
      
      fetch(baseUrl + id, options)
      .then(response => response.json())
      .then(dog => {
        getDogs()
      })
    })
  }
  
  clickHandler()
  submitHandler()
  getDogs()
})


/*


1. On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.
The dog should be put on the table as a table row. The HTML might look something like this <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

  √* GET request to /dogs
  √* iterate over dogs and render them to the table

2. Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.

  √* click listener
  √* on click, pass the dog info up to the form

3. On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes). Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.

  * submit listener
  * on submit, get data from the form
  * PATCH request to /dogs/:id with new attributes
  * re-render the dog table somehow



*/