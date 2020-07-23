class Animal < ActiveRecord::Base
    has_many :user_animals
    has_many :users, through: :user_animals
    # def user 
    #     SQL
    # end

    def say_hello
        puts "#{self.name} says #{self.speak}!"
    end

end
