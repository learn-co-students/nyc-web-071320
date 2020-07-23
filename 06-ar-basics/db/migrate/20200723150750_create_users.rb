class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age 
      t.integer :ssn
      t.string :nickname
    end
  end
end
