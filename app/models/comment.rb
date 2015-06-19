class Comment < ActiveRecord::Base
  has_many :rates
  belongs_to :user
  belongs_to :slogan
  after_create :revise

  private

  def revise
    user = User.find(user_id)
    slogan = Slogan.find(slogan_id)
    user.comments_count += 1
    user.save
    slogan.comments_count += 1
    slogan.save
  end
end
