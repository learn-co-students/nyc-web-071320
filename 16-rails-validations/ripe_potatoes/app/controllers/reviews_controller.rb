class ReviewsController < ApplicationController
  def new 
    @review = Review.new

    @movies = Movie.all
    @users = User.all
  end 

  def create 
    @review = Review.create(review_params)
    # @review = Review.new(review_params)

      #  @review.save
    if @review.valid?
      redirect_to user_path(@review.user_id)
    else 
      flash[:my_errors] =  @review.errors.full_messages

      redirect_to new_review_path
    end 
    # redirect_to user_path(@review.user)
  end 

  private

  def review_params
    params.require(:review).permit(:user_id, :movie_id)
  end 

end
