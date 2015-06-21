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

  def most_liked
    begin
      @slogans = Slogan.order(likes: :desc)
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def most_hated
    begin
      @slogans = Slogan.order(hates: :desc)
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def new
    begin
      return if authenticate_user!
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
      return if authenticate_user!
      @slogan = Slogan.create({body: slogan_params[:body], user_id: current_user.id })
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

  def show_w_comments
    begin
      @slogan = Slogan.find(params[:id])
      @comments = @slogan.comments
      render_response([@slogan, @comments], 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def show_w_comments_most_liked
    begin
      @slogan = Slogan.find(params[:id])
      @comments = @slogan.comments.order(likes: :desc)
      render_response([@slogan, @comments], 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def show_w_comments_most_hated
    begin
      @slogan = Slogan.find(params[:id])
      @comments = @slogan.comments.order(hates: :desc)
      render_response([@slogan, @comments], 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def leaderboard_trend
    begin
      @slogans = Slogan.order(trend_coeff: :desc).limit(5)
      Slogan.new.plot_leaderboard(@slogans, "trend")
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def leaderboard_likes
    begin
      @slogans = Slogan.order(likes: :desc).limit(5)
      Slogan.new.plot_leaderboard(@slogans, "liked")
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def leaderboard_hates
    begin
      @slogans = Slogan.order(hates: :desc).limit(5)
      Slogan.new.plot_leaderboard(@slogans, "hated")
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def leaderboard_rating
    begin
      @slogans = Slogan.order(rating: :desc).limit(5)
      Slogan.new.plot_leaderboard(@slogans, "rated")
      render_response(@slogans, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  def update
    begin
      return if authenticate_user!
      slogan = Slogan.find(params[:id])
      if slogan.update({ body: slogan_params[:body], user_id: current_user.id })
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
      return if authenticate_user!
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
    params.permit(:body)
  end

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end

