// Scope Best Practices
// Although we might not follow some of these rules when it comes to examples, these are some of the best practices you should follow with regards to scope

/* functions generally should not change globally scoped variables */

let alwaysTrue = true;

function dontMindMe() {
  alwaysTrue = false; // danger! changing global variable!
}

dontMindMe();

if (alwaysTrue) {
  console.log('all is well');
} else {
  throw new Error('everything is broken');
}

// ----------------------
// BEST PRACTICES PART 2 - GOOD PRACTICE EXAMPLE
// ----------------------

/* functions generally should not change globally scoped variables */

let alwaysTrue = true;

function dontMindMe() {
  let alwaysTrue = false; // this is ok, just creating a local variable
}

dontMindMe();

if (alwaysTrue) {
  console.log('all is well');
} else {
  throw new Error('everything is broken');
}

// ----------------------
// BEST PRACTICES PART 3 - OTHER BEST PRACTICES
// ----------------------

/* avoid cluttering the global namespace with lots of variables */

/* only declare variables globally if they need to be accessed globally */

/* 
otherwise, it's safer to declare variables in functions or blocks so you don't overwrite variables accidentally, or access the wrong    
variable by mistake (both likely sources of bugs) */