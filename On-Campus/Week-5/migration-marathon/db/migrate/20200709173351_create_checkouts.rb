class CreateCheckouts < ActiveRecord::Migration[5.2]
  def change
    create_table :checkouts do |t|
      t.string :name, null:false
      t.belongs_to :book
    end
  end
end