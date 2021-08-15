/* Looking for the best way to apply an action to every element in an array? */
/* Use a loop! Both for-loops and while loops can work, but for this example, a for-loop will suffice */

let names = ['George', 'John', 'Thomas'];

/* Say we want to print out every element in an array */

/* We start at i = 0 because the elements of an array start at index 0, and we want all the elements */
for(let i = 0; i < names.length; i++){ 
	let element = names[i]; // store the element at index i of the names array in a variable called element
  console.log(element); // this line prints out the current value of the variable element
}

/*
Notes:
--------

*/