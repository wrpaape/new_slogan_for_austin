class Rate < ActiveRecord::Base
  belongs_to :user
  belongs_to :slogan
  belongs_to :comment
end
