/* We can create our own methods too! */

/* Consider this object: */

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
// };

/* objects can hold any type of value, including functions! */

/* if we add a function to this object, that function is now a method of the object */

// -------------------------------------------
// Creating methods on an object
// -------------------------------------------

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   myMethod: function () {
//     console.log('I am a method')
//   },
//   sayHi: function() {
//     console.log('Hello I am pusheen.')
//   }
// };

// /*
// we can call our own object methods the same way we call built-in methods
// */

// pusheen.myMethod();
// pusheen.sayHi();

/*
So what is an Object Method?
----------------------------
an object method is simply a function specific to an object
*/

// -------------------------------------------
// Best practice and Example 2
// -------------------------------------------

/*
  methods on an object generally should perform an action that's relevant to the idea or concept represented by the object itself
*/

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(){
//     console.log("Hello I am Pusheen the cat.");
//   }
// };

// pusheen.greet();

// -------------------------------------------
// Example 3
// -------------------------------------------

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(){
//     console.log('Hello I am pusheen the cat.');
//   },
//   getBirthYear: function(currentYear){ // takes an argument
//     return currentYear - 7;
//   },
  // personalGreet: function(name = 'Sam') { // takes an argument
  //   console.log(`Hello ${name}! I am Pusheen.`);
  // },
  // sayAge: function(){
  //   console.log('I am 7 years old.');
  // },
// };

// /*
// let's try out other methods!
// */
// console.log(pusheen.getBirthYear(2020));
// pusheen.personalGreet('Ariel');
// pusheen.sayAge();

/*
important: since methods are just functions, anything that was possible with a function is possible with a method
*/

// -------------------------------------------
// Sidenote: String Interpolation
// -------------------------------------------

// String Interpolation

// let myName = 'Ariel';
// let myAge = 26;
// I want to compose a string that says that my name is Ariel and that my age is 26

/*
-  Step 1: instead of using '', use tick marks ``, in order to use string interpolation, the string MUST be surrounded by a `` (tick mark), and NOT '' (normal quotes)

- Step 2: have any variable/value that you want to   insert be surrounded by a ${}
  ------------------------
  - you need to use tick marks because if you use normal quotes, a $ will just be a normal dollar string
  - ${name_of_variable}
  - ^ this will seamlessly add the variable into the string you are creating
*/

let myName = 'Ariel';
let myAge = 26;

let usingStringInterpol = `My name is ${myName} and my age is ${myAge}`

let notUsingStringInterpol = 'My name is ' + myName + ' and my age is ' + myAge

console.log(usingStringInterpol);
console.log(notUsingStringInterpol);
