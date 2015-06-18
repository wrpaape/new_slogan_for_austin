class User < ActiveRecord::Base
  has_many: slogans
  has_many: comments
end
