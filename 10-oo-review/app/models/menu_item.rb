class MenuItem
    attr_reader :recipe, :restaurant
    @@all = []
    def initialize(recipe, restaurant)
        @recipe = recipe
        @restaurant = restaurant 
        MenuItem.all << self 
    end

    def self.all 
        @@all
    end
end