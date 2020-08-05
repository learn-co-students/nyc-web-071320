class MoviesController < ApplicationController

  def index 
    # byebug
    @movies = Movie.all

    # render :index
  end 


  def show 
    @movie = Movie.find(params[:id])
  end 
  
  def new 
    @movie = Movie.new
  end 
  
  def create
    movie = Movie.create(movie_params)
    
    redirect_to movie_path(movie) # get /movies/7
  end 

  def edit 
    @movie = Movie.find(params[:id])
  end 
  
  def update 
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)

    redirect_to movie_path(@movie)
  end 
  
  
  private 
  
  def movie_params 
    params.require(:movie).permit(:title, :genre, :year)
  end 

end
