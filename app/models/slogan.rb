class Slogan < ActiveRecord::Base
  has_many :comments
  has_many :rates
  belongs_to :user
end
