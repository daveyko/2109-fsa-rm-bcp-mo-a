// Let's write a function that takes a number as argument, and counts down from that number to 1

// function countdown(num) {
//   for (let i = num; i >= 1; i--) {
//     console.log(i);
//   }
// }

// countdown(5);

// -----------------------------------------------
// A different perspective on countdown
// -----------------------------------------------

// Let's refactor our solution, by instead working with a function that takes a number and logs it out

function countdown(num) {
  console.log(num);
}

// // how would we be able to countdown from 5 to 1 if we were using this function?

countdown(5);
countdown(4);
countdown(3);
countdown(2); // notice, no loops!
countdown(1); // how do the arguments change between calls?

// Notice that in this solution, there are NO loops, but instead, we change the argument passed into countdown() each time - specifically, we're decrementing the argument each time by 1!

// -----------------------------------------------
// Scope Recap
// -----------------------------------------------

/*
But right before we dive in, we should talk about scope, and more specifically, functional scope:
---------------------
- it’s important that you guys understand that any variable declared inside a particular function is only accessible within that specific function call.
- meaning that when we call countdown(5), 5 is now referred to as num in the countdown function.
- but once you call countdown(4), num now takes on the value of 4, and in that function call, num will always be 4 unless you explicitly change it yourself.
- the reason we're bringing this up is because this rule applies to recursion as well - if you call a function within a function, the variable names might be the same (the same way that they are each time I’m calling countdown here), but each variable actually refers to a different piece of information, and is restricted to the function call in which it was declared.
- so keep this in mind when you start seeing the same variable name, but in different calls to a function
*/

// -----------------------------------------------
// Introducing Recursion
// -----------------------------------------------

// Problem with our previous solution: we have to call countdown() over and over - what if our starting number was 100? That'd be pretty annoying

// Solution: instead of manually calling countdown a bunch of times, why not have countdown call itself, decrementing the argument passed in by 1 each time?

// Recall: Recursion is what happens when a function calls itself -> this new solution is actually an implementation of Recursion!

// Note: DO NOT ATTEMPT to run this code on pythontutor

// function countdown(num) { // same method header as before
//   console.log(num); // print out the current number
//   countdown(num - 1); 
//   // call the countdown function again, but this time, pass in the current number - 1!
// }

// countdown(5);

/*
Breakdown
---------
Step 1: Call countdown(5), 5 is passed in as the argument

Call Stack
----------
Top -> countdown(5)

Step 1.5: print '5' 

-----------------------------------------

Step 2: Call countdown(4), 5-1 = 4 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(4) is at the top of the call stack, countdown(5)'s execution is PAUSED until countdown(4) completes its execution.

Call Stack
----------
Top -> countdown(4)
2nd from top -> countdown(5)

Step 2.5: print '4' 

-----------------------------------------

Step 3: Call countdown(3), 4-1 = 3 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(3) is at the top of the call stack, countdown(4)'s execution is PAUSED until countdown(3) completes its execution.

Call Stack
----------
Top -> countdown(3)
2nd from top -> countdown(4)
3rd from top -> countdown(5)

Step 3.5: print '3' 

-----------------------------------------

Step 4: Call countdown(2), 3-1 = 2 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(2) is at the top of the call stack, countdown(3)'s execution is PAUSED until countdown(2) completes its execution.

Call Stack
----------
Top -> countdown(2)
2nd from top -> countdown(3)
3rd from top -> countdown(4)
4th from top -> countdown(5)

Step 4.5: print '2' 

-----------------------------------------

Step 4: Call countdown(1), 2-1 = 1 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(1) is at the top of the call stack, countdown(2)'s execution is PAUSED until countdown(1) completes its execution.

Call Stack
----------
Top -> countdown(1)
2nd from top -> countdown(2)
3rd from top -> countdown(3)
4th from top -> countdown(4)
5th from top -> countdown(5)

Step 4.5: print '1' 

-----------------------------------------
You'd think we'd be done now, right? Since we've printed out 5 through 1.

Wrong! There's nothing in that function that says we have to stop at 1, is there?

So it isn't going to stop:

-----------------------------------------

Step 5: Call countdown(0), 1-1 = 0 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(0) is at the top of the call stack, countdown(1)'s execution is PAUSED until countdown(0) completes its execution.

Call Stack
----------
Top -> countdown(0)
2nd from top -> countdown(1)
3rd from top -> countdown(2)
4th from top -> countdown(3)
5th from top -> countdown(4)
6th from top -> countdown(5)

Step 4.5: print '0' 

-----------------------------------------

Step 5: Call countdown(-1), 0-1 = -1 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(-1) is at the top of the call stack, countdown(0)'s execution is PAUSED until countdown(-1) completes its execution.

Call Stack
----------
Top -> countdown(-1)
2nd from top -> countdown(0)
3rd from top -> countdown(1)
4th from top -> countdown(2)
5th from top -> countdown(3)
6th from top -> countdown(4)
7th from top -> countdown(5)

Step 4.5: print '-1' 

-----------------------------------------

Hopefully you can see where this is going - it's going to keep on recursing forever, because we never told it when to stop! 

You've heard of this for for-loops and while-loops, but INFINITE LOOPS exist for Recursion too!

So in this case, you're going to end up with:
RangeError: Maximum call stack size exceeded - AKA your computer ran out of memory

This is JS's way of telling you that you have an infinite loop in your code.

So how do we avoid running into infinite loops in Recursion?

*/

