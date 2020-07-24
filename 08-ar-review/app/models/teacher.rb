class Teacher < ActiveRecord::Base
    has_many :grade_levels
    has_many :students, through: :grade_levels
end
