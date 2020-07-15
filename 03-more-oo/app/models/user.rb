require 'pry'
class User
    attr_reader :views
    attr_writer :ssn
    attr_accessor :name, :age, :height, :nickname # => @height
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
   
   
   
   



   private
   
    def increment_views

        @views += 1
    end

    

    # def name 
    #     puts "your name is #{@name}"
    # end

end

# create a class variable, setting it equal to an empty array
# inside of initialize push the name into the class variable 














#
    # Look for a User class 
    # Look for an initialize instance method

# binding.pry 
