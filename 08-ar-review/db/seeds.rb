Student.delete_all
Teacher.delete_all
GradeLevel.delete_all

tashawn = Teacher.create(last_name: "Williams", grade_level: "first", years_of_experience: 3)
ian = Teacher.create(last_name: "Grubb", grade_level: "first", years_of_experience: 3)


s1 = Student.create(first_name: "Mimi",last_name: "O",grade_level: "first" )
s2 = Student.create(first_name: "Ian",last_name: "G",grade_level: "second")

GradeLevel.create(student_id: s1.id, teacher_id: tashawn.id)
# We communicate to Ruby => AR => DB