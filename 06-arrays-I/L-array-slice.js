/* 
.slice is also an array method, and works the same way as the string method of the same name. 
*/

/*

Definition from online:
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will NOT be modified.

In other words, the original array is NOT mutated when using .slice()
*/

// let names = ['George', 'John', 'Thomas'];

// // returns a copy of the names array, but only containing elements from index 0 through index 2, not including index 2
// let firstTwo = names.slice(0,2);

// console.log(firstTwo);
// console.log(names);

// ------------------------------------
// Array.slice with only the 1st arg
// ------------------------------------

// let names = ['George', 'John', 'Thomas'];

// // returns a copy of the names array, but only containing elements from index 1 until the end
// let lastTwo = names.slice(1);

// console.log(lastTwo);
// console.log(names);

/*
Notes:
--------

*/

// ------------------------------------
// Array.slice with no args
// ------------------------------------

let names = ['George', 'John', 'Thomas'];

// if no arguments are provided, the entire array is copied
let namesCopy = names.slice();

namesCopy[2] = 'Paul';
namesCopy.push('Ringo');

console.log(names);
console.log(namesCopy);

/*
Notes:
--------

*/