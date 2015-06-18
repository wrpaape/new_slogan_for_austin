class User < ActiveRecord::Base
  has_many :slogans
  has_many :comments
  has_many :rates
  has_secure_password

  def revise
    self.rating_slogan = slogans.sum(:rating)
    self.rating_comment = comments.sum(:rating)
    self.rating = rating_slogan + rating_comment
    self.slogans_count = slogans.count
    self.comments_count = comments.count
    self.save
  end
end
