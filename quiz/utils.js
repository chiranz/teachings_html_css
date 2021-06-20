const getRandomizedArray = (array) => {
  // If not copied original array will be modified
  array = [...array];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let randInt = Math.floor(Math.random() * length);
    temp = array[randInt];
    array[randInt] = array[i];
    array[i] = temp;
  }
  return array;
};

const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
