console.log("Welcome to Mod 3")


// alert("hey there")

/*
 **Questions


 **Why JS?

  - three pillars - Coffee Dad Twitter
  - request-response cycle
  - 1. DOM Manipulation - changing the HTML that's been loaded into the browser
  - 2. Event Handling - attaching behavior (code) to particular types of actions happening in the browser to particular parts of our DOM
  - 3. Communicating with a Server - sending requests and receiving responses from some remote server (API)


  - Single Page Applications 
  - a full, dynamic application wherein there are no page reloads

 
 **What is JS?

 - ECMAScript


 **How JS?

  - how to load JS into an HTML document


  - debugger and console.log
  - console.dir => looking at objects
  - console.table => breaks down object properties in a table view
  

  - type checking
  - typeof variable

 **Some data types
 - null

 
 - Number
  - only the one Number class
  - 0 is falsey

 
 - String
  - can use "" or ''
  - template literal ``
  - string interpolations `${variable}`



 - Object Literals
 - equivalent to hashes


 
 - Array



 - undefined



 **Functions
  - multiple ways of declaring functions
  - definition vs invocation 



*/

// function declaration
function sayHi(name) { 
  console.log(`Hi there ${name}`) 
}

// function expression
let sayHello = function(name){
  console.log(`Hello there ${name}`)
}

// arrow functions
let sayHowdy = name => `Howdy ${name}`

