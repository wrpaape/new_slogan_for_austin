class CreateSlogans < ActiveRecord::Migration
  def change
    create_table :slogans do |t|
      t.string :body
      t.integer :likes
      t.integer :hates
      t.user :belongs_to

      t.timestamps null: false
    end
  end
end
