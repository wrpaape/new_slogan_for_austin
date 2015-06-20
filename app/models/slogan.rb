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
    relevancies = []
    slopes = []
    phrase.each do |word|
      rel, slope = `python #{Rails.root.join('lib', 'assets', 'ngram.py')} #{word} #{start} #{last} 2>&1`.chomp.split(' ')
      relevancies << rel.to_f
      if rel.to_f > 0.001
        slopes << 0.0
        puts "rejected!"
      else
        slopes << slope.to_f
      end
    end
    avg_slope = slopes.inject{ |sum, el| sum + el } / slopes.size
    self.trend_coeff = avg_slope
    self.save
  end
end
