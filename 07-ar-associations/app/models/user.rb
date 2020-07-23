class User < ActiveRecord::Base
    has_many :user_animals
    has_many :animals, through: :user_animals
    # def animals 
    #     SQL
    # end


end

