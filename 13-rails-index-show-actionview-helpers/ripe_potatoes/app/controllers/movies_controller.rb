class MoviesController < ApplicationController

  def index 
    # byebug
    @movies = Movie.all

    # render :index
  end 


  def show 
    @movie = Movie.find(params[:id])
  end 



end
