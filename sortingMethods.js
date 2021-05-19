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

// Selection Sort
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
// MERGE SORT
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

function mergeSort(array) {
  const half = array.length / 2;
  funCall += 1;
  if (array.length < 2) {
    return array;
  }
  let left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

// BUBBLE SORT

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
