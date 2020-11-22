class CreateCategorizations < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizations do |t|
      t.belongs_to :book, null: false
      t.belongs_to :category, null:false
    end
  end
end
