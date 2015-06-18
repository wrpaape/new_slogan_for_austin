class CreateSlogans < ActiveRecord::Migration
  def change
    create_table :slogans do |t|
      t.string :body, null: false
      t.integer :rating, default: 0
      t.integer :comments_count, default: 0
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
