class CreateRates < ActiveRecord::Migration
  def change
    create_table :rates do |t|
      t.integer :likes, default: 0
      t.integer :hates, default: 0
      t.belongs_to :user, index: true, foreign_key: true, null: false
      t.belongs_to :slogan, index: true, foreign_key: true
      t.belongs_to :comment, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
