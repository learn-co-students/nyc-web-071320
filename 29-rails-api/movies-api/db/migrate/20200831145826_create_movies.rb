class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.integer :year
      t.integer :score
      t.string :imageUrl

      t.timestamps
    end
  end
end
