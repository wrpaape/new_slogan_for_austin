class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user
  after_create :revise

  private

  def revise
    user = User.find(user_id)
    user.slogans_count += 1
    user.save
  end
end
