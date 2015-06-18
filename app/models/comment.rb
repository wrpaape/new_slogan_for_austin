class Comment < ActiveRecord::Base
  has_many :rates
  belongs_to :user
  belongs_to :slogan

  def revise
    rating = rates.sum("likes - hates")
    save
  end
end
