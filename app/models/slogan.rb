class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user
  after_create :revise, :trend, :plot

  private

  def revise
    user = User.find(user_id)
    user.slogans_count += 1
    user.save
  end

  def trend
    phrase = body.gsub(/[^a-z0-9\s]/i, ' ').split(" ")
    start = 2000
    last = 2008
    relevancies = []
    rel_words = {}
    phrase.each do |word|
      rel, series = `python #{Rails.root.join('lib', 'assets', 'ngram.py')} #{word} #{start} #{last} 2>&1`.chomp.split('||')
      next if series.nil?
      unless rel.to_f > 0.001
        series = series[2...-1].split(", ")
        series.map! { |point| point.to_f }
        next if series.include?(0)
        rel_words[word] = []
        series.each do |point|
          rel_words[word] << point.to_f
        end
      end
    end

    if rel_words.size.zero?
      self.trend_coeff = 0
      self.trend_coeffs = ([0] * (2000...2008).size).join("||")
    else
      word_slopes = {}
      rel_words.each do |word, series|
        word_slopes[word] = []
        for i in 0...(series.size - 1)
          word_slopes[word] << (series[i + 1] - series[i]) / series[i]
        end
      end

      phrase_slopes = {}
      years = (2000...2008).to_a
      years.each.with_index do |year, ind|
        phrase_slopes[year.to_s] = 0
        word_slopes.each do |word, slopes|
          phrase_slopes[year.to_s] += slopes[ind]
        end
        phrase_slopes[year.to_s] /= word_slopes.size
        phrase_slopes[year.to_s] *= 500
      end

      trend_coeff = phrase_slopes.values.inject{ |sum, el| sum + el } / phrase_slopes.size
      self.trend_coeff = trend_coeff
      self.trend_coeffs = phrase_slopes.values.join("||")
    end

    self.save
  end

  def plot
    series = []
    self.trend_coeffs.split("||").each { |point| series << point.to_f }
    g = Gruff::Bar.new
    g.title = self.body
    g.theme_rails_keynote
    g.y_axis_label = "Trend Index"
    max_abs = [series.max.abs, series.min.abs].max
    inc = max_abs / 3
    inc.zero? ? g.y_axis_increment = 10 : g.y_axis_increment = inc
    g.labels = { 0 => '2000', 1 => '2001', 2 => '2002', 3 => '2003', 4 => '2004',
             5 => '2005', 6 => '2006', 7 => '2007' }
    g.data " ", series
    g.hide_legend = true
    g.write("#{Rails.root.join('app', 'assets', 'images', "slogan#{self.id}")}.png")
  end
end
