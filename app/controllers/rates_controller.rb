class RatesController < ApplicationController

  def new
    return if authenticate_user!
    @rate = Rate.new
  end

  def create
    if @current_user
      if rate = Rate.find_by(rate_params.reject { |k| k == :likes || k == :hates })
        rate.update(likes: rate_params[:likes], hates: rate_params[:hates]) unless rate.likes == rate_params[:likes]
      else
        rate = Rate.create(rate_params)
      end
    else
      return if authenticate_user!
    end
  end

  private

  def rate_params
    params.permit(:user_id, :slogan_id, :comment_id, :likes, :hates)
  end
end
