class SuppliesController < ApplicationController
  def index
    @title = "All Supplies:"
    @supplies = Supply.all
  end

  def show
    @supply = Supply.find(params[:id])
    @camper = @supply.camper
  end
end