// -----------------------------------------------
// Introducing The Base Case & Recursive Case
// -----------------------------------------------
 
/* 
Recall how for for-loops:

for (initialization; condition; final-expression)

// if we didn't have the condition, the loop wouldn't know when to stop -> INFINITE LOOP
*/

// We need a similar condition in order to be able to tell when to stop recursing

/*
Some New Terminology
--------------------
Base Case - if this condition is proven true, it means we're done, and can stop recursing

Recursive Case - if the Base Case is NOT proven true, we've reached the recursive case, meaning that we're not done yet, and so we need to keep recursing
*/

/*
So what is the base case and recursive case for this countdown example?
------------------
We want to countdown from a given number to 1, so if the given number is less than 1, that means we're done

Base Case: if the given number is less than 1

Recursive Case: otherwise 
(if the given number is 1 or more)
*/

// Let's try and change our countdown() function to have a base case and recursive case

// Note: it's safe to run THIS code on pythontutor (http://pythontutor.com/javascript.html#mode=edit)
// If you run this on pythontutor - it's normal to see the return value be undefined for this example, because we're only printing, not returning any values

function countdown(num) {
  // here's our base case, checking if num < 1
  if (num < 1) {
    console.log('done!');
    return;
  }
  // here's our 'recursive case', which occurs only if the num >= 1 (if the above if-block is false)
  else {
    console.log(num);
    countdown(num - 1);
  }
}

countdown(3);

/*
Breakdown
---------
Step 1: Call countdown(3), 3 is passed in as the argument

Call Stack
----------
Top -> countdown(3)

Step 1.5: 3 > 1 -> recursive case: so we print 3, and call countdown(2)

-----------------------------------------

Step 2: Call countdown(2), 3-1 = 2 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(2) is at the top of the call stack, countdown(3)'s execution is PAUSED until countdown(2) completes its execution.

Call Stack
----------
Top -> countdown(2)
2nd from top -> countdown(3)

Step 2.5: 2 > 1 -> recursive case: so we print 2, and call countdown(1)
-----------------------------------------

Step 3: Call countdown(1), 2-1 = 1 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(1) is at the top of the call stack, countdown(2)'s execution is PAUSED until countdown(1) completes its execution.

Call Stack
----------
Top -> countdown(1)
2nd from top -> countdown(2)
3rd from top -> countdown(3)

Step 3.5: 1 = 1 -> recursive case: so we print 1, and call countdown(0)

-----------------------------------------

Step 4: Call countdown(0), 1-1 = 0 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(0) is at the top of the call stack, countdown(1)'s execution is PAUSED until countdown(0) completes its execution.

Call Stack
----------
Top -> countdown(0)
2nd from top -> countdown(1)
3rd from top -> countdown(2)
4th from top -> countdown(3)

Step 4.5: 0 < 1 -> base case: we print 'done!'
-----------------------------------------

Step 5: countdown(0) completes its execution

Call Stack
----------
Top -> countdown(1)
2nd from top -> countdown(2)
3rd from top -> countdown(3)

Note: Now that countdown(0) has completed its execution, countdown(1) is now on top of the call stack once again, so its execution resumes.

-----------------------------------------

Step 6: countdown(1) completes its execution

Call Stack
----------
Top -> countdown(2)
2nd from top -> countdown(3)

Note: Now that countdown(1) has completed its execution, countdown(2) is now on top of the call stack once again, so its execution resumes.

-----------------------------------------

Step 7: countdown(2) completes its execution

Call Stack
----------
Top -> countdown(3)

Note: Now that countdown(2) has completed its execution, countdown(3) is now on top of the call stack once again, so its execution resumes.

-----------------------------------------

Step 8: countdown(3) completes its execution

Call Stack
----------
EMPTY
*/

/* 
Two takeaways from countdown:
-----------------------------
1. you need to define a base case!
2. your recursive case must change the input to the function so that you will eventually trigger the base case!
*/