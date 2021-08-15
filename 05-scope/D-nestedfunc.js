// ----------------------
// FUNCTIONAL SCOPE - NESTED FUNCTIONS
// ----------------------

/* consider nested functions */

let globalVar = 'I am global';
// console.log(outerVar, innerVar);

function outer() {
  let outerVar = 'I am outer'; // locally scoped to outer()

  // console.log(innerVar);
  function inner() {
    let innerVar = 'I am inner';
    console.log(globalVar, outerVar, innerVar);
  }
  inner();
}

outer();



/*
Variables
---------
globalVar: global variable, can be accessed from anywhere on the page
outerVar: locally-scoped variable, can be accessed from anywhere inside the outer() function
innerVar: also a locally scoped variable, can be accessed from anywhere inside the inner() function

Functions
---------
outer(): global function, can be accessed from anywhere on the page
inner(): locally-scoped function, can be accessed from anywhere inside the outer() function
*/

// ----------------------
// NESTED FUNCTIONS PART 2
// ----------------------

// let collision = 'I am global';

// function outer(collision) {
// // let collision = 'I am outer';

//   function inner() {
//     let collision = 'I am inner';
//     console.log(collision); // which collision variable will be printed out here?
//   }

//   inner();
// }

// outer('I am outer');

// ----------------------
// NESTED FUNCTIONS PART 3
// ----------------------

// let collision = 'I am global';

// function outer(collision) {
// // let collision = 'I am outer'; 

//   function inner() {
//     console.log(collision); // which collision variable will be printed out here?
//   }
//   inner();

// }

// outer('I am outer');

// ----------------------
// NESTED FUNCTIONS PART 4
// ----------------------

// let collision = 'I am global';

// function outer() {

//   function inner() {
//     console.log(collision); // which collision variable will be printed out here?
//   }
//   inner();
// }

// outer('I am outer');

// ----------------------
// NESTED FUNCTIONS PART 5 - RESTRICTIONS
// ----------------------

/* note the inner function can access the scope of the outer function, but the opposite is NOT true */

// function outer() {
//   let outerVar = 'I am outer';// outerVar is locally scoped to the outer() function, which means it can only be accessed from anywhere inside the outer() function

//   function inner() {
//     let innerVar = 'I am inner';
//     console.log(outerVar, innerVar);
//     // outerVar can be accessed from within the inner() function because the inner() function is declared within the outer() function
//   }

//   inner();
//   console.log('------------------')
//   console.log(innerVar); // innerVar is locally scoped to the inner() function, which means it can only be accessed from anywhere inside the inner() function -> therefore, trying to access innerVar while not inside the inner() function, will give you a ReferenceError
// }

// outer();

// ----------------------
// NESTED FUNCTIONS PART 6
// ----------------------

/* the inner function still looks for a local declaration of the variable name before looking at the next level of scope */

// function outer() {
//   let outerVar = 'I am outer';

//   function inner(outerVar) {
//     // let outerVar = undefined;
//     let innerVar = 'I am inner';
//     console.log(outerVar, innerVar); // which outerVar will be printed here?
//   }
//   inner();
// }

// outer();

/*
Recap: 
How does JS look for the value for a given variable?
---------------------------
1- check locally (ex. within the same function/code block, or the argument passed into the function)
2- check the function/code block that the function is contained inside of
3 - etc.
4 - check global scope
5 - if not found -> ReferenceError
*/

/*
Possible analogy for how to think about which scopes can access which variables (can use as needed for however many nested scopes you have)
--------------------------------------------------------------------
- assume for this example that there is the global scope, then an outer function, and an inner function (that is defined inside of the outer function)
- think of the global scope as the grandparent
- think of the outer function as the parent
- think of the inner function as the child
- a child looks up to its parents & grandparents: therefore the inner function (child) has access to all of the functions/variables that exist in the parent (outer function) scope and in the grandparent (global) scope
- a parent looks up to the grandparents: therefore the outer function (parent) has access to al of the functions/variables that exist in the grandparent (global) scope; however, because a parent does NOT look up to the child, the outer function does NOT have access to any of the functions/variables declared in the child (inner function) scope
- a grandparent does NOT look up to its children or its grandchildren: therefore the global scope does NOT have access to any of the functions/variables declared in the parent (outer function) scope or the child (inner function) scope
*/
