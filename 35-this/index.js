console.log("this is so much fun!")

/************ Execution Context ***********************/

/* In JavaScript, execution context is an abstract concept that holds information about the environment within which the current code is being executed.

Every Execution Context entails the variables, objects, and functions available at a particular time and also contains a reference to a this object. 

This is determined *contextually* at the time of invocation.
*/



/************ Default Binding with a Standalone Function Invocation ***********************/

// in a simple function call, `this` will be the window object (or the global object in Node)
// the default binding for a simple function call in the global context will be the window object

window.title = "Catcher in the Rye"

function printBookTitle(pageCount){
  console.log(`This book is titled ${this.title}. It has ${pageCount} pages.`)
}

/************ Implicit Binding with Function called on a Context Object **********/

// `this` references the object executing the current function, we can call this object the "context object"

const brave = {
  title: "Brave New World",
  author: "Aldous Huxley",
  printAuthor: function(){
    console.log(`This book is written by ${this.author}`)
  }
}

// note - a function can lose its implicitly bound this as in the case of a callback

let header = document.querySelector('#that')

// the callback loses its implicit this binding to the brave object
// header.addEventListener("click", brave.printAuthor) 



/************ Explicit binding with Bind/Call/Apply ******************/

// thisArg is an object we want to be used as the `this` object in a given context

const hp1 = {
  title: "Harry Potter 1",
  author: "JK Rowling"
}

// printBookTitle.call(hp1, 99)
// printBookTitle.apply(hp1, [99, "other", "stuff"])

printBookTitle.bind(hp1, 99) // useful for callbacks

// header.addEventListener("click", brave.printAuthor.bind(hp1, 99)) 


/************ Function Called with New Keyword ***********/

function Book(title, author){
  this.title = title,
  this.author = author
}

let dune = new Book("Dune", "Frank Herbert")


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the enclosing (function or global) scope
// cannot use `call`, `apply`, or `bind` with arrow function
// arrow functions are not great candidates to be used inside objects if you need to reference the calling object
// the behavior of arrow functions with regard to this is more predictable


let stand = {
  title: "The Stand",
  author: "Stephen King",
  year: 1987,
  format: 'hardcover',
  printYear: () => {
    console.log(`The book was published in ${this.year}`)
  },
  printAuthor: function(){
    console.log(`This book is written by ${this.author}`)
  }
}























































// const houdini = {
//   name: "Houdini",
//   returnThis: this,
//   sayNameTraditional: function(){
//     console.log(`Hi my name is ${this.name}`)
//   },
//   sayNameArrow: () => {
//     console.log(`Hi my name is ${this.name}`)
//   },
//   otherFunction: function (){
//     const thing = () => {
//       console.log("Name: ", this.name)
//     }

//     thing()
//   }
// }
