/*
1. See all characters names in a div with the id of "character-bar". On page load, request data from the server to get all of the characters objects. When you have this information, you'll need to add a span tag with the character's name to the character bar.

√* DOMContentLoaded listener
√* GET request to /characters
√* load each character up as a span

2. Select a character from the character bar and see character's info inside #detailed-info div.

3. Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.



*/

const baseUrl = "http://localhost:3000/characters/"

// this declares the variable without any value
// we'll use it to keep track of the character id of 
// the character currently being displayed in the `character-details` 
// part of the DOM
let currentCharacterId 


document.addEventListener("DOMContentLoaded", e => {
  clickHandler()
  submitHandler()
  getCharacters()
})

// we're doing this in every fetch call we're making so
// we might as well factor it out into its own function.
// this function returns a promise since `.json()` returns a promise
const parseBodyToJson = response => {
  return response.json()
}

const getCharacters = () => {
  fetch(baseUrl)
  .then(parseBodyToJson)
  .then(renderCharacters)
}

const updateCharacter = (id, body) => {
  const options = {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(body)
  }
  
  // this function returns the promise from the second call to `.then`
  // this means we'll have to do something with the json (i.e., render)
  // after the call to this function
  return fetch(baseUrl + id, options).then(parseBodyToJson)
}

const getCharacter = id => {
  fetch(baseUrl + id)
  .then(parseBodyToJson)
  .then(renderCharacterDetails)
}

const renderCharacters = characters => {
  const container = document.querySelector("#character-bar")
  container.innerHTML = ''

  characters.forEach(character => {
    renderCharacter(character, container)
  })
}

const renderCharacter = (character, container) => {
  const characterSpan = document.createElement('span')
  characterSpan.classList.add('character')
  characterSpan.dataset.id = character.id
  characterSpan.textContent = character.name
  container.append(characterSpan)
}

const renderCharacterDetails = character => {
  currentCharacterId = character.id
  document.querySelector('#name').textContent = character.name
  document.querySelector('#image').src = character.image
  document.querySelector('#calories').textContent = `${character.calories} Calories`
}

const renderCalorieCount = calories => {
  document.querySelector('#calories').textContent = `${calories} Calories`
}

const clickHandler = () => {
  document.addEventListener('click', e => {
    if(e.target.matches('.character')){

      getCharacter(e.target.dataset.id)

    } else if(e.target.matches('#reset-btn')){

      // update character returns a promise with the parsed body 
      // of the server response so we have to render that json in 
      // anothercall to `.then`
      updateCharacter(currentCharacterId, { calories: 0 })
      .then(character => {
        renderCalorieCount(character.calories)
        document.querySelector('#calories-form').reset()
      })

    } else if(e.target.matches('#name')){

      const pTag = e.target
      const currentName = pTag.textContent
      const form = document.createElement('form')

      form.id ="name-change-form"
      form.innerHTML = `
        <input type="text" name="newName" placeholder="${currentName}" />
        <input type="submit" value="Change Name" />
      `

      pTag.parentElement.replaceChild(form, pTag)

    }
  })
}

const submitHandler = () => {
  document.addEventListener('submit', e => {
    e.preventDefault()

    if(e.target.matches('#calories-form')){ 

      const form = e.target
      const caloriesSpan = document.querySelector('#calories')

      const addCalories = parseInt(form[1].value)
      const existingCalories = parseInt(caloriesSpan.textContent.split(' ')[0])
      const newCalories = addCalories + existingCalories

      updateCharacter(currentCharacterId, { calories: newCalories })
      .then(character => {
        renderCalorieCount(character.calories)
        document.querySelector('#calories-form').reset()
      })

    } else if(e.target.matches('#name-change-form')){

      const newName = e.target.newName.value
      
      updateCharacter(currentCharacterId, { name: newName })
      .then(character => {
        const form = document.querySelector('#name-change-form')
        const pTag = document.createElement('p')

        pTag.id = "name"
        pTag.textContent = character.name

        form.parentElement.replaceChild(pTag, form)
        getCharacters() // to update the new name in the character bar

      })
    }
  })
}