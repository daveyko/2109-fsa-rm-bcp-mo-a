/* use the in operator to check if a key is in the object */
/*
the in operator returns
-----------------------
- true if the element exists as a key in the object
- false otherwise
*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

console.log('name' in pusheen);
console.log('sadness' in pusheen);
