class User < ApplicationRecord
  has_many :reviews
  has_many :movies, through: :reviews

  has_secure_password

  # def password=(secret)
  #   hashed_password = BCrypt::Password.create(secret)
  #   self.password_digest = hashed_password 
  # end

  # def password 
  # end
end
