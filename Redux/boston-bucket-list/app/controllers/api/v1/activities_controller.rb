class Api::V1::ActivitiesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Activity.all
  end

  def update
    activity = Activity.find(params[:id])

    activity.complete = !activity.complete

    if activity.save
      render json: activity, status: :created
    else
      render json: { error: 'There was an error saving your activity status'}
    end
  end
end
