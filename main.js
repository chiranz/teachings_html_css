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
