class FavoritesController < ApplicationController
  def new 
    @favorite = Favorite.new

    @movies = Movie.all
    @users = User.all
  end 

  def create 
    @favorite = Favorite.create(favorite_params)

    redirect_to user_path(@favorite.user_id)
    # redirect_to user_path(@favorite.user)
  end 

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :movie_id)
  end 

end
