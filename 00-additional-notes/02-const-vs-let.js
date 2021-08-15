// when do we use var???
// hopefully never anymore


// USING LET
// let is used when we're defining a variable that will change, or might change
// we can read and write to variables defined with the `let` keyword

// moneyInSavings will hopefully change, so we want JS to know we will make changes to it
let moneyInSavings = 10;
moneyInSavings = 100;
console.log(moneyInSavings);

// USING CONST
// const is used when we're defining a variable whose value will NOT change
// const is READ only
const birthPlace = 'Grand Rapids';

// birthPlace = 'New York';
// ^ this will throw an error because we can't change a const value


// WHEN IN DOUBT??
// if you're not sure what to use, you can use `let`
