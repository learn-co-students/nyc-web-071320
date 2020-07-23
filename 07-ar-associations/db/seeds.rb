
User.delete_all
Animal.delete_all
UserAnimal.delete_all 

vlad = User.create({name: "Vlad", age: 21, ssn: 1234, nickname: nil})
jeff = User.create(name:"Jeff", age:21, ssn:1234, nickname: "jeff")
jenn = User.create(name:"Jennifer", age:21, ssn:1234, nickname:"Jenn")

bob = Animal.create(species: "snake", name: "Bob", speak:"hiss")
coco = Animal.create(species: "dog", name:"Coco", speak:"bark bark")
momo = Animal.create(species:"flying lemur", name:"momo", speak:"slkdfjlsk")
sophie = Animal.create(species:"husky", name:"sophie",speak: "woof woof")

ua1 = UserAnimal.create(user: vlad, animal: momo)
ua2 = UserAnimal.create(user: vlad, animal: sophie)
ua3 = UserAnimal.create(user: jeff, animal: bob)
ua4 = UserAnimal.create(user: jenn, animal: bob)
ua5 = UserAnimal.create(user: jenn, animal: momo)
ua6 = UserAnimal.create(user: jenn, animal: coco)
    # User.new
    # User.save

    # :key => value
    # key: value 


# jeff = User.new("Jeff", 21, 1234)
# jenn = User.new("Jennifer", 21, 1234, "Jenn")

# bob = Animal.new("snake", "Bob", "hiss")
# coco = Animal.new("dog", "Coco", "bark bark")
# momo = Animal.new("flying lemur", "momo", "slkdfjlsk")
# sophie = Animal.new("husky", "sophie", "woof woof")


# # jenn.adopt_animal(bob)



