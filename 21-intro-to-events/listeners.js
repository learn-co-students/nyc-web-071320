console.log("listening")

// As a user, when I click on the welcome image I want to see a turquoise border around that image

// √1. get the image from the DOM
// 2. let's add a click listener to the image
// 3. on click, change it's border somehow...

const welcomeImage = document.getElementById("welcome-image")

welcomeImage.addEventListener("click", function(e){
  const image = e.target
  image.style.border = "solid thick turquoise"
})

// As a user, when the mouse moves over the welcome image I want to see a picture of a baby sloth, and I want the picture to change back when the mouse moves off the image



























































// image.style.border = "solid thick turquoise"
