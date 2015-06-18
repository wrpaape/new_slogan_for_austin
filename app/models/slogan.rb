class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user

  def revise
    self.rating = rates.sum("likes - hates")
    self.comments_count = comments.count
    self.save
  end
end
