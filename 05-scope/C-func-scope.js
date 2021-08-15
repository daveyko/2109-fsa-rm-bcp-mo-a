// Functional Scope aka Local Scope

/* Variables declared inside of a function are called 'locally-scoped'*/

/* They CANNOT be referenced outside of the function. */

function happyFunction() {
  let message = 'I am so happy!';
  console.log(message); // within the scope
}

happyFunction();
console.log('----------------')
console.log(message); // not within the scope

// ----------------------
// FUNCTIONAL SCOPE PART 2 - LOCAL AND GLOBAL
// ----------------------

/* What if a variable with the same name is defined both locally and globally? */

// let message = 'I am global';

// function logAMessage() {
//   let message = 'I am local';
  
//   // JS will look for message locally first
//   console.log(message);
// }

// logAMessage();

// ----------------------
// FUNCTIONAL SCOPE PART 3 - LOCAL AND GLOBAL 2
// ----------------------

// let message = 'I am global';

// function logAMessage() {
//   let msg = 'I am local';
  
//   /* if it can't find it locally, JS will look at the scope outside the function, this case, the global scope */
//   console.log(message);
// }

// logAMessage();

// ----------------------
// FUNCTIONAL SCOPE PART 4 - PARAMETERS
// ----------------------

/* parameters are also locally scoped */

// let message = 'I am global';

// function logAMessage(message) {
//   // let message = 'I am local';
//   console.log(message); // what's the output?
// }

// logAMessage('I am local');

// the moment the string 'I am local' is passed
// as an argument into the logAMessage call,
// it is as if you are declaring a variable
// let message = 'I am local'
// at the top of the logAMessage function
// therefore, when JS looks for the value of 
// message to console.log(), it will grab the message parameter, because it's locally scoped