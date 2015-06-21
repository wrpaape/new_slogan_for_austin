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
        if rate.likes == rate_params[:likes].to_i
          render_response("can only rate this once", 200)
        else
          rate.update(rate_params_w_user)
          render_response("rate updated", 200)
        end
      else
        Rate.create(rate_params_w_user)
        render_response("rate created", 200)
      end
    else
      return if authenticate_user!
    end
  end

  private

  def rate_params
    params.permit(:slogan_id, :comment_id, :likes, :hates)
  end
end
