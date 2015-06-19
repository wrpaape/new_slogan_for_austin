class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user
  after_create :revise, :trend



  private

  def revise
    user = User.find(user_id)
    user.slogans_count += 1
    user.save
  end

  def trend
    phrase = body.split(" ")
    start = 2000
    last = 2008
    slopes = []
    phrase.each do |word|
      slopes << `python #{Rails.root.join('lib', 'assets', 'ngram.py')} #{word} #{start} #{last} 2>&1`.chomp.to_f
    end
    avg_slope = slopes.inject{ |sum, el| sum + el } / slopes.size
    self.trend_coeff = avg_slope
    self.save
  end
end
