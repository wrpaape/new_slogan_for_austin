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

  def most_liked
    begin
      @comments = Comment.order(likes: :desc)
      render_response(@comments, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def most_hated
    begin
      @comments = Comment.order(hates: :desc)
      render_response(@comments, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def new
    begin
      return if authenticate_user!
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
      return if authenticate_user!
      @comment = Comment.create({ slogan_id: comment_param[:slogan_id], body: comment_params[:body], user_id: current_user.id })
      if @comment.save
        render_response(@comment, 500)
      else
        render_response({ response: "error occurred" }, 500)
      end
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def show
    begin
      @comment = Comment.find(params[:id])
      render_response(@comment, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def update
    begin
      return if authenticate_user!
      @comment = Comment.update({ slogan_id: comment_param[:slogan_id], body: comment_params[:body], user_id: current_user.id })
      if @comment.save
        render_response(@comment, 500)
      else
        render_response({ response: "error occurred" }, 500)
      end
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  private

  def comment_params
    params.permit(:slogan_id, :body)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
