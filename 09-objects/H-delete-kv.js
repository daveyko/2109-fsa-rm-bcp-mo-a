/* use the delete keyword to delete a key/value pair */

let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

delete pusheen['age'];
delete pusheen.color;

console.log(pusheen);
