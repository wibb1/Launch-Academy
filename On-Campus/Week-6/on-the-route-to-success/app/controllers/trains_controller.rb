class TrainsController < ApplicationController
  def index
    @trains = Train.all
  end
end