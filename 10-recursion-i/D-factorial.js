/*
Returning from recursive calls:
------------------------------
- recursion becomes more complicated when the function must return a value (in the countdown example, we were only printing out values)
- good practice is to start by defining a base case
-  base cases are often occur when there is a simple input that expects a simple output (e.g., the sum of a single number is that number)
- test that the base case works before working with the recursive case! 
*/

// Let's write a function that takes a number as an argument and returns the factorial of that number

/*
- a factorial is defined as the product of a number and all the numbers below it
- Terminology: 5! is referred to as "5 factorial"
- so some basic examples are:
  - 0! = 1
  - 1! = 1
  - 2! = 2*1 = 2
  - 3! = 3*2*1 = 6
  - 4! = 4*3*2*1 = 24
  - 5! = 5*4*3*2*1 = 120
*/

// -----------------------------------------------
// Finding the base case for factorial
// -----------------------------------------------

/* 
what look like simple inputs/outputs we can use to build a base case? 
*/

// Since 0! = 1, and 1! = 1 are the simplest input/outputs, let's work with those as the base case

function factorial(num) {
  // base case: num is 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }
}

factorial(0);
factorial(1);

// -----------------------------------------------
// Finding the recursive case for factorial
// -----------------------------------------------

/* 
ok, base case is set, we just need to remember that our recursive case has to bring num closer and closer to 1 or 0 so we eventually hit our base case 
*/


/* 
notice an interesting pattern!

5! = 5*4*3*2*1,
but 4! = 4*3*2*1, 
so then that means that 
        5! is actually just 5*4!
        (5 factorial equals 5 * 4 factorial)

and similarly, 
        4! is really just 4*3!

and that continues all the way down to 
        2! being 2* 1!

so if we generalize that a bit, the factorial of a number is equal to the number * the factorial of the number minus 1, as you can see in the breakdown below:

0! === 1
1! === 1
2! === 2 (2 * factorial(1))
3! === 6 (3 * factorial(2))
4! === 24 (4 * factorial(3))
5! === 120 (5 * factorial(4)) 

General rule for any number num
--------------------------------
- factorial of num = num * factorial of num-1
- num! = num * (num-1)!

So for any number greater than 1, that would be our recursive case!
*/

/*
Reminder about base case and recursive case 
------------------------------------------
Base Case - if this condition is proven true, it means we're done, and can stop recursing

Recursive Case - if the Base Case is NOT proven true, we've reached the recursive case, meaning that we're not done yet, and so we need to keep recursing
*/

// So let's add our recursive case to our factorial function

// Note: it's safe to run THIS code on pythontutor (http://pythontutor.com/javascript.html#mode=edit)

function factorial(num) {
  // base case: num is 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // recursive case: num must get closer to 0 or 1
  // just have to return the result now
  let result = num * factorial(num - 1);
  return result;
}

console.log(factorial(3));

/*
Breakdown
---------
Step 1: Call factorial(3), 3 is passed in as the argument

Call Stack
----------
Top -> factorial(3)

Step 1.5: 3 !== 0 and 3 !== 1 -> recursive case: so we call factorial(2)

-----------------------------------------

Step 2: Call factorial(2), 3-1 = 2 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that factorial(2) is at the top of the call stack, factorial(3)'s execution is PAUSED until factorial(2) completes its execution.

Call Stack
----------
Top -> factorial(2)
2nd from top -> factorial(3)

Step 2.5: 2 !== 0 and 2 !== 1 -> recursive case: so we call factorial(1)
-----------------------------------------

Step 3: Call factorial(1), 2-1 = 1 is passed in as the argument

Note: JS will execute whatever function is on the top of the stack. Now that countdown(1) is at the top of the call stack, countdown(2)'s execution is PAUSED until countdown(1) completes its execution.

Call Stack
----------
Top -> factorial(1)
2nd from top -> factorial(2)
3rd from top -> factorial(3)

Step 3.5: 1 === 1 -> base case: we return 1
-----------------------------------------

Step 4: factorial(1) completes its execution

Call Stack
----------
Top -> factorial(2)
2nd from top -> factorial(3)

Note: Now that factorial(1) has completed its execution, factorial(2) is now on top of the call stack once again, so its execution resumes.

-----------------------------------------

Note: we are currently back in factorial(2), so parameter num = 2

Step 5: the previous return value of 1 is multiplied by the current value of num (2), and stored in result

result = 2 * factorial(1) = 2 * 1 = 2

Step 5.5: we return result (2), and therefore factorial(2) completes its execution

Call Stack
----------
Top -> factorial(3)

Note: Now that factorial(2) has completed its execution, factorial(3) is now on top of the call stack once again, so its execution resumes.

-----------------------------------------

Note: we are currently back in factorial(3), so parameter num = 3

Step 6: the previous return value of 2 is multiplied by the current value of num (3), and stored in result

result = 3 * factorial(2) = 3 * 2 = 6

Step 6.5: we return result (6), factorial(3) completes its execution

Call Stack
----------
EMPTY
*/

// Want to see an even more involved factorial example? Try and see if you can understand what's going on when factorial(5) is called!

// console.log(factorial(5));

/* 
three takeaways from factorial: 
-------------------------------
1. write your base case first, and test it using simple inputs/outputs 

2. write your base case, and test it using a simple input that results in few recursive calls to the base case (ex. 2 or 3)

3. test your function against more-complex inputs (ex. 5)

4. You should try to use Chrome's debugger or a visualizer, it can help inspect recursive calls, because console.log will not be as useful with recursion. 
*/
