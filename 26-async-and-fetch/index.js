console.log("More events")

document.addEventListener("DOMContentLoaded", function(e){ 

  const movieList = document.querySelector('#movie-list')

  // kinda like a db/external data source for the moment
// const movieCollection = [
//   {
//     title: 'The Goonies',
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
//     year: 1985,
//     genre: 'Adventure',
//     score: 100
//   },
//   { 
//     title: 'Free Willy',
//     imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
//     year: 1993,
//     genre: 'Family',
//     score: 0  
//   },
//   { 
//     title: 'Top Gun',
//     imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
//     year: 1986,
//     genre: 'Adventure',
//     score: 0  
//   },
//   { 
//     title: 'Mean Girls',
//     imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
//     year: 2004,
//     genre: 'Comedy',
//     score: 0  
//   },
//   { 
//     title: 'Parasite',
//     imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
//     year: 2019,
//     genre: 'Horror',
//     score: 0  
//   },
//   {
//     title: "What About Bob?",
//     year: 1991,
//     genre: 'Comedy',
//     score: 0,
//     imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
//   },
//   {
//     title: "The Matrix",
//     year: 1999,
//     genre: 'Science Fiction',
//     score: 0,
//     imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
//   },
//   {
//     title: "Jaws",
//     year: 1984,
//     genre: 'Horror',
//     score: 0,
//     imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
//   },
// ]

  
  const renderMovies = movies => {
    for(const movieObj of movies){
      renderMovie(movieObj)
    }
  }

  function renderMovie(movieObj){
    const movieLi = document.createElement("li")
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
      <button data-purpose='delete'>&times;</button>
    `
    
    movieList.append(movieLi)
  }

  function clickHandler() {
    document.addEventListener('click', function(e){
      if(e.target.matches(".up-vote")){
        const button = e.target
        const span = button.closest('.movie').querySelector('span')
        const currentScore = parseInt(span.textContent)
        const newScore = currentScore + 1
        span.textContent = newScore
      } else if(e.target.matches('[data-purpose="delete"]')){
        e.target.parentElement.remove()
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

      renderMovie(movieObj)
      form.reset()
    })
  }

  const getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movieCollection => renderMovies(movieCollection))
  }
  
  clickHandler()
  submitHandler()
  // renderMovies(movieCollection)
  getMovies()
})








/*

As a user, when I click the "Show Form" button, I should see a form for adding a new movie to the system appear below the button and I should see the text in the button change to "Hide Form".

  √1. add a click listener to the show form button
  √2. on click, we should create a form element and its corresponding innerHTML
  √3. get that form on the DOM
  √4. we should change text of the button to "Hide Form"

As a user, when I fill out the form and click "Add Movie", the movie should appear at the bottom of the existing list of movies and the form should empty out.

  √1. add a submit listener 
  √2. get info from form
  √3. render new movie on DOM based on info
  √4. clear out the form


As a user, when I click "Hide Form", the form should disappear and the text in the button should change back to "Show Form".

  √1. click listener on the the hide form button
  √2. remove the form from the DOM
  √3. change the text (id?) of the button

*/































