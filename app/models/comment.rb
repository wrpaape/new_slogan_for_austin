class Comment < ActiveRecord::Base
  has_many :rates
  belongs_to :user
  belongs_to :slogan

  def revise
    self.rating = rates.sum("likes - hates")
    self.save
  end
end
