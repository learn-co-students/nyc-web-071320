class MoviesController < ApplicationController
  before_action :find_movie, only: [:show, :edit, :update, :destroy]

  def index 
    # byebug
    @movies = Movie.all

    # render :index
  end 


  def show 
    # @movie = Movie.find(params[:id])
    if session[:view_count]
      session[:view_count] = session[:view_count] + 1
    else 
      session[:view_count] = 1
    end 

  end 
  
  def new 
    @movie = Movie.new
  end 
  
  def create
    movie = Movie.create(movie_params)
    
    redirect_to movie_path(movie) # get /movies/7
  end 

  def edit 
    # @movie = Movie.find(params[:id])
  end 

  
  def update 
    # @movie = Movie.find(params[:id])
    @movie.update(movie_params)
    
    redirect_to movie_path(@movie)
  end 
  
  def destroy 
    # @movie = Movie.find(params[:id])
    @movie.destroy
    
    redirect_to movies_path
  end 
  
  private 
  
  def movie_params 
    params.require(:movie).permit(:title, :genre, :year)
  end 

  def find_movie 
    @movie = Movie.find(params[:id])
  end 

end
