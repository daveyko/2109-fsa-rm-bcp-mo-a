// What is the typeof of an array?

// let names = ['George', 'John', 'Thomas'];

// console.log(typeof names);

/*
Notes:
--------

*/

// ------------------------------------
// THIS IS THE Array.isArray SECTION
// ------------------------------------

// typeof can't tell the difference between an array and any other object

// The Array.isArray() methods determines whether the argument passed in is actually an array

let names = ['George', 'John', 'Thomas'];

console.log(Array.isArray(names));

console.log(Array.isArray('i am not an array'));

/*
Notes:
--------

*/