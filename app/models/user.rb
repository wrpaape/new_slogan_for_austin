class User < ActiveRecord::Base
  has_many :slogans
  has_many :comments
  has_many :rates
  has_secure_password

  def revise
    rating_slogan = slogans.sum(:rating)
    rating_comment = comments.sum(:rating)
    rating = rating_slogan + rating_comment
    slogans_count = slogans.count
    comments_count = comments.count
    save
  end
end
