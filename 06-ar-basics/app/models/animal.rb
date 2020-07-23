class Animal
    attr_accessor :type, :name, :speak
    @@all = []

    def initialize(type, name, speak)
        @type = type
        @name = name
        @speak = speak
        Animal.all << self
    end

    ## a class method to find all animals who dont have a home yet :(

    def self.all 
        @@all
    end

    def say_hello
        puts "#{self.name} says #{self.speak}!"
    end

end
