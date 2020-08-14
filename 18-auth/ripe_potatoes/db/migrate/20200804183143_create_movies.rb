class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :img_url
      t.text :overview
      t.integer :vote_average
      t.integer :vote_count
      t.integer :year

      t.timestamps
    end
  end
end
