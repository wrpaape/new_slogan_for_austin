class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user

  def revise(rate)
    self.rating += rate.likes - rate.hates
    self.save
    user = self.user
    user.rating_slogan += rate.likes - rate.hates
    user.rating += rate.likes - rate.hates
    user.save
  end
end
