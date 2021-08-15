/*
What is hoisting?
-----------------
Basically, when JavaScript compiles all of your code, all variable declarations are lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made.

The difference between var, let and const declarations is their initialization.

Function declarations are also hoisted in a similar manner, but these go to the very top, so they will sit above all of the variable declarations.

Source: https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
*/

/* 
Thanks to hoisting, functions defined with the function keyword (function declaration) can be run on any line in the file 
*/

// function hoisting example

willThisWork();

function willThisWork() {
  console.log('Yes!');
}

// ----------------------
// HOISTING PART 2 - VARIABLES - VAR
// ----------------------

/* 
Thanks to hoisting, variables can be run on any line in the file/function 
*/

/* 
Important note: 
---------------
For variable hoisting, the only thing that gets moved to the top is the variable declaration, NOT the actual value given to the variable.

// Thanks to hoisting, the variable declaration will be hoisted to the top, and since the value itself was only set on line 65, JS initializes the variable's value to undefined (this initialization to undefined only happens with var)
*/

// console.log(waitForIt); // will print undefined

// var waitForIt = 'here I am';

// console.log(waitForIt); // will print 'here I am'

/*

What that means is:
------------------
When we initialized the variable waitForIt with value 'here I am' on line 56 of this repl.it

The declaration: 
              var waitForIt = undefined;
is what's hoisted to the top of the scope.

But the initialization:
              waitForIt = 'here I am';
still happens on line 43!

*/

// ----------------------
// HOISTING PART 2 - VARIABLES OR FUNCTIONS DECLARED WITH LET/CONST
// ----------------------

/*
However, variable declarations using let or const, while hoisted, are NOT automatically initialized to have value undefined -> therefore, if you attempt to access the variable, you'll get something like: 
-----------------------------------------------
ReferenceError: Cannot access '<variable_name>' before initialization

- you get the ReferenceError because the variable was never initialized yet, not even with a value of undefined 
*/

// console.log(waitForIt); // ReferenceError

// const waitForIt = 'here I am';

// console.log(waitForIt); // will print 'here I am'

/*

What that means is:
------------------
When we initialized the variable waitForIt with value 'here I am' on line 91 of this repl.it

The declaration: 
              let waitForIt = NOTHING
is what's hoisted to the top of the scope.

But the initialization:
              waitForIt = 'here I am';
still happens on line 77!

Variables declared with let and const ARE hoisted, but there is a period between entering scope and being declared where they cannot be accessed, and if you try, you get a ReferenceError. This period is known as the temporal dead zone (TDZ).

*/

/*
The same rules apply for defining a function when using let or const
*/

/* 
functions defined with let or const (function expression) can only be run after the line on which they were defined, due to the same phenomenon described above for variables declared using let or const
*/

// willThisWork();

// const willThisWork = function() {
//   console.log('No!');
// }

// ----------------------
// HOISTING PART 4 - NOTE ABOUT GLOBAL VARIABLES
// ----------------------

// this section is just to emphasize that the rules and restrictions surrounding hoisting apply to global variables as well

/* 
Because the only thing that gets hoisted is the variable declaration, even though a global variable can be referenced from anywhere in your code, the VALUE ASSIGNED TO the global variable CANNOT be accessed until after the assignment operation occurs. 
*/

// console.log(waitForIt); 
// // if using let: ReferenceError
// // if using var: prints out undefined

// let waitForIt = 'here I am';
// //var waitForIt = 'here I am';

// console.log(waitForIt); // will print 'here I am'
