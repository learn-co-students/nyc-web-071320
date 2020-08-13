class Review < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :movie


  validates :rating, numericality: {greater_than: 0, less_than_or_equal_to: 10}
  validates :content, :rating, presence: {message: 'gotta be there'}
  validates :content, length:  {maximum: 500}
  validates :user, uniqueness: {scope: :movie_id}

  # validate :some_custom_method
  
end
