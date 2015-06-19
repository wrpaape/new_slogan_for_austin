class SlogansController < ApplicationController
  def index
    @slogans = Slogan.all
  end

  def new
    authenticate_user!
    @slogan = Slogan.new
  end

  def create
    authenticate_user!
    @slogan = Slogan.create(slogan_params)
    if @slogan.save
      redirect_to :root, notice: "new slogan successfully created"
    else
      flash[:alert] = "error occured"
      render :new
    end
  end

  def show
    @slogan = Slogan.find(params[:id])
  end

  def edit
    authenticate_user!
    @slogan = Slogan.find(params[:id])
  end

  def update
    authenticate_user!
    slogan = Slogan.find(params[:id])
    if slogan.update(slogan_params)
      redirect_to slogan, notice: 'slogan successfully updated'
    else
      flash[:alert] = "an error occured"
      render :edit
    end
  end

  def destroy
    authenticate_user!
    Slogan.destroy(params[:id])
    redirect_to slogans_path, notice: 'destroyed'
  end

  private
  def slogan_params
    params.require(:slogan).permit(:user_id, :body)
  end
end

