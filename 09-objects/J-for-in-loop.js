/* use the for…in loop to loop through all of the keys in an object */

/*

Syntax
-------
for(let variableName in objectName){
  // code here
}

// Note: variableName can be replaced with anything, but objectName MUST be the name of the object whose keys you want to loop through

*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

for (let key in pusheen) {
  let value = pusheen[key];
  console.log("Pusheen's", key, 'is', value);
}

// -------------------------------------
// for...in 
// -------------------------------------

/*
 Note: because key is a variable name and NOT a name of a key in the object, you must use bracket notation (pusheen[key])
*/

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby'
// };

// for (let key in pusheen) {
//   console.log("Pusheen's", key, 'is', pusheen.key);
// }
