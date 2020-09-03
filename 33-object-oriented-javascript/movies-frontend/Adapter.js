class MovieAdapter{
  static baseUrl = "http://localhost:3000/api/v1/movies/"

  static getMovies(){

    return fetch(MovieAdapter.baseUrl)
    .then(response => response.json())
  }
}