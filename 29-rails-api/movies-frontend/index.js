console.log("Fetch & the DOM")

document.addEventListener("DOMContentLoaded", function(e){ 
  const baseUrl = "http://localhost:3000/api/v1/movies/"
  const movieList = document.querySelector('#movie-list')
  
  const renderMovies = movies => {
    for(const movieObj of movies){
      renderMovie(movieObj)
    }
  }

  function renderMovie(movieObj){
    const movieLi = document.createElement("li")
    movieLi.classList.add("movie")
    movieLi.dataset.movieId = movieObj.id
    
    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt=""
      src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose='delete'>&times;</button>
    `
    
    movieList.append(movieLi)
  }

  function clickHandler() {
    document.addEventListener('click', function(e){
      if(e.target.matches(".up-vote")){
        // this is our DOM manipulation, optimistic rendering
        const button = e.target
        const span = button.closest('.movie').querySelector('span')
        const currentScore = parseInt(span.textContent)
        const newScore = currentScore + 1
        span.textContent = newScore
        const movieId = button.parentElement.dataset.movieId


        // PATCH request to /movies/:id
        
        // this is our db communication
        const options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ score: newScore })
        }

        fetch(baseUrl + movieId, options)
        // .then(response => response.json())
        // .then(console.log)
        
        
      } else if(e.target.matches('[data-purpose="delete"]')){
          const button = e.target
          const movieId = button.parentElement.dataset.movieId

          // DELETE request to /movies/:id
          const option = {
            method: "DELETE"
          }
  
          fetch(baseUrl + movieId, option)
          .then(response => {
            if(response.ok){
              button.parentElement.remove()
            }
          })
        
      } else if(e.target.matches("#show-form")){
        const newMovieForm = document.createElement('form')
        const button = e.target
        button.textContent = "Hide Form"
        button.id = "hide-form"

        newMovieForm.innerHTML = `
          <label>Title: </label>
          <input type="text" name="title">
          <br>
          <label>Year: </label>
          <input type="number" name="year">
          <br>
          <label>Genre: </label>
          <input type="text" name="genre">
          <br>
          <label>Image URL: </label>
          <input type="text" name="imageUrl">
          <br>
          <input type="submit" value="Add Movie">
        `

        button.insertAdjacentElement('afterend', newMovieForm)
      } else if(e.target.matches('#hide-form')){
        e.target.textContent = "Show Form"
        e.target.id = "show-form"

        document.querySelector('form').remove()
      }
    }) 
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()

      const form = e.target

      const title = form.title.value
      const year = form.year.value
      const genre = form.genre.value
      const imageUrl = form.imageUrl.value

      const movieObj = {
        title: title,
        year: year,
        genre: genre,
        imageUrl: imageUrl,
        score: 0
      }

      // renderMovie(movieObj)
      form.reset()

      // POST to /movies
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(movieObj)
      }
      
      fetch(baseUrl, options)
      .then(response => response.json())
      .then(renderMovie)
      .catch(error => {
        console.log("There has been an error:\n", error)
      })
    })
  }

  const getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(movieCollection => renderMovies(movieCollection))
  }
  
  clickHandler()
  submitHandler()
  getMovies()
})


