console.log("Let's make some dogs... 🐕")

// // POJO 
// const perky = {
//   name: "Perky",
//   breed: "German Shepherd",
//   speak: function(){
//     return `Hi there, my name is ${this.name}!`
//   }
// }

// const neikko = {
//   name: "Neikko",
//   breed: "Mostly Rat",
//   spreak: function(){
//     return `Hi there, my name is ${this.name}!`
//   }
// }


// constructor function - factory for making instances
// function Dog(name, breed, favoriteToys){
//   this.name = name
//   this.breed = breed
  // this.speak = function(){
  //   return `Hi there, my name is ${this.name}!`
  // }
//   this.favoriteToys = favoriteToys
// }


// Dog.prototype.walk = function(){
  // console.log(`Hey I'm a ${this.breed} and I'm walking here`)
// }

// let perky = new Dog("Perky", "German Shepherd", [new Toy("bone"), new Toy("horse poop")])
// let neikko = new Dog("Neikko", "Mostly Rat", [new Toy("braided pantyhose"), new Toy("Winnie the Pooh")])

// function Toy(name){
//   this.name = name
// }

class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.speak = function(){
      return `Hi there, my name is ${this.name}!`
    }
  }

  walk(){
    console.log(`Hey I'm a ${this.breed} and I'm walking here`)
  }

  static species(){
    console.log(`Species is Dog`)
  }

  static all = []
}

let perky = new Dog("Perky", "German Shepherd")
let neikko = new Dog("Neikko", "Mostly Rat")






function takeCareOfTheDog(dog){
  console.log(`I'm a dog walker and I'm taking care of ${dog.name}. They are a ${dog.breed}. And when they talk this is what they say: ${dog.speak()}`)
}