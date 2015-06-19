class Comment < ActiveRecord::Base
  has_many :rates
  belongs_to :user
  belongs_to :slogan

  def revise(rate)
    self.rating += rate.likes - rate.hates
    self.save
    user = self.user
    user.rating_comment += rate.likes - rate.hates
    user.rating += rate.likes - rate.hates
    user.save
  end
end
