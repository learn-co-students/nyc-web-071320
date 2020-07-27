require 'rest-client'
require 'json'
require 'pry'

User.delete_all
Animal.delete_all

users_response = RestClient.get("http://localhost:3000/users")
users_data = JSON.parse(users_response)
animals_response = RestClient.get("http://localhost:3000/animals")
animals_data = JSON.parse(animals_response)

users_data.each do |user_hash|
    User.create(user_hash)
end

animals_data.each do |animal_hash|
    Animal.create(animal_hash)
end













# User.delete_all
# Animal.delete_all
# UserAnimal.delete_all 

# vlad = User.create({name: "Vlad", age: 21, ssn: 1234, nickname: nil})
# jeff = User.create(name:"Jeff", age:21, ssn:1234, nickname: "jeff")
# jenn = User.create(name:"Jennifer", age:21, ssn:1234, nickname:"Jenn")

# bob = Animal.create(species: "snake", name: "Bob", speak:"hiss")
# coco = Animal.create(species: "dog", name:"Coco", speak:"bark bark")
# momo = Animal.create(species:"flying lemur", name:"momo", speak:"slkdfjlsk")
# sophie = Animal.create(species:"husky", name:"sophie",speak: "woof woof")

# ua1 = UserAnimal.create(user: vlad, animal: momo)
# ua2 = UserAnimal.create(user: vlad, animal: sophie)
# ua3 = UserAnimal.create(user: jeff, animal: bob)
# ua4 = UserAnimal.create(user: jenn, animal: bob)
# ua5 = UserAnimal.create(user: jenn, animal: momo)
# ua6 = UserAnimal.create(user: jenn, animal: coco)

