## Ruby OO Relationships/Associations (One to Many)

Doctor -> Patient
Post -> Tags

## Agenda
- Types of Associations 
- One to Many/Has Many, Belongs to


## Types of Associations
- One to Many
    - Has many => Owner will have many pets
    - Belongs to  => Pet will belong to an owner
        - holds the reference to the instance that owns it
        - keeps track of the association
        - ie a Pet has a collar that tells who its owner is 








- Many to Many 
    - Has many, through


## Deliverables 
- implement animal class
- an animal needs to belong to a user
- an animal needs to know who its user is 
- an owner should also know who all of its dogs are


## Practice
- Shelters 
- Animal can belong to one shelter
- Shelter can have many animals 
- Methods...
    - find_all_in_shelter: which find all the animals that are curently in a shelter
    - find_all_adopted: which find all the animals that are curently adopted / have an owner
    - find_by_shelter: by shelter name
    - ... the world is your oyster!