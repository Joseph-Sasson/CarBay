class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :price
      t.string :car_name

      t.timestamps
    end
  end
end
