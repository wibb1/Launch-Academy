class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :album_name
      t.integer :year
      t.belongs_to :artist,  null: false

      t.timestamps null: false
    end
  end
end
