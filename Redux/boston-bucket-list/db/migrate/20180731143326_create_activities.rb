class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :name, null: false
      t.boolean :complete, null: false, default: false

      t.timestamps null: false
    end
  end
end
