require 'pry'
class User
    attr_writer :ssn
    attr_accessor :name, :age, :height, :nickname # => @height
    def initialize(name, age, ssn)
        @name = name
        @age = age
        @ssn = ssn
        @nickname 
    end

end


# vlad = User.new("Vlad", 21, 1234)
# jeff = User.new("Jeff", 21, 1234)
    # Look for a User class 
    # Look for an initialize instance method

# binding.pry 
