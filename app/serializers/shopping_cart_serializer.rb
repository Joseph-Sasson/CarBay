class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id, :total_price
  has_one :car
  has_one :user
end
