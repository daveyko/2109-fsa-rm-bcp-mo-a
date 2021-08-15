/* a for loop requires three elements:
  1. the for keyword
  2. three optional expressions, separated by ;
  3. a block of code

for (initialization; condition; final-expression) {
  // block of code
}

  the block of code will run over and over until the condition evaluates to false
*/

/* the initialization is run first, and only once. it's often used to define a counter variable */

/* then, before every iteration, the condition is checked to see if it's true - if it is, the for loop will run another iteration */

/* then, after each iteration, the final expression is run */


// for (let i = 1; i <= 3; i++) {
//   console.log('i is:', i);
// }

// EQUIVALENT to

// let i = 1; // initialization

// while (i <= 3) { // conditional
//   console.log('i is', i);
//   i++; // final expression
// }

/*
Let's keep track of the value of i throughout the iterations
--------------------------
Step 1: i is set to value 1 (i = 1)
------------------------------------------
Step 2: we check if i <= 3; because 
3 > 1, the conditional evaluates to true, so we enter the loop (i = 1)
------------------------------------------
Step 3: we print out "i is: 1" (i = 1)
------------------------------------------
Step 4: we increment i by 1 (i = 2)
------------------------------------------
Step 5: we check if i <= 3; because 
2 > 1, the conditional evaluates to true, so we enter the loop (i = 2)
------------------------------------------
Step 6: we print out "i is: 2" (i = 2)
------------------------------------------
Step 7: we increment i by 1 (i = 3)
------------------------------------------
Step 8: we check if i <= 3; because 
3 = 3, the conditional evaluates to true, 
so we enter the loop (i = 3)
------------------------------------------
Step 8: we print out "i is: 3" (i = 3)
------------------------------------------
Step 9: we increment i by 1 (i = 4)
------------------------------------------
Step 10: we check if i <= 3; because 
4 > 3, the conditional evaluates to false, 
so we break out of the loop
------------------------------------------
*/

//---------------------------------------
// FOR LOOP - LOOPING FROM LARGER TO SMALLER
//---------------------------------------
// for (let i = 3; i >= 1; i--) {
//   console.log('i is:', i);
// }

/*
Let's keep track of the value of i throughout the iterations
--------------------------
Step 1: i is set to value 3 (i = 3)
------------------------------------------
Step 2: we check if i >= 1; because 
3 > 1, the conditional evaluates to true, so we enter the loop (i = 3)
------------------------------------------
Step 3: we print out "i is: 3" (i = 3)
------------------------------------------
Step 4: we decrement i by 1 (i = 2)
------------------------------------------
Step 5: we check if i >= 1; because 
2 > 1, the conditional evaluates to true, so we enter the loop (i = 2)
------------------------------------------
Step 6: we print out "i is: 2" (i = 2)
------------------------------------------
Step 7: we decrement i by 1 (i = 1)
------------------------------------------
Step 8: we check if i >= 1; because 
1 = 1, the conditional evaluates to true, 
so we enter the loop (i = 1)
------------------------------------------
Step 8: we print out "i is: 1" (i = 1)
------------------------------------------
Step 9: we decrement i by 1 (count = 0)
------------------------------------------
Step 10: we check if i >= 1; because 
0 < 1, the conditional evaluates to false, 
so we break out of the loop
------------------------------------------
*/

//---------------------------------------
// FOR LOOP - CAN INCREMENT BY ANY NUMBER
//---------------------------------------

// can increment by any number
// for (let i = 100; i <= 300; i += 100) {
//   console.log('i is:', i);
// }

//---------------------------------------
// FOR LOOP - ITERATE THROUGH A STRING
//---------------------------------------

// you can use for loops to iterate through the characters in a string

/* RECALL: elements in a string are zero-indexed, meaning that:
- the first character can be found at position 0
- the last character can be found at position stringName.length - 1
*/
let letters = 'abcdefg';

console.log(letters[0])//'a'
console.log(letters[1])//'b'
console.log(letters[2])//'c'

console.log(letters[6]) // 'g'
console.log(letters[7]); // undefined

// letters[i] is referred to the element at position i of the string letters, or by a shorthand sometimes used, "letters of i"

console.log(letters.length);

for (let i = 0; i < letters.length; i++) {
 let currentLetter = letters[i]; // storing the character at position i of the string letters in the variable currentLetter
  console.log(`The letter at index ${i} is ${currentLetter}`);
}