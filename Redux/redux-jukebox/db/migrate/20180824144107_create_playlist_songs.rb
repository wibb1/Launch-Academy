class CreatePlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_songs do |t|
      t.belongs_to :song, null: false

      t.timestamps null: false
    end
  end
end
