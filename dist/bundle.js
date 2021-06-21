/******/ (() => { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// TODO: Return every two numbers that gives the sum
// Answer should be in this form = [[a, b], [c, d], [e,f ]]
// Using Set to store required nums
function findSum(arr, sum) {
  console.log(arr);
  const requiredNums = new Set();
  for (let i = 0; i < arr.length; i++) {
    console.log(requiredNums);
    if (requiredNums.has(arr[i])) {
      return [sum - arr[i], arr[i]];
    } else {
      requiredNums.add(sum - arr[i]);
    }
  }
  return [];
}

// USING ARRAY to store requiredNUMS
// function findSum(arr, sum) {
//   console.log(arr);
//   const requiredNums =  [];
//   for (let i = 0; i < arr.length; i++) {
//     if (requiredNums.includes(arr[i])) {
//       return [sum - arr[i], arr[i]];
//     } else {
//       requiredNums.push(sum - arr[i]);
//     }
//   }
// }

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

function compareTwoArrays(firsArr, secondArr) {
  if (firsArr.length !== secondArr.length) return false;
  for (let i = 0; i < firsArr.length; i++) {
    if (firsArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}

const arrayToTest = getRandomArray(0, 100000, 10000);
const mySortedAns = insertionSort([...arrayToTest]);
const jsSortedAns = arrayToTest.sort((a, b) => a - b);

if (compareTwoArrays(mySortedAns, jsSortedAns)) {
  console.log("algoritm is fine");
} else {
  console.log("algoritm is not fine");
}

/******/ })()
;