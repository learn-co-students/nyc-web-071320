## OO Associations/Relationships: Many to Many

# Questions
- require_relative 
    - ruby 

# Agenda
- Review One to Many/Belongs to
- Discuss Has many, Through

User has many Animals
    - We need a relationship method
    - in this case, we iterate through Animal.all
        - we filter down to all the animals that belong to this owner 

Animal belongs to a User
    - Responsible for managing the relationship
    - Holds a reference to the "Has many"


Many to Many => Has many, Through
- Require a Join Model/Table
    - 2 has many/belong to associations

- User has many Animals, through UserAnimals
- Animal has many Users, through UserAnimals