let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3000/toys/"
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyContainer = document.querySelector('#toy-collection')

  const hideAndSeek = () => {
    addBtn.addEventListener("click", () => {
      // hide & seek with the form
      addToy = !addToy;
      if (addToy) {
        toyFormContainer.style.display = "block";
      } else {
        toyFormContainer.style.display = "none";
      }
    });
  }

  const getToys = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(toys => renderToys(toys))
  }

  const renderToys = toys => {
    for(const toy of toys){
      renderToy(toy)
    }
  }

  const renderToy = toy => {
    const toyDiv = document.createElement('div')
    toyDiv.classList.add('card')

    toyDiv.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button data-id=${toy.id} class="like-btn">Like <3</button>
    `
    
    toyContainer.append(toyDiv)
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const form = e.target

      const name = form.name.value // form[0].value
      const image = form.image.value // form[1].value

      const newToy = {
        name: name,
        image: image,
        likes: 0
      }

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json", // mime-types
          "accept": "application/json"
        },
        body: JSON.stringify(newToy)
      }

      fetch(baseUrl, options)
      .then(response => response.json())
      .then(toy => renderToy(toy)) // pessimistic rendering
    })
  }

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if(e.target.matches('.like-btn')){
        // get the current likes
        // get the id of the toy somehow
        // make a patch request 
        // update the DOM with the new like count

        const button = e.target
        const id = button.dataset.id
        const pTag = button.previousElementSibling
        const currentLikes = parseInt(pTag.textContent.split(' ')[0])
        const likes = currentLikes + 1

        options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ likes: likes })
        }
        
        fetch(baseUrl + id, options)
        .then(response => response.json())
        .then(toy => {
          const button = document.querySelector(`[data-id="${toy.id}"]`)
          console.log(button)
          const pTag = button.previousElementSibling
          pTag.textContent = `${toy.likes} Likes`
        })

      }
    })
  }
  
  hideAndSeek()
  getToys()
  submitHandler()
  clickHandler()
});
