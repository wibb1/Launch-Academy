class Api::V1::SongsController < ApiController
  def index
    artist = Artist.find(params[:artist_id])
    render json: artist.songs, status: :ok
  end
end
