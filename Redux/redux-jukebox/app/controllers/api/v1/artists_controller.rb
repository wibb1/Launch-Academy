class Api::V1::ArtistsController < ApiController
  def index
    render json: Artist.all, status: :ok
  end
end
