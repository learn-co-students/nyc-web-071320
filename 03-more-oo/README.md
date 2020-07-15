# More on Object Orientation

## Questions
- class variables vs class constants 
- ||= value
- instance variables vs `self`
    - if I'm referencing an attribute => variable
    - if I'm using an instance method as a helper method self
    - if we have to go through a custom reader or writer method


- We've discussed what an object is and that there are many different types of objects
    - All DataTypes are objects
    - Instances are objects
        - instances are small versions of a class who's methods are defined by their parent class
    - Classes are also objects
        - classes are a "blueprint" for what a "thing" is, what it's attributes are, how it should behave, and what methods it has. 
        - classes can also have their own methods and attributes

## Agenda
- Class methods
- `self`
- private methods

- A `User` should be able to log in
- A `User` should be able to introduce themselves
    - `User#introduce` should return a string that says "Hi, my name is _____"
- A `User` should be able to keep track of number of profile views
    - `User.views` should return the number of times a user's profile has been viewed
    - Everytime a user's profile is viewed a message should puts to the screen saying "here is your profile"
