class CommentsController < ApplicationController
  def new
    authenticate_user!
    @comment = Comment.new
  end

  def create
    authenticate_user!
    @comment = Comment.create(comment_params)
    if @comment.save
      @slogan = Slogan.find(@comment.slogan_id)
      redirect_to slogan_path(@slogan), notice: "new comment successfully created"
    else
      flash[:alert] = "error occured"
      render :new
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :slogan_id, :body)
  end
end
