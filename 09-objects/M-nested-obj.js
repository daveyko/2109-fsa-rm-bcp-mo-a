/* objects can store any type of value, including arrays and other objects */

// Nested Objects Example

let pusheen = {
  name: 'Pusheen',
  age: 7,
  siblings: {
    sister: 'Stormy',
    brother: 'Pip'
  }
};

console.log(pusheen.siblings);
console.log(pusheen.siblings.sister);
console.log(pusheen.siblings.brother);