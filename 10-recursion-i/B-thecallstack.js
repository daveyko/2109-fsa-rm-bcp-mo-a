/* 
before we talk about recursion, we have to talk about the call stack 
*/

/* 
JS is "single threaded" - can only run one function at a time 
*/

/* 
the call stack is the structure JS uses to figure out which function it should be running at any point in time 
*/

// ------------------------------------------
// How We'll Visualize the Call Stack
// ------------------------------------------

/* 
whenever we call a function, it's added to the top of the call stack 
*/

/* 
JS will execute whatever function is on the top of the stack 
*/

/*
Call Stack
----------
Top -> Most recently called function
...
Middle
...
Bottom -> Least recently called function
*/

// Note: You can also use this link to help you visualize what's happening in any of the upcoming examples: http://pythontutor.com/javascript.html#mode=edit

// ------------------------------------------
// Call Stack - Example 1
// ------------------------------------------

function first() {
  console.log('I am first!');
}

function second() {
  console.log('I am second!');
}

first();
second();

/*
Breakdown
---------
Step 1: Call first

Call Stack
----------
Top -> first

Step 1.5: print 'I am first' 

-----------------------------------------

Step 2: first completes its execution

Call Stack
----------
EMPTY

-----------------------------------------

Step 3: Call second

Call Stack
----------
Top -> second

Step 3.5: print 'I am second' 

-----------------------------------------

Step 4: second completes its execution

Call Stack
----------
EMPTY

*/

// ------------------------------------------
// Call Stack - Example 2 - Functions within functions
// ------------------------------------------

function first() {
  console.log('I am first!');
  second();
  console.log('First is finished');
}

function second() {
  console.log('I am second!');
}

first();

/*
Breakdown
---------
Step 1: Call first

Call Stack
----------
Top -> first

Step 1.5: print 'I am first' 

-----------------------------------------

Step 2: Call second

Note: JS will execute whatever function is on the top of the stack. Now that second is at the top of the call stack, first's execution is PAUSED until second completes its execution.

Call Stack
----------
Top -> second
2nd from top -> first

Step 2.5: print 'I am second' 

-----------------------------------------

Step 3: second completes its execution

Call Stack
----------
Top -> first

Note: Now that second has completed its execution, first is now on top of the call stack once again, so its execution resumes.

Step 3.5: print 'First is finished' 
-----------------------------------------

Step 4: first completes its execution

Call Stack
----------
EMPTY

*/