/* 
.shift works like .pop, but it removes the first element instead
it returns the removed element
*/

/* it's called shift because the indices for every element in the array are shifted over by one */

// let names = ['George', 'John', 'Thomas'];

// let washington = names.shift();

// console.log(names); 
// // note that now 'John' is at index 0, and 'Thomas' is at index 1

// console.log(washington); // the removed element 

/*
Notes:
--------

*/

// ------------------------------------
// THIS IS LOOPING WHILE USING SHIFT
// ------------------------------------

/* What if we again wanted to remove all the elements from an array, but this time starting from the beginning, one by one?*/

/* Using .shift within a loop can help us here.*/

let names = ['George', 'John', 'Thomas'];

/*
We'll use a while loop again because the only thing we're interested in keeping track of is one condition,which is whether the names array has any elements left in it or not
*/
while(names.length > 0){ 
	let removedElement = names.shift(); //remove the element at the beginning of the array
  console.log(removedElement);
}

console.log(names);

/*
Notes:
--------

*/