class CreateRates < ActiveRecord::Migration
  def change
    create_table :rates do |t|
      t.integer :likes, default: 0
      t.integer :hates, default: 0
      t.belongs_to :user, index: true, foreign_key: true, null: false
      t.belongs_to :slogan, index: true, foreign_key: true
      t.belongs_to :comment, index: true, foreign_key: true
      after_create :revise
      after_update 2.times { :revise }

      t.timestamps null: false
    end
  end

  private

  def revise
    if slogan = Slogan.find_by(id: slogan_id)
      slogan.rating += likes - hates
      slogan.save
      parent_user = slogan.user
      parent_user.rating_slogan += likes - hates
    else
      comment = Comment.find(comment_id)
      comment.rating += likes - hates
      comment.save
      parent_user = comment.user
      parent_user.rating_comment += likes - hates
    end
    parent_user.rating += likes - hates
    parent_user.save
  end
end
