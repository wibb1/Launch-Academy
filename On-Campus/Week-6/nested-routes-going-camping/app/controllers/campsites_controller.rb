class CampsitesController < ApplicationController

  def index
    binding.pry
    @title = "Campers bunking in #{params[:id]}"
    @campsites = Campsite.all
    
  end
end
