require 'pry'
require_relative './app/models/user'
require_relative './app/models/animal'
require_relative './app/models/user_animal'


vlad = User.new("Vlad", 21, 1234)
jeff = User.new("Jeff", 21, 1234)
jenn = User.new("Jennifer", 21, 1234, "Jenn")
# jennifer = User.new("Jennifer", 21, 1234, "Jenny")

bob = Animal.new("snake", "Bob", "hiss")
coco = Animal.new("dog", "Coco", "bark bark")
momo = Animal.new("flying lemur", "momo", "slkdfjlsk")
sophie = Animal.new("husky", "sophie", "woof woof")

ua1 = UserAnimal.new(vlad, momo)
ua2 = UserAnimal.new(vlad, sophie)
ua3 = UserAnimal.new(jeff, bob)
ua4 = UserAnimal.new(jenn, bob)
ua5 = UserAnimal.new(jenn, momo)
ua6 = UserAnimal.new(jenn, coco)

# jenn.adopt_animal(bob)










binding.pry