class CreateCampers < ActiveRecord::Migration[5.1]
  def change
    create_table :campers do |t|
      t.string :name, null: false
      t.belongs_to :campsite

      t.timestamps
    end
  end
end
