class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user

  def revise
    rating = rates.sum("likes - hates")
    comments_count = comments.count
    save
  end
end
