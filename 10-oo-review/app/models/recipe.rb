require 'pry'
class Recipe

    attr_reader :name, :description
    # attr_accessor :description
    @@all=[]
    def initialize(name, description)
        @name = name
        @description = description
        # if in an instance method self => the instance
        # if in a class method self => the class
        Recipe.all << self 
    end

    def self.all
        @@all
    end

    def menu_items # turning a list of 100 menu items into a list of 20 
        MenuItem.all.filter do |menu_item|
            menu_item.recipe == self 
        end
    end

    def restaurants 
      menu_items.map do |menu_item|
        menu_item.restaurant
      end
    end





    def self.total_recipes
        self.all.count
    end

end