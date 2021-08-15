/* Any block of code (code inside of curly brackets) creates its own scope, too */

if (true) {
  let block = 'Jenny from the'; // block is locally-scoped to the if-block it was declared inside of
  console.log(block, 'block');
}

console.log('---------------')
console.log(block); // therefore, JS won't be able to find block when outside of that if-block -> ReferenceError

// ----------------------
// BLOCK SCOPE PART 2
// ----------------------

/* the pre-ES6 var keyword ignores BLOCK scope */
// meaning, if you declare a variable using var in a block-scope, it is as if it is locally scoped to whatever the block is nested inside of
  
// if (true) {
//   var block = 'Jenny from the';
//   console.log(block, 'block');
// }

// console.log(block); // in this case, because you used var to declare a variable in an if-block, it is as if you declared the variable globally, because the if-block is not nested inside of anything

// However, the var keyword DOES respect FUNCTION scope - so if the if-block were nested inside of a function, the variable would be locally scoped to that function

// -----------------------------------------

/*
Why do we have let and var if they seem to serve the same purpose?
--------------------------
- The reason why let keyword was introduced to the language was block scope is confusing and was one of the main sources of bugs in JavaScript.
(source: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)

- Therefore, we now stick to using let/const, although declaring variables with var is still possible

- There are other differences, one of which is hoisting.

*/