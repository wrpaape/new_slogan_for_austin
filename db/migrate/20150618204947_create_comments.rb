class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :likes
      t.integer :hates
      t.belongs_to :user
      t.belongs_to :slogan

      t.timestamps null: false
    end
  end
end
