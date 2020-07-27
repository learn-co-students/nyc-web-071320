class UserAnimal < ActiveRecord::Base
   belongs_to :user 
   belongs_to :animal


end
# user_animal.user => truthy

