class UsersController < ApplicationController
  def index
    begin
      @users = User.all
      render_response(@users, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def new
    begin
      @user = User.new
      render_response(@user, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end


  def create
    begin
      if User.find_by(name: user_params[:name]) && User.find_by(email: user_params[:email])
        render_response("username and email is already taken", 500)
      elsif User.find_by(name: user_params[:name])
        render_response("username is already taken", 500)
      elsif User.find_by(email: user_params[:email])
        render_response("email is already taken", 500)
      elsif user_params[:password] != user_params[:password_confirmation]
        render_response("passwords do not match", 500)
      else
        user = User.new(user_params)
        if user.save
          render_response("user successfully created", 200)
        else
          render_response("errors occurred", 500)
        end
      end
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def show
    begin
      @user = User.find(params[:id])
      render_response(@user, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def show_profile
    begin
      @user = User.find(params[:id])
      @slogans = @user.slogans
      @comments = @user.comments
      render_response([@user, @slogans, @comments], 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
