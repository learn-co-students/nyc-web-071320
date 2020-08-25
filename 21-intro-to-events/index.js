console.log("Events.")

document.addEventListener("DOMContentLoaded", function(e){ 

  // Let's add the best movie ever made to our list...


  // √1. create a new li element
  // √2. give the li a class of "movie"
  // √3. add all that internal HTML to the li with specific Goonies data
  // √4. add it to the DOM somehow
    // get the ul from the DOM
    // add the li to the bottom of the ul


  // this is standing in for some external datasource
  const gooniesObj = {
    title: "The Goonies",
    year: 1985,
    score: 10,
    imageUrl: "https://cdn.shopify.com/s/files/1/1416/8662/products/goonies_1985__linen_original_film_art_f_1200x.jpg?v=1586639573",
    genre: "Action"
  }

  function renderMovie(movieObj){
    const movieLi = document.createElement("li")
    // movieLi.className = "movie"
    movieLi.classList.add("movie")
    
    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt=""
      src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button>&times;</button>
    `
    
    const movieList = document.querySelector('#movie-list')
    movieList.append(movieLi)
  }

  renderMovie(gooniesObj)

})