// indent one level inside every code block
// code blocks start with a { and end with a }
function amazingFunction() {
  // inside the function block!
  if (true) {
    // inside the if block!
    console.log('this function is amazing');
  }
  // outside of the if block
}
// outside of the function block
amazingFunction();

/* 
Pro-tip
-------
- try and keep everything after the opening brace on its own line ({)
- try and keep each closing brace (}) on its own line
- in a lot of code editors, you can tell which opening brace corresponds to which closing brace, and vice versa!
- for example, in repl.it, if you click on the closing brace on line 8, you will find that both it and the opening brace on line 5 are surrounded by a rectangle
- something similar exists in codepen, which is where you'll do the workshop
- use this to your advantage to be able to tell how much indentation is necessary
*/