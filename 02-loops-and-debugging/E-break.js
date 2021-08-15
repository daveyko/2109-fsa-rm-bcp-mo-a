// the break keyword breaks out of the loop permanently, and resumes execution on the next line of code following the loop

// let myGrade = 'A';

// while (true) {
// myGrade += '+'; // concatenate a '+'' onto the end of myGrade

// if (myGrade.length === 3) { 
//   // once myGrade has a length of 3,
//   // break out of the loop
//     break;
//   }
// }

// console.log(myGrade);

//---------------------------------------
// BREAK - USAGE IN A FOR LOOP
//---------------------------------------

// the break keyword also works in for loops

for (let i = 10; i >= 1; i--) {
  console.log('i is', i);

  if (i === 7) {
    break;
  }
}
/* 
this loop will only print out the values of i from 10 through 8 because the moment i = 7, we break out of the loop
*/