class UsersController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authorize, only: [:show]

  def login
    render json: {error: "hit"}
    # user = User.find_by(email: user_params[:email])
    # if user && user.authenticate(user_params[:password])
    #   render json: user
    # else
    #   render json: status: 404
    # end
  end

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id 
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def render_not_found
    render json: {errors: "User not found"}, status: :not_found
  end

  def authorize
    render json: {errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
