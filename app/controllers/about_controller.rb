class AboutController < ApplicationController
  def show
    begin
      about =
"""
keep Austin weird?
It’s insulting and we need a new slogan.
Why call us weird?
why call us uncanny, eerie, unnatural, unearthly, ghostly, strange, abnormal, unusual, or WEIRD?
Because we like live music?
Because we demand better and healthier food?
Because we encourage creative expression?
Because we’re not ignorant judgemental purveyors of hate and intolerance?
That’s not weird.  It’s just better.  It’s a better way of life.
So we need a new slogan.  A slogan that truly represents the spirit of this city.
HELP US!
Register and contribute a slogan today!
THE SLOGAN WITH THE MOST VOTES WINS!!
"""
      render_response(about, 200)
      rescue ActiveRecord::RecordNotFound => error
        render_response(error.message, 404)
      rescue StandardError => error
        render_response(error.message, 422)
    end
  end

  private

  def render_response(response, response_code)
    render json: response, status: response_code
  end
end
