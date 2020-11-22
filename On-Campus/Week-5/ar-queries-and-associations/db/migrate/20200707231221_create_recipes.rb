class CreateRecipes < ActiveRecord::Migration[5.2]
  def change 
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :directions, null: false

      t.timestamps null: false
    end
  end
end
