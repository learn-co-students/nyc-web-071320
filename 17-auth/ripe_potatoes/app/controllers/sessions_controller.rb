class SessionsController < ApplicationController
  def reset_page_view_cookie
    # cookies[:view_count] = nil
    session.delete(:view_count)

    redirect_back fallback_location: movies_path
  end 
end
