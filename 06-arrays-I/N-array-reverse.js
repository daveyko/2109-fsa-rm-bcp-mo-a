/* 
.reverse MUTATES (changes) the original array, reversing the order of its elements 
*/

let names = ['George', 'John', 'Thomas'];

names.reverse();

console.log(names);

/*
Notes:
--------

*/

// --------------------------------------
/*
If anybody is interested, the way to reverse an array without mutation is to use slice() first to create a copy of the original array, and then use reverse() on that array copy (possible to chain the methods)
*/