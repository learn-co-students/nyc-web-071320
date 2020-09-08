console.log("functions & stuff")

/*

1. SCOPE

  a. Global Scope
  b. Function Scope
  c. Block Scope

2. HOISTING

3. VARIABLE DECLARATION

4. FIRST CLASS FUNCTIONS

  a. callbacks
  b. closures
  c. higher order functions

*/

// ---------------------------------------------------------------------------------------------------------------------------------

// 1. SCOPE
/* 
- Lexical scoping uses the location where a variable is declared within the code to determine where that variable is available
- nested function have access to variables declared in their outer scope
- function can reach "up" to higher scope to access variables declared there, but the reverse does not work
- Lexical Scoping means that in a nested group of functions, 
the inner function have access to the variables and other resources of their parent scope.
*/

  // a. Global Scope
  // variables declared in the global scope are visible to any nested function in the same scope

  // const name = "Steven"

  // const sayHi = () => {
    // console.log(`Hi there ${name}`)
  // }


  // b. Function Scope
  // variables declared in function scope are visible within the function and any nested functions inside of it, but not visible from outside of the function
  
  // let name = "Michael"

  // const sayHi = () => {
  //   let firstName = "Steven"
  //   let something = () =>  {
  //     console.log("something", firstName)
  //   }
  //   // console.log(`Hi there ${firstName}`)
  //   something()
  // }

  // console.log(firstName)

  // c. Block Scope
  // variables declared in block scope are visible within the block and any nested functions inside of it, but not visible from outside of the block
 
  // if(true){
  //   const firstName = "Steven"

  //   let something = () =>  {
  //     console.log("something", firstName)
  //   }

  //   something()
  //  }

  //  console.log(firstName)
  
// ---------------------------------------------------------------------------------------------------------------------------------
// 2. HOISTING
/* 
when JS is being compiled, certain functions and variables are "hoisted" to the top of whatever scope they're in - variable definitions don't come along for the ride
*/

// variables declared with `var` are hoisted, `let` and `const` are not

// console.log("first", dog)

// var dog = "Perky"

// console.log("second", dog)


// function declarations are hoisted, arrow functions and function expressions are not

// bark()

// function bark(){
//   console.log("Woof")
// }

// does not get hoisted
// const bark = function(){
//   console.log("Woof expression")
// }

// does not get hoisted
// const bark = () => {
//   console.log("Woof arrow")
// }

// ---------------------------------------------------------------------------------------------------------------------------------
// 3. VARIABLE DECLARATION
  // a. var
  // don't user var
  // variables declared with var can be both redeclared and redefined


  // var dog = "Perky"
  // var dog = "Neikko"


  // b. let
  // let allows us to redefine a variable, but not redeclare it

  // // this will error out
  // let cat = "Houdini"
  // let cat = "Edgar"

  // // this is cool
  // let cat = "Houdini"
  // cat = "Edgar"


  // c. const
  // const does not allow us to either redeclare or redefine a variable


  //  // this will error
  //  const horse = "Benny"
  //  const horse = "Lady"

  // // this will error
  // const horse = "Benny"
  // horse = "Lady"

  // this is cool
  // const fish = {
  //   name: "Chris",
  //   species: "Goldfish"
  // }

  // fish.name = "Christopher"
  // fish.age = 12

  // // this is not cool
  // fish = {
  //   name: "Chris",
  //   species: "Goldfish"
  // }


  
// ---------------------------------------------------------------------------------------------------------------------------------
// 4. FIRST CLASS FUNCTIONS

  /* 
  languages are said to treat functions as first class citizens 
  when they treat functions like other objects, meaning they can be
  assigned to variables, they can be passed around as arguments,
  or they can be assigned as properties inside objects.
  */

  // a. callbacks 
  // when functions are passed as arguments to other functions

  const myMap = (array, callback) => {
    const newArray = []

    for(let item of array){
      const newItem = callback(item)
      newArray.push(newItem)
    }
    
    return newArray
  }

  
  // b. higher order functions
  // functions that accept functions as parameters or that return other functions

  const multiply = num1 => {
    return num2 => {
      return num1 * num2
    }
  }
  

  // c. closures
  // a closure is when a function is able to remember and access its
  // scope even when that function is executing outside of its original scope
  // a function with a backpack, a function with baggage

  // carries around the num1 variable in its backpack and uses it
  // at the time of invokation even though it is no longer "in scope"
  const doubler = multiply(2)
  



// ----------------------------------------------------------------------


