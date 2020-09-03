/* 
1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Genre: Science Fiction, Score: 9"
*/  

console.log("mooovies are cool")

class Movie{
  constructor({ genre, title, imageUrl, year, score, id }){
    this.genre = genre
    this.title = title
    this.imageUrl = imageUrl
    this.year = year
    this.score = score
    this.id = id
  }

  render(movieList){
    const movieLi = document.createElement("li")
    movieLi.classList.add("movie")
    movieLi.dataset.movieId = this.id
    
    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
      src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose='delete'>&times;</button>
    `
    
    movieList.append(movieLi)
  }

  static renderMovies(movies, movieList){
    for(const movie of movies){
      movie.render(movieList)
    }
  }
}