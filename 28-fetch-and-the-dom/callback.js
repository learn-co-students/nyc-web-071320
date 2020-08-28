console.log("Callbacks are cool")


const makeItBananas = () => {
  alert(`This is absolutely 🍌s!!!!!`)
}

const welcomeImage = document.querySelector('img')

welcomeImage.addEventListener('click', e => {
  makeItBananas(e)
})

const ar = [1,2,3]

const doubler = num => num * 2

const newAr = ar.map(doubler)

const myMap = (array, callback) => {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newValue = callback(element)
    newArray.push(newValue)
  }

  return newArray
}
