class CLI

    def start
        user = User.login
        if user 
            puts "Welcome! Thank you for logging in! Would you like to adopt one of these animals? If yes, enter the name"
            Animal.all.each do |animal|
                puts animal.name
            end
            animal_name = gets.chomp 
            animal = Animal.find_by(name: animal_name)
            user.adopt_animal(animal)
        else 
            puts "incorrect username or password. Please try again"
        end
    end
    
end