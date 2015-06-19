class SlogansController < ApplicationController
  def index
    begin
      @slogans = Slogan.all
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def new
    begin
      authenticate_user!
      @slogan = Slogan.new
      render_response(@slogan, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def create
    begin
      authenticate_user!
      @slogan = Slogan.create(slogan_params)
      if @slogan.save
        render_response(@slogan, 200)
      else
        render_response("errors occurred", 500)
      end
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def show
    begin
      @slogan = Slogan.find(params[:id])
      render_response(@slogan, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def edit
    begin
      authenticate_user!
      @slogan = Slogan.find(params[:id])
      render_response(@slogan, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def update
    begin
      authenticate_user!
      slogan = Slogan.find(params[:id])
      if slogan.update(slogan_params)
        render_response(@slogan, 200)
      else
        render_response("errors occurred", 500)
      end
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def destroy
    begin
      authenticate_user!
      Slogan.destroy(params[:id])
      render_response("slogan destroyed", 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  private

  def slogan_params
    params.require(:slogan).permit(:user_id, :body)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end

