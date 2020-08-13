# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
User.destroy_all
Review.destroy_all

# puts "...creating movies"
# 20.times do 
#   Movie.create(title: Faker::Movie.title, genre: Faker::Book.genre, year: rand(1950..2008), img_url: Faker::Fillmurray.image)
# end 


res = RestClient.get("https://api.themoviedb.org/3/discover/movie?api_key=#{ENV['MOVIE_API']}")
res_body = res.body
movies = JSON.parse(res_body)


movies["results"].each do |movie|
  Movie.create(
    title: movie["title"], 
    vote_average: movie["vote_average"], 
    vote_count: movie["vote_count"],
    overview: movie["overview"], 
    img_url: "https://image.tmdb.org/t/p/w500/#{movie['poster_path']}", 
    year: movie["release_date"].split("-")[0].to_i
  )
end 

puts "...creating Users"
20.times do 
  User.create(name: Faker::Movie.title, age: rand(80..150), slogan: Faker::Hipster.sentence, img_url: Faker::LoremPixel.image)
end 

puts "...creating Review"
30.times do
  Review.create(user: User.all.sample, movie: Movie.all.sample, rating: rand(1..10),  content: Faker::Movie.quote)
end

puts "COMPLETE!!!"