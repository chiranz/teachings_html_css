// Memoization with global scope
var functionCall = 0;
var fibnums = {};
function fib(n) {
  console.log(fibnums);
  functionCall += 1;
  if (n < 2) {
    return 1;
  }
  if (fibnums[n]) return fibnums[n];
  fibnums[n] = fib(n - 1) + fib(n - 2);
  return fibnums[n];
}

// Memoization with local scope
var functionCall = 0;
function fib(n, memo = {}) {
  console.log(memo);
  functionCall += 1;
  if (n < 2) {
    return 1;
  }
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Sorting Algorithms
// const dupnums = [2,3,1]
// minId = 0, compareId = minId + 1
// compare (2,3) minId = 0, compareId = 2
// compare(2, 1)  minId = 2
// swap (ipos, minIdPos)
//
//
//
//
//
//
//
const numsA = [6, 3, 9, 10, 1, 4, 8];
const numsB = [6, 3, 9, 10, 1, 4, 8];
function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        // temp = 2
        nums[i] = nums[j];
        // dupnums = [1, 3, 1]
        nums[j] = temp;
        // dupnums = [1,3,2]
        console.log(nums);
      }
    }
  }
  console.log(nums);
}
// insertionSort(numsA);

// Bubble Sort
function bubbleSort(nums) {
  console.log("Called bubble sort");
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log("Inside loop");
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        // temp = 2
        nums[j] = nums[j + 1];
        // dupnums = [1, 3, 1]
        nums[j + 1] = temp;
        // dupnums = [1,3,2]
        console.log(nums);
      }
    }
  }
  console.log(nums);
}

// bubbleSort(numsB);

// for (let i = 0; i < numsB.length; i++) {
//   for (let j = i + 1; j < numsB.length; j++) {
//     console.log(i, j);
//   }
// }
// TODO: Merge sort
// function merge(left, right) {
//   let arr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }
//   return [...arr, ...left, ...right];
// }

// function mergeSort(array) {
//   const half = array.length / 2;

//   if (array.length < 2) {
//     return array;
//   }
//   let left = array.splice(0, half);
//   return merge(mergeSort(left), mergeSort(array));
// }
function merge(left, right) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      arr.push(right[j]);
      j++;
    } else {
      arr.push(left[i]);
      i++;
    }
  }

  return [
    ...arr,
    ...left.slice(i, left.length),
    ...right.slice(j, right.length),
  ];
}
var funCall = 0;

function mergeSort(array) {
  const half = array.length / 2;
  funCall += 1;
  if (array.length < 2) {
    return array;
  }
  let left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

// DATE: May 16th
function swap(i, j, array) {
  let temp = array[i];
  // temp = 2
  array[i] = array[j];
  // dupnums = [1, 3, 1]
  array[j] = temp;
  // dupnums = [1,3,2]
  console.log(array);
}

function selectionSort(nums, desc) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!desc) {
        if (nums[i] > nums[j]) {
          swap(i, j, nums);
        }
      } else {
        if (nums[i] < nums[j]) {
          swap(i, j, nums);
        }
      }
    }
  }
  console.log(nums);
}
// TODO: Return every two numbers that gives the sum
// Answer should be in this form = [[a, b], [c, d], [e,f ]]
function findSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}

findSum([5, 7, 9, 8, 6, 4], 10);

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
  console.log(array);
}
insertionSort([5, 7, 9, 8, 6, 4]);
