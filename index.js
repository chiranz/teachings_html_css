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

insertionSort(numsA);

// Bubble Sort
function bubbleSort(nums) {
  console.log("Called bubble sort");
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
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

bubbleSort(numsB);

// for (let i = 0; i < numsB.length; i++) {
//   for (let j = i + 1; j < numsB.length; j++) {
//     console.log(i, j);
//   }
// }
