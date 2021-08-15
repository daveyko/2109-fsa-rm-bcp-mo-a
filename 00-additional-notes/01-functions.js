// the classic way of defining functions
// function oldFashioned(num1) {
//   console.log(`I'm a classy function.`);
// }


// // These two work exactly the same!
// const anonInVar = function(num1) {
//   console.log('anonymous function in a variable');
// }

// const anonArrowInVar = (num1) => {
//   console.log(`anonymous arrow function in variable`)
// }

// oldFashioned();
// anonInVar();
// anonArrowInVar();

// console.log(oldFashioned);
// console.log(anonInVar);
// console.log(anonArrowInVar);



// so what makes one better than the other??
// well functions defined with the `function` keyword are hoisted
// this means that they're defined before anything else
// this means you can use it before you have the function definition!

// alsoOldFashioned();


// function alsoOldFashioned() {
//   console.log('I am also old fashioned');
// }

// this won't work because we haven't defined it yet
// newGuy();

const newGuy = () => {
  console.log('hi');
}
// this works
// newGuy();


// this also won't work because we haven't defined it yet
// alsoNewGuy();

// doesn't matter that we used function keyword because we're putting it in a variable
const alsoNewGuy = function(){
  console.log('hi');
}
// this works
alsoNewGuy();

