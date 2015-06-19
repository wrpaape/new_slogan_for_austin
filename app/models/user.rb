class User < ActiveRecord::Base
  has_many :slogans
  has_many :comments
  has_many :rates
  has_secure_password
end
