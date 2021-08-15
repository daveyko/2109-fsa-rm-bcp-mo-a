//loop through string
//if space add space to return string and continue
// foreach letter look in abc for that letter
// using abc index of that letter shift index by shift num amount
// take mod 26 of shift num amount to get final idx of encoded char
// add abc[finalIndex] to return string
// return encoded string

function caesarCypher(str, num) {
  let encodedStr = "",
    abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === " ") {
      encodedStr += char;
    } else {
      let idxInAbc = abc.indexOf(char),
        shiftedNum = idxInAbc + num,
        finalIdx = shiftedNum % 26;
      encodedStr += abc[finalIdx];
    }
  }
  return encodedStr;
}

// Below solution uses a for loop instead of the .indexOf() string method.
// function caesarCypher(str, num){
//   let encodedStr = '',
//       abc = 'abcdefghijklmnopqrstuvwxyz'
//   for(let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if(char === ' ') {
//       encodedStr += char
//     } else {
//       for(let j = 0; j < abc.length; j++) {
//         if(char === abc[j]) {
//           let shiftedNum = j + num,
//               finalIdx = shiftedNum % 26
//           encodedStr += abc[finalIdx]
//         }
//       }
//     }
//   }
//   return encodedStr
// }
