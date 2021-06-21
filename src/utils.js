// UTILS FUNCTIONS
//  Function that returns an array of random numbers given minimum value, max value and its length
function getRandomArray(min, max, length) {
  const ans = [];
  for (let i = 0; i < length; i++) {
    const newNumber = Math.floor(Math.random() * (max - min) + min);
    ans.push(newNumber);
  }
  return ans;
}
// TODO: Write a function which removes the duplicates from the array

// SWAP two positions in an array
function swap(i, j, array) {
  let temp = array[i];
  // temp = 2
  array[i] = array[j];
  // dupnums = [1, 3, 1]
  array[j] = temp;
  // dupnums = [1,3,2]
  console.log(array);
}
