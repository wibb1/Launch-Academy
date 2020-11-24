class Api::V1::PlaylistSongsController < ApiController
  def index
    active_playlist_songs = PlaylistSong.all.map do |playlist_song| 
      { id: playlist_song.id, song: playlist_song.song }
    end
    render json: active_playlist_songs, status: :ok
  end

  def create
    song = Song.find(params[:song_id])
    playlist_song = PlaylistSong.new(song: song)

    if playlist_song.save
      render json: { id: playlist_song.id, song: song }, status: :created
    else
      render json: { errors: playlist_song.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    playlist_song = PlaylistSong.find(params[:id])

    if playlist_song.destroy
      render json: {}, status: :no_content
    else
      render json: playlist_song.errors, status: :unprocessable_entity
    end
  end
end
