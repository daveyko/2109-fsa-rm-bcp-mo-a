/* 
.pop removes one element from the end of the array. 
it returns the removed element 
*/

// let names = ['George', 'John', 'Thomas'];

// let jefferson = names.pop();

// console.log(names);
// console.log(jefferson);

/*
Notes:
--------

*/

// ------------------------------------
// THIS IS LOOPING WHILE USING POP
// ------------------------------------

/* What if we wanted to remove all the elements from an array, starting from the end, one by one?*/

/* Using .pop within a loop can help us here.*/

let names = ['George', 'John', 'Thomas'];

// /*
// This time we'll use a while loop because the only thing we're interested in keeping track of is one condition,which is whether the names array has any elements left in it or not
// */
while(names.length > 0){ 
	let removedElement = names.pop(); //remove the element at the end of the array
  console.log(removedElement);
}

console.log(names);

/*
Notes:
--------

*/