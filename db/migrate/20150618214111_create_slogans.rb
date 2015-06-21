class CreateSlogans < ActiveRecord::Migration
 def change
   create_table :slogans do |t|
     t.string :body, null: false
     t.integer :rating, default: 0
     t.integer :likes, default: 0
     t.integer :hates, default: 0
     t.integer :comments_count, default: 0
     t.float :trend_coeff, default: 0
     t.text :trend_coeffs, default: ""
     t.belongs_to :user, index: true, foreign_key: true, null: false

     t.timestamps null: false
   end
 end
end