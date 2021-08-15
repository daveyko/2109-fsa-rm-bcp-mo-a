Solutions to the Object Methods problems:
1. Say My Name:
Workshop: https://codepen.io/FullstackAcademy/pen/rdeWbq

Solutions video: https://youtu.be/YhYtogambGk

Solution:
```
let me = {
  name: 'Karen',
  getGreeting: function() {
    return 'Hi, my name is ' + this.name + '.';
  }
}

// alternative solution using ES6 string interpolation
let altMe = {
  name: 'Gabe',
  getGreeting: function() {
    return `Hi, my name is ${this.name}.`;
  }
}
```

2. Say Your Name
Workshop: https://codepen.io/FullstackAcademy/pen/vRGyqN

Solutions video: https://youtu.be/BikrzQ259H0

Solution:
```
let me2 = {
  name: 'Tarana',
  getGreeting: function(friend) {
    return 'Hi ' + friend.name + ', my name is ' + this.name + '.';
  }
}
```

3. Call Them All
Workshop: https://codepen.io/FullstackAcademy/pen/mxPRyE

Solutions video: https://youtu.be/nPJjSP8gxUM

Solution:
```
function callThemAll(object, argument) {

  // create an array to store the returned values from the methods
  let methodResults = [];

  // loop through all of the keys in the object
  for (let key in object) {
    let currentValue = object[key];

    // if the currentValue is a method in the object...
    if (typeof currentValue === 'function') {

      // ...call the method, passing in the argument
      let methodResult = currentValue(argument);

      // push the value returned by the method into the methodResults array
      methodResults.push(methodResult);
    }
  }

  return methodResults;
}
```

4. Tic Tac Toe
Workshop: https://codepen.io/FullstackAcademy/pen/ZxWLLV

Solutions video: https://youtu.be/gIfNQPEeLfI

Solution:
```
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function(player, rowNum, colNum) {
    // only reassign the cell if it is currently null
    if (!this.board[rowNum][colNum]) {
      this.board[rowNum][colNum] = player;
    }

    console.log(this.board);
    return this.board;
  },

  clear: function() {
    this.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    console.log(this.board);
    return this.board;
  }
}
```

5. Taco Cat Inc.
Workshop: https://codepen.io/FullstackAcademy/pen/EEKZZB

Solutions video: https://youtu.be/jB_rvfLjr2M

Solution:
```
tacoCatInc.currentInventory = function() {
  let total = 0;

  // loop through every key in tacoCatInc
  for (let category in this) {

    // don't include cash in the inventory calculation
    if (category === 'cash') {
      continue;
    }

    // the value in each category is another object of items
    let items = this[category];

    // loop through each itemName in the category
    for (let itemName in items) {
      let itemObj = items[itemName];

      // add the product of each item's cost and quantity to the total
      total += itemObj.cost * itemObj.quantity;
    }

  }

  return total;
};

tacoCatInc.sale = function(order) {
  let finalPrice = 0;

  // loop through all of the categories in the order
  for (let category in order) {

    // the choices are the keys in the order object
    let choice = order[category];

    // add the cost of the choice to the final price
    finalPrice += this[category][choice].cost;

    // also add the cost of the choice to the cash property
    this.cash += this[category][choice].cost;

    // also subtract one from the quantity of the chosen item
    this[category][choice].quantity--;
  }

  return finalPrice;
}
```
