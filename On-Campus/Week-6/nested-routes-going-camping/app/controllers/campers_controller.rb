class CampersController < ApplicationController

  def index
    @title = "All Campers:"
    @campers = Camper.all
  end

  def show
    @camper = Camper.find(params[:id])
    @campsite = @camper.campsite
  end
end
