# AR-Environment-Skeleton

You can use this repo to build new Activerecord projects

* You will need to create your own app/models directories

## Questions 

- Files and file structure
- Where is the database? 
- Primary
- Foreign
- seeds/testing


Active Record: Communicate with the database 
    - Rake
        - updating the database 


1. db/tables first 
2. class
3. seeds
4. test



Domain: Student-Teacher

- A Student has a first_name (string)
- A Student has a last_name (string)
- A Student has a grade_level (string), for ex: "first", "second", "third", etc...
- Student#full_name should return the first and last name of the student in one string, for ex: "Ian Grubb"
- Student#grade_level should return the student's grade level
- Student.all should return a list of all students
- Student.all_in_grade should receive an argument of a grade, ex: "first", and return all students who are in that grade

- A Teacher has a last_name (string)
- A Teacher has a grade_level (string)
- A Teacher has a years_of_experience (integer)
- Teacher#tenure should return true if a teacher has taught more than 5 years, otherwise false

You should have a completed seeds file for testing


A Student belongs to a Teacher 
Teacher has many students 


1. db/tables first 
2. class
3. seeds
4. test


Student has many Teachers 
Teacher has many Students 
