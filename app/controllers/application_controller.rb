class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :current_user
  skip_before_action :verify_authenticity_token

  def current_user
    if @current_user.nil?
      if session[:user_id].present?
        @current_user = User.find(session[:user_id])
      end
    else
      @current_user
    end
  end

  def authenticate_user!
    unless current_user
      flash[:alert] = "you must be logged in to do that."
      redirect_to login_path
    end
  end
end
