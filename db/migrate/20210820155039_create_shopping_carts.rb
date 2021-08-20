class CreateShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_carts do |t|
      t.belongs_to :car, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :total_price

      t.timestamps
    end
  end
end
