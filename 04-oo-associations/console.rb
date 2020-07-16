require 'pry'
require_relative './app/models/user'
require_relative './app/models/animal'


vlad = User.new("Vlad", 21, 1234)
jeff = User.new("Jeff", 21, 1234)
jenn = User.new("Jennifer", 21, 1234, "Jenn")
# jennifer = User.new("Jennifer", 21, 1234, "Jenny")

bob = Animal.new("snake", "Bob", "hiss", jenn)
coco = Animal.new("dog", "Coco", "bark bark", jeff)
momo = Animal.new("flying lemur", "momo", "slkdfjlsk", jenn)
sophie = Animal.new("husky", "sophie", "woof woof", jeff)



# jenn.adopt_animal(bob)










binding.pry