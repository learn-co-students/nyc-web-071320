console.log("Fetch & the DOM")

document.addEventListener("DOMContentLoaded", function(e){ 
  // const baseUrl = "http://localhost:3000/api/v1/movies/"
  const movieList = document.querySelector('#movie-list')

  function clickHandler() {
    document.addEventListener('click', function(e){
      if(e.target.matches(".up-vote")){

        const button = e.target
        const span = button.closest('.movie').querySelector('span')
        const currentScore = parseInt(span.textContent)
        const newScore = currentScore + 1
        span.textContent = newScore
        const movieId = button.parentElement.dataset.movieId

        const options = {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ score: newScore })
        }

        fetch(baseUrl + movieId, options)
        
        
      } else if(e.target.matches('[data-purpose="delete"]')){
          const button = e.target
          const movieId = button.parentElement.dataset.movieId

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


      form.reset()


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
    // fetch(baseUrl)
    // .then(response => response.json())
    // .then(movieCollection => renderMovies(movieCollection))

    MovieAdapter.getMovies()
    .then(movieCollection => {
      const movies = movieCollection.map(movieObj => new Movie(movieObj))

      Movie.renderMovies(movies, movieList)
    })
  }
  
  clickHandler()
  submitHandler()
  getMovies()
})


