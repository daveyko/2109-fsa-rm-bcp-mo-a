/* a while loop requires three elements:
  1. the while keyword
  2. a conditional expression that evaluates to a boolean value
  3. a block of code

Format:
--------
while (conditional) {
  // block of code
}

the block of code will run over and over as long as the conditional expression evaluates to true
*/

//------------------------
// WHILE LOOP - EXAMPLE
//------------------------

let count = 3; // initialization

while (count >= 1) { // conditional
  console.log('count is', count);
  count--; // final expression
}

/*
Let's keep track of the value of count throughout the iterations
--------------------------
Step 1: count is set to value 3 (count = 3)
------------------------------------------
Step 2: we check if count >= 1; because 
3 > 1, the conditional evaluates to true, so we enter the loop (count = 3)
------------------------------------------
Step 3: we print out "count is 3", and decrement count by 1 (count = 2)
------------------------------------------
Step 4: we check if count >= 1; because 
2 >= 1, the conditional evaluates to true, so we re-enter the loop (count = 2)
------------------------------------------
Step 5: we print out "count is 2", and decrement count by 1 (count = 1)
------------------------------------------
Step 6: we check if count >= 1; because 
1 >= 1, the conditional evaluates to true, so we re-enter the loop (count = 1)
------------------------------------------
Step 5: we print out "count is 1", and decrement count by 1 (count = 0)
------------------------------------------
Step 6: we check if count >= 1; because 
0 <= 1, the conditional evaluates to false, so we break out of the loop (count = 0)
------------------------------------------
*/

//------------------------
// WHILE LOOP - NEVER ENTERS THE LOOP
//------------------------

// while (false) {
//   console.log('this line of code will never run');
// }

/*
Because the conditional evaluates to false, we never enter the loop
*/

//---------------------------------------
// WHILE LOOP - LOOPING FOREVER EXAMPLE 1
//---------------------------------------

// while (true) {
//   console.log('this line will run forever');
//  // (or until the machine running the code runs out of memory)
// }

/*
Because the conditional evaluates to true, and there is no code inside the loop to change that value, the loop will run forever => this is referred to as an infinite loop
*/

// I would NOT recommend running this code, because it can drain your computer of memory very quickly => can cause your computer to freeze/crash

//---------------------------------------
// WHILE LOOP - LOOPING FOREVER EXAMPLE 2
//---------------------------------------

let count = 3;

// we have to make sure the conditional is eventually false!
while (count >= 1) {
  console.log('count is', count);
}

/*
Because count >= 1 (since 3 is greater than 1), and there is no code inside the loop to change the value of count to bring it to less than 1, this loop will also run forever
*/

// I would NOT recommend running this code, because it can drain your computer of memory very quickly => can cause your computer to freeze/crash


