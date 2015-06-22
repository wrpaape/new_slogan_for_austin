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
      if User.find_by(name: user_params[:name])
        render_response({ response: "username is already taken" }, 200)
      elsif user_params[:password] != user_params[:password_confirmation]
        render_response({ response: "passwords do not match" }, 200)
      else
        user = User.new(user_params)
        if user.save
          render_response({ response: "user successfully created" }, 200)
        else
          render_response({ response: "errors occurred" }, 200)
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
    params.permit(:name, :password, :password_confirmation)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
