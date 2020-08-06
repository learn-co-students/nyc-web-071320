# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
User.destroy_all
Favorite.destroy_all

puts "...creating movies"
20.times do 
  Movie.create(title: Faker::Movie.title, genre: Faker::Book.genre, year: rand(1950..2008), img_url: Faker::Fillmurray.image)
end 

puts "...creating Users"
20.times do 
  User.create(name: Faker::Movie.title, age: rand(80..150), slogan: Faker::Hipster.sentence, img_url: Faker::LoremPixel.image)
end 

puts "...creating Favorites"
60.times do 
  Favorite.create(user_id: User.all.sample.id, movie_id: Movie.all.sample.id)
end 

puts "COMPLETE!!!"