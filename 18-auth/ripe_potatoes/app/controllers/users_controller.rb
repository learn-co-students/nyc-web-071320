class UsersController < ApplicationController
  def index
    @users = User.all
  end 

  def show 
    @user = User.find(params[:id])
  end 

  def new 
    @user = User.new
  end 

  def create 
    user = User.create(user_params)

    if user.valid? 
      session[:user_id] =  user.id
      redirect_to user
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end 
  end 

  def destroy
    user = User.find(params[:id])
    user.destroy
    
    redirect_to users_path
  end 

  private 

  def user_params 
    params.require(:user).permit(:name, :age, :slogan, :img_url, :password)
  end 
end
