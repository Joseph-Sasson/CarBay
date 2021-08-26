class Car < ApplicationRecord
  belongs_to :user
  has_many :shopping_carts

  validates :car_name, presence: true
  validates :image, presence: true
  validates :price, numericality: {greater_than: 0}
end
