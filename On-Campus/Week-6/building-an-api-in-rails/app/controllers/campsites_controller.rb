class CampsitesController < ApplicationController

  def index
    @title = "All Campsites:"
    @campsites = Campsite.all
  end
end
