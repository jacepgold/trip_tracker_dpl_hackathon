class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :state
      t.string :city
      t.integer :zip
      t.string :street
      t.integer :building_number

      t.timestamps
    end
  end
end
