class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def reset_page_view_cookie
    # cookies[:view_count] = nil
    session.delete(:view_count)

    redirect_back fallback_location: movies_path
  end 

  def new 
  end

  def create 
    user = User.find_by(name: params[:session][:name])

    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id 
      redirect_to user 
    else 
      flash[:error] = "username or password is incorrect"
      redirect_to new_login_path
    end

  end 


  def logout 
    # session[:user_id] = nil
    session.delete(:user_id)

    redirect_to new_user_path
  end 
end
