class CreateCampsites < ActiveRecord::Migration[5.1]
  def change
    create_table :campsites do |t|
      t.string :name
      t.timestamps
    end
  end
end
