require 'pry'
class User < ActiveRecord::Base

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
        UserAnimal.new(self, animal_instance)
        # if self.pets.count < 3
        #     animal_instance.owner = self #self is the current user instance
        # else
        #     puts "Stop it. Get some help."
        # end
    end

    def user_animals
        UserAnimal.all.select do |ua_instance|
            ua_instance.user == self 
        end
    end

    # vlad.user_animals.pets
    # <user instance>.user_animals
    # [<ua instance>, <ua instance>].map 

    def pets 
        user_animals.map do |ua_instance|
            ua_instance.animal
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
