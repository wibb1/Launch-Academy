class Api::V1::GroceriesController < ApplicationController
  def index
    render json: Grocery.all
  end

  def create
    grocery = Grocery.new(grocery_params)
    if grocery.save
      render json: grocery, status: :created
    else
      render json: { errors: grocery.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def grocery_params
    params.require(:grocery).permit(:name)
  end
end
