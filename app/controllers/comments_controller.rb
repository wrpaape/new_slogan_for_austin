class CommentsController < ApplicationController
  def index
    begin
      @comments = Comment.all
      render_response(@comments, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def new
    begin
      authenticate_user!
      @comment = Comment.new
      render_response(@comment, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def create
    begin
      authenticate_user!
      @comment = Comment.create(comment_params)
      if @comment.save
        render_response(@comment, 500)
      else
        render_response("error occurred", 500)
      end
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  private

  def comment_params
    params.permit(:user_id, :slogan_id, :body)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
