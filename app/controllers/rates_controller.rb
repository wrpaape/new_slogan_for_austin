class RatesController < ApplicationController

  def new
    authenticate_user!
    @rate = Rate.new
  end

  def create
    if @current_user
      if rate = Rate.find_by(rate_params.reject { |k| k == :likes || k == :hates })
        rate.update(likes: rate_params[:likes], hates: rate_params[:hates])
        rate.revise
      else
        rate = Rate.create(rate_params)
      end
      rate.revise
    else
      authenticate_user!
    end
  end

  def update(rate, params)
    user = User.find(params[:user_id])
    if uprates = params[:uprates]
      rate.uprates += uprates.to_i
      user.carma += uprates.to_i
    elsif downrates = params[:downrates]
      rate.downrates += downrates.to_i
      user.carma -= downrates.to_i
    end

    if user.save && rate.save
      redirect_to :back
    else
      flash[:alert] = 'errors'
      render :back
    end
  end

  private

  def rate_params
    params.require(:rate).permit(:user_id, :slogan_id, :comment_id, :likes, :hates)
  end
end
