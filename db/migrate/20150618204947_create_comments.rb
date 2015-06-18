class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :likes
      t.integer :hates
      t.user :belongs_to
      t.slogan :belongs_to

      t.timestamps null: false
    end
  end
end
