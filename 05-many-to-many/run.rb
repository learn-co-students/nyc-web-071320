require 'pry'
require_relative './app/models/user.rb'
# Pets CLI app. 
# A User should be able to find all pets with a certain type

# binding.pry

animals = [{type: "dog", name: "chief", speak: "bark", pawprint: nil},
{type: "dog", name: "coco"},
{type: "dog", name: "daisy"},
{type: "dog", name: "murphy"},
{type: "snake", name: "bob", speak: "hiss"},
{type: "cat", name: "ziva"},
{type: "cat", name: "chicken nuggets"},
{type: "cat", name: "pearl", pawprint: "5"}]




#hash => key as dog and value
# integer/string/array/hash/boolean


# Defining
def animals_cli(array_of_animals) 
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

    def run 
        puts "Welcome, would you like to sign up or log in?"
        action = gets.chomp 

        if action == "sign up"
        puts "What is your name?"
        name = gets.chomp 
        puts "What is your age?"
        age = gets.chomp 
        puts "What is your social security number?"
        ssn = gets.chomp 
        puts "What is your nickname?"
        nickname = gets.chomp 
        user = User.new(name, age, ssn, nickname)
        # goes into the initialize
        # pushes the user instance into the @@all
        run 
        
    elsif action == "log in"
        puts "What is your name?"
        name = gets.chomp 
        # iterate through the @@all
        user = User.all.find {|user| user.name == name}       
        puts "Do you want to view your profile? (y/n)"
        response = gets.chomp
        if  response == "y"
            user.view_profile 
        end
        end
        if input == "y"
            puts "What would you like to change"
            changing = gets.chomp 
            binding.pry
        end

    end
    
    # Invoking/Running/Executing/Calling/Using
    # run # truthy ? falsy
    
    binding.pry 
    "something"
