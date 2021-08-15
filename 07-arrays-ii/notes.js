let arr = [1,2,3,4,5,6,7];
let arr2 = 'abcdefghijklmnopqrstuvwxyz'.split('')

console.log([...arr, ...arr2]);

let name = "noor";
let str = "Hi my name is " + name + ".I work at Fullstack Academy!"
let str2 = `Hi my name is ${name} .I work at Fullstack Academy!`

if (name) {
  console.log(true);
} else {
  console.log(false);
}

name === "noor" ? console.log(true) : console.log(false); 


// --------

if (name) {
  console.log(true);
  name = "john"
} else {
  console.log(false);
}

// cannot have a ternary operator here 

if (name === "noor") {
// do something
} else if (name === "john") {
// do something else 
} else if (name === "samantha") {
  // do somethingggg else 
}

switch (name) {
  case "noor" : {
    console.log("hi")
    break;
  }
  case "john" : {
    // do something
    break;
  }
  case "samantha" : {
    // do something
    break;
  }
  default : {

  }
}
