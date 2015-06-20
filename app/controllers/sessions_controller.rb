class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email]) unless user = User.find_by(name: params[:name])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(params[:password])
      # Save the user id inside a browser cookie.
      # Specifically, the rails 'session'. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      render_response("successfully logged in", 200)
    elsif user
      # If user's login doesn't work, send them back to the login form.
      render_response("incorrect password", 422)
    else
      render_response("username or email does not exist", 422)
    end
  end

  def destroy
    session[:user_id] = nil
    render_response("successfully logged out", 200)
  end

  private

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
