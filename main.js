function whereIsSimAvalilable() {
  let simInRhenock = false;
  let simInKpg = false;
  let simInSiliguri = true;
  if (simInRhenock === true) {
    console.log("SIM found in rhenock");
  } else {
    console.log("Sim not found in rhenock!");
  }
  if (simInKpg === true) {
    console.log("SIM found in KPG");
  } else {
    console.log("Sim not found in KPG!");
  }
  if (simInSiliguri === true) {
    console.log("SIM found in Siliguri");
  } else {
    console.log("Sim not found in Siliguri!");
  }
}

function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

// Function with logical operators and conditionals
function calculator(task, a, b) {
  if (task === "add") {
    return add(a, b);
  } else if (task === "substract") {
    return substract(a, b);
  } else if (task === "divide") {
    return divide(a, b);
  } else if (task === "multiply") {
    return multiply(a, b);
  } else {
    return "We cannot do that task";
  }
}

// DATA STRUCTURES
// Array
let masalaContainer = ["5foran", "haldi", "methi", "nun", "ginger", "garlic"];
// Dictonary / Object

let masalaObject = {
  methi: [],
};

// JAN 14 2021

function Player(name, suit, weapons) {
  let player = {
    health: 100,
    name: name,
    suit: suit ? suit : "Normal suit",
    weapons: weapons ? weapons : "Normal Weapons",
  };

  player.eat = (amount) => {
    player.health += amount;
  };
  player.getHealth = () => {
    console.log(`Remaining health of player is ${player.health}`);
  };

  player.shoot = () => {
    console.log(`Player is shoooting`);
  };

  player.changeWeapon = (weapon) => {
    player.weapons = weapon;
  };
  player.changeSuit = () => {};
  // TODO: get current suit of player
  // TODO: Set current Suit of player
  // TODO: Reduce health of player
  // TODO: What does new keyword mean in javascript
  // TODO: What does this keyword mean in javascript

  return player;
}
