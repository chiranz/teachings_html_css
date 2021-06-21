const path = require("path");
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
