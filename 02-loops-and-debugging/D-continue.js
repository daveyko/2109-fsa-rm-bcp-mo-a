// the continue keyword will cause the loop to skip to the next iteration

// continue skips the rest of the code in that iteration of the loop, and moves immediately to the next iteration

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue; // skip the rest of the code in this loop block, and move on to i = 4
//   }

//   console.log('i is:', i);
// }

/* 
In this example, the moment i has value 3, we CONTINUE, meaning that we skip the rest of the code in that iteration of the loop (meaning we don't print 'i is 3') and move immediately to the next iteration, where i = 4
*/

//---------------------------------------
// CONTINUE - USAGE IN A WHILE LOOP
//---------------------------------------

// the continue keyword also works in while loops
// I want to count down from 5 to 1, but skip all even numbers

// let count = 5;

// while (count >= 1) {
//   if (count % 2 === 0) {
//     count--; 
//     continue;
//   }

//   console.log('count is', count);
//   count--;
// }

// In this example, the moment count % 2 === 0 (the moment count is an even number), we CONTINUE, 
// meaning that we skip the rest of the code in that iteration of the loop (meaning we don't print 'count is 5', or execute the decrementation on line 31)
// and move immediately to the next iteration, where count = 4

//---------------------------------------
// FOR LOOP - CONTINUE CAUSING AN INFINITE LOOP
//---------------------------------------

// !! BIG WARNING !!
// when using continue in while loop
// make sure your conditional is still eventually false, or else you'll end up in an infinite loop
// the following example causes an infinite loop

let count = 5;

while (count >= 1) {
  if (count % 2 === 0) {
    console.log('hi', count);
    continue;
  }

  console.log('count is', count);
  count--;
}

/*
Let's keep track of the value of count throughout the iterations
so we can figure out what causes the infinite loop
--------------------------
Step 1: count is set to value 5 (count = 5)
------------------------------------------
Step 2: we check if count % 2 === 0; because 
5 % 2 = 1 and not 0 (5 is odd), the conditional evaluates to false,
so we don't execute the code inside the if-block (count = 5)
------------------------------------------
Step 3: we print out 'count is 5' and decrement count by 1  (count = 4)
------------------------------------------
Step 4: we check if count % 2 === 0; because 
4 % 2 = 0 (4 is even), the conditional evaluates to true,
so we DO execute the code inside the if-block (count = 4)
------------------------------------------
Step 5: we print out 'hi 4' and then CONTINUE, 
meaning that we skip all the remaining code in the
while loop block (count = 4)
------------------------------------------
Step 6: we check if count % 2 === 0; because 
4 % 2 = 0 (4 is even), the conditional evaluates to true,
so we DO execute the code inside the if-block (count = 4)
------------------------------------------
Step 7: we print out 'hi 4' and then CONTINUE, 
meaning that we skip all the remaining code in the
while loop block (count = 4)
-----------------------------------------------

Where is the infinite loop/Why is there an infinite loop?
-----------------------------------------------------------
Steps 4 and 5 will now go on forever, because the moment count was decremented and had value 4, 
we would enter the if-block every time, and then continue, meaning that we SKIP THE DECREMENTATION, so count's
value remains as 4 forever => infinite loop
--------------------------

How can we change this code to avoid an infinite loop?
-----------------------------------------------------------
make sure to decrement count inside of the if-block as well, like this:
  if (count % 2 === 0) {
    console.log('hi', count);
    count--;
    continue;
  }
*/
