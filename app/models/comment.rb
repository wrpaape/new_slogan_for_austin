class Comment < ActiveRecord::Base
  has_many :rates
  belongs_to :user
  belongs_to :slogan
end
