class CreateComments < ActiveRecord::Migration[5.2]
  def change 
    create_table :comments do |t|
      t.integer :article_id, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
  end
end
