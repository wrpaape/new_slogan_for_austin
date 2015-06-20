class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :rating, default: 0
      t.integer :likes, default: 0
      t.integer :hates, default: 0
      t.belongs_to :user, index: true, foreign_key: true, null: false
      t.belongs_to :slogan, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
