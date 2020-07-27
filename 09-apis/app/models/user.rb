class User < ActiveRecord::Base
    has_many :user_animals
    has_many :animals, through: :user_animals
    # def animals 
    #     SQL
    # end

    def self.login
        puts "Welcome to our App! Please log in. What is your name?"
        name = gets.chomp
        puts "What is your password?"
        password = gets.chomp
        user = User.find_by(name: name, password: password)
    end

    def adopt_animal(animal)
        UserAnimal.create(user: self, animal: animal)
    end

end

