// A variable declared outside a function, becomes GLOBAL.

// A global variable has global scope: All scripts and functions on a web page can access it. 

// Scope applies to functions too!
// A global function has global scope: All scripts and functions on a web page can invoke it. 
// in this case, myFunction is a global function

// Example

// in the global scope
let globalVar = 'hamster';

// code here can use globalVar
console.log('outer', globalVar);

// function in the global scope
function myFunction() {

  // inside function scope  
  // code here can also use globalVar
  console.log('inner', globalVar);
}

myFunction();