class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name,  null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.integer :slogans_count, default: 0
      t.integer :comments_count, default: 0
      t.integer :rating, default: 0
      t.integer :rating_slogan, default: 0
      t.integer :rating_comment, default: 0

      t.timestamps null: false
    end
  end
end
