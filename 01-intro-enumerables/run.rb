require 'pry'


# 1. I am building a Dogs application. I need to a way to hold all the information (name, breed) about a SPECIFIC dog. Which datatype should I use?

# 2. Now, I need a way to hold a list of all of the plants in my app. Which datatype should I use? 

# 3. I want to be to find all dogs with a specific breed. What iterator should I use? What datatype should be returned?

# 4. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?

# 6. I want a list of only the names of each dog. How do I do that? What datatype should be returned?



# Pets CLI app. 
# A User should be able to find all pets with a certain type

# binding.pry

animals = [{type: "dog", name: "chief"},
{type: "dog", name: "coco"},
{type: "dog", name: "daisy"},
{type: "dog", name: "murphy"},
{type: "snake", name: "bob"},
{type: "cat", name: "ziva"},
{type: "cat", name: "chicken nuggets"},
{type: "cat", name: "pearl"}]




#hash => key as dog and value
# integer/string/array/hash/boolean


# Defining
def run(array_of_animals) 
    array_of_animals
    puts "Hello! What would you like to do?"
        puts "Enter 1 to see the names of all the Pets"
        puts "Enter 2 to see all Dogs"
        puts "Enter 3 to find an animal by name"
        #"1"
        user_input = gets.chomp

        # .map/.collect
        if user_input == "1"
            array_of_animals.map do |animal|
               animal[:name] # => will return the string of the actual name
                # if animal[:type] == "dog"
                #      animal[:name]
                # end
            end#.compact
        elsif user_input == "2"
            array_of_animals.filter do |animal|
                # hash => {type: "dog/cat", name: "coco/ziva"}
                animal[:type] == "dog"
            end
        elsif user_input == "3"
            puts "what animal are you looking for?"
            animal_name = gets.chomp
            array_of_animals.find do |animal|
                animal[:name] == animal_name
            end
        end


        # A User should be able to see a list of pets
        # A User should be able to see a list of all pets' names
        
    end
    
    # Invoking/Running/Executing/Calling/Using
    # run # truthy ? falsy
    
    binding.pry 
    "something"
