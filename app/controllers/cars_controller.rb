class CarsController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
  def index
    cars = Car.all
    render json: cars
  end

  def create
    car = Car.create(car_params)
    if car.valid?
      render json: car, status: :created
    else
      render json: {errors: car.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    car = car.find(params[:id])
    car.update(car_params)
    if car.valid?
      render json: car, status: :accepted
    else
      render json: {errors: car.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    car = Car.find(params[:id])
    car.destroy
    head :no_content
  end

  private

  def car_params
    params.permit(:image, :price, :car_name, :user_id)
  end

  def render_not_found
    render json: {errors: "Car not found"}, status: :not_found
  end
end
