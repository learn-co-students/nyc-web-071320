class Restaurant
    attr_accessor :name, :star_rating
    @@all = []
    def initialize(name, star_rating)
        @name = name 
        @star_rating = star_rating
        Restuarant.all << self
    end

    def self.all 
        @@all
    end

    def menu_items
        MenuItem.all.filter do |menu_item|
            menu_item.restaurant == self 
        end
    end

    def recipes
        menu_items.map do |menu_item|
            menu_item.recipe
        end
    end

    def self.highest_rating
        Restuarant.all.max_by do |rest|
            rest.star_rating
        end
    end




end