// EXTRA CREDIT: Write JS code that evaluates to "fullstaff afafefee" without using any letters or numbers in your code (using only concepts we've learned so far)

// 1. get true & false:
console.log(!''); // true
console.log(!!''); // false

// 2. get 'true' & 'false' as strings:
console.log(!''+''); // 'true'
console.log(!!''+''); // 'false'

// 3. get numbers so we can use them later:
console.log(+''); // 0
console.log(+!''); // 1
console.log(!''+!''); // 2
console.log(!''+!''+!''); // 3
// etc...

// 4. index into these strings to get individual characters:
console.log((!!''+'')[+'']); // 'false'[0] = 'f'
console.log((!''+'')[!''+!'']); // 'true'[2] = 'u'
// etc...

// 5. put it all together:
console.log((!!''+'')[+!!'']+(!''+'')[!''+!'']+(!!''+'')[!''+!'']+(!!''+'')[!''+!'']+(!!''+'')[!''+!''+!'']+(!''+'')[+'']+(!!''+'')[+!'']+(!!''+'')[+!!'']+(!!''+'')[+!!'']+' '+(!!''+'')[+!'']+(!!''+'')[+!!'']+(!!''+'')[+!'']+(!!''+'')[+!!'']+(!''+'')[!''+!''+!'']+(!!''+'')[+!!'']+(!''+'')[!''+!''+!'']+(!''+'')[!''+!''+!'']); // "fullstaff afafefee"

// bonus links:
// - https://jscrew.it/
// - https://aem1k.com/sic/
