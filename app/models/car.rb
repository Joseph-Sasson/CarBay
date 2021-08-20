class Car < ApplicationRecord
  belongs_to :user
  has_many :shopping_carts
end
