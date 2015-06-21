class RatesController < ApplicationController

  def new
    return if authenticate_user!
    @rate = Rate.new
  end

  def create
    if @current_user
      rate_params_w_user = rate_params
      rate_params_w_user[:user_id] = @current_user.id
      if rate = Rate.find_by(rate_params_w_user.reject { |k| k == "likes" || k == "hates" })
        unless rate.likes == rate_params[:likes].to_i
          rate.update(rate_params_w_user)
        end
      else
        Rate.create(rate_params_w_user)
      end
      if slogan = Slogan.find_by(id: rate_params_w_user[:slogan_id])
        likes = slogan.likes
        hates = slogan.hates
      else
        comment = Comment.find(rate_params_w_user[:comment_id])
        likes = comment.likes
        hates = comment.hates
      end
      render_response({likes: likes, hates: hates}, 200)
    else
      return if authenticate_user!
    end
  end

  private

  def rate_params
    params.permit(:slogan_id, :comment_id, :likes, :hates)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
