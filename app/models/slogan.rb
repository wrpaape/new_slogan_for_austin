class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user
  after_create :revise

  def trend
    phrase = "dench"
    start = 1990
    last = 2008

    `python #{Rails.root.join('lib', 'assets', 'ngram.py')} #{phrase} #{start} #{last} 2>&1`
  end

  private

  def revise
    user = User.find(user_id)
    user.slogans_count += 1
    user.save
  end


end
