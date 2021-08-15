// Object properties can be accessed through either bracket notation or dot notation

//Bracket notation for objects is very similar to bracket notation for arrays, except you pass in the key into the brackets instead of the index

/* pass a string into the brackets that corresponds with a key in the object */

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby'
// };

// console.log(pusheen['name']);
// console.log(pusheen['age']);
// console.log(pusheen['color']);
// console.log(pusheen['notAKeyInTheObject']);

// -------------------------------------
// Bracket notation - using variables
// -------------------------------------

/* any variable or expression that evaluates to a string can be passed into the brackets */

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby'
// };

// let keyToCheck = 'name';

// console.log(pusheen[keyToCheck]);
// // pusheen[keyToCheck] => pusheen['name']

// console.log(pusheen['col' + 'or']);
// // pusheen['col' + 'or'] => pusheen['color']

// -------------------------------------
// Dot notation
// -------------------------------------

/* 
you can also use dot notation to access values 
*/

/*
no quotes are needed with dot notation

the syntax is:
----------------------------------------- 
objectName.propertyName

which is equivalent to:
---------------------------
objectName['propertyName']

pusheen.color === pusheen['color']

*/

// Therefore, dot notation can ONLY be used with key names that ACTUALLY exist in the object -> no variables/expressions

let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

console.log(pusheen.name);
// pusheen.name => pusheen['name']

console.log(pusheen.age);
// pusheen.age => pusheen['age']

console.log(pusheen.color);
// pusheen.color => pusheen['color']

let keyToCheck = 'name';

// console.log(pusheen[keyToCheck]); // this works

console.log(pusheen.keyToCheck);
// pusheen.keyToCheck => pusheen['keyToCheck'];
// pusheen['keyToCheck'] !== pusheen[keyToCheck]
// therefore, because pusheen doesn't contain a key called 'keyToCheck', pusheen.keyToCheck will evaluate to undefined