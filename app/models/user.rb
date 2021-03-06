class User < ApplicationRecord
  has_secure_password
  has_many :cars, dependent: :destroy
  has_one :shopping_cart

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, :confirmation => true, :length => {:within => 8..15}, on: :create
end


