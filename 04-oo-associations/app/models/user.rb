require 'pry'
class User
    attr_reader :views
    attr_writer :ssn
    attr_accessor :name, :age, :height, :nickname 
    @@all = []

    def initialize(name, age, ssn, nickname=nil)
        @name = name
        @age = age
        @ssn = ssn
        @nickname = nickname
        User.all << self
        @views = 0
    end

    def self.all
        @@all
    end

    def view_profile
        puts "Here is your profile"
        puts "Your name is: #{name}"
        puts "Your age is: #{self.age}"
        puts "Your age is: #{self.nickname}"
        increment_views
    end

    ## X oes an animal always need an owner? 
    ## finding all the dogs that an owner has ===> class method

    def all_dogs
        pets.select { |animal|
            animal.type == 'dog' || animal.type == 'husky'
        }
    end


    ## what if an owner wants to give a pet to another owner 
    def lend_a_pet(pet, new_owner)
        # does the pet belong to self though?!?!?
        if pet.owner == self
            pet.owner = new_owner
        else
            puts 'stop trying to steal pets. rude.'
        end

    end


    ## a method thats us search for a specific species 




    def adopt_animal(animal_instance) # bob
        if self.pets.count < 3
            animal_instance.owner = self #self is the current user instance
        else
            puts "Stop it. Get some help."
        end
    end
    
    def pets 
        Animal.all.select do |a|
            a.owner == self
        end
    end

    private


    def increment_views
        @views += 1
    end


end















#
    # Look for a User class 
    # Look for an initialize instance method

# binding.pry 
