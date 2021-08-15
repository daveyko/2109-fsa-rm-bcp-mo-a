/* methods frequently reference other properties in the same object */

// one way to reference properties of an object is to use normal object property access, such as dot notation (objectName.propertyName)

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am
//     ${pusheen.name} the ${pusheen.color} cat. I am ${pusheen.age}.`); // referencing yourself, different properties of the object you are currently inside of
//   },
//   birthYear: function(currentYear){
//     return currentYear - pusheen.age;
//   }
// };

// // this works great because if any of the properties get changed, the methods will always have the correct information

// pusheen.greet('Jeff');
// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great";
// pusheen.greet('Jeff');

// -------------------------------------------
// Introducing the this Keyword
// -------------------------------------------

// but having to use the name of the object everytime you want to access a property can get tedious

// JS has a keyword, this, that you can use to reference the object that you are currently inside of

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age + ".");
//   },
//   getBirthYear: function(currentYear){
//     return currentYear - this.age;
//   },
//   getThis: function() {
//     return this; // return the pusheen object
//   }
// };

// pusheen.greet('Matt');

// // 'this' is literally just another reference to the pusheen object

// let returnedObject = pusheen.getThis();
// console.log(returnedObject.name);
// console.log(returnedObject === pusheen); // they are the same, because returnedObject is a reference to the pusheen object

// -------------------------------------------
// Example with Objects and this
// -------------------------------------------

// let calc = {
//   num1: 20,
//   num2: 30,
//   sum: function() {
//     return this.num1 + this.num2;
//   },
//   difference: function() {
//     return this.num1 - this.num2;
//   }
// };

// console.log(calc.sum());
// calc.num2 = 15;
// console.log(calc.difference());

// -------------------------------------------
// this and arrow methods
// -------------------------------------------

// // What happens if you use arrow methods instead of normal functions as object methods?

/*
Arrow method: ES6 Way of declaring a method

function test(name){
 console.log(name);
}

IS EQUIVALENT to

let arrowTest = (name) => {
  console.log(name);
}

test('Ariel');
arrowTest('Ariel');

*/

// Big difference between arrow methods and normal function declarations: this

// if you attempt to refer to this while inside of an arrow function, it will only refer to the arrow function itself - it won't remember the object that it exists inside of

let calc = {
  num1: 20,
  num2: 30,
  sum: function() {
    return this.num1 + this.num2;
  },
  difference: function() {
    return this.num1 - this.num2;
  },
  product1: function() {
    return this.num1*this.num2;
    // this DOES refer to calc, BECAUSE it's inside of a normal function
  },
  product2: () => {
    return this.num1*this.num2;
    // this does NOT refer to calc, BECAUSE it's inside of an arrow function
  }
};

// in a normal function, accessing this.num1 will give you 20 and accessing this.num2 will give you 30 -> 20 * 30 = 600
console.log(calc.product1());

// be aware of the consequences of adding arrow functions -> it changes THIS
console.log(calc.product2());
