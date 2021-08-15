// There are a couple ways to make strings

// The good old fashioned way
const oldFashioned = 'The quick brown fox jumped over the lazy dog';
console.log(oldFashioned);

// but what happens when we introduce variables??
const adj = 'shy';
const color = 'silver';
const animal1 = 'panda';
const verb = 'trapezed';
const adj2 = 'fashionable';
const animal2 = 'guppy';


const withVars = 'The ' + adj + ' ' + color + ' ' + animal1 + ' ' + verb + ' over the ' + adj2 + ' ' + animal2;
console.log(withVars);
// so much more work!
// and it’s so easy to forget a ‘ ‘


// string interpolation to the rescue!
// this time with BACK TICKS ``
const newWay = `The ${adj} ${color} ${animal1} ${verb} over the ${adj2} ${animal2}`;
console.log(newWay);

// in a string with back ticks the ${XXXXX} mean insert this variable here


// Why don’t you try it out?
// Using back ticks construct the sentence -> My very elegant mother just served us nine pizzas.

const familyMember = 'mother';
const food = 'pizza';

const sentence = ``;
console.log(sentence);
