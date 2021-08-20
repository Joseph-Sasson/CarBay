class CarSerializer < ActiveModel::Serializer
  attributes :id, :image, :price, :car_name
  has_one :user
end
