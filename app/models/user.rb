class User < ApplicationRecord
  has_secure_password
  has_many :cars
  has_One :shopping_cart
end
