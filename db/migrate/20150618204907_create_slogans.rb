class CreateSlogans < ActiveRecord::Migration
  def change
    create_table :slogans do |t|
      t.string :body
      t.integer :likes
      t.integer :hates
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
