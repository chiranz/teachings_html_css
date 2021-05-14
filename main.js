//  Factorial using for loop
// TODO: How will you modify this function if N is negative
function factWithLoop(n) {
  const isNegative = Math.abs(n) != n;
  if (isNegative) {
    n = Math.abs(n);
  }
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }

  return isNegative ? `${factorial}i` : factorial;
}
console.log(factWithLoop(-5));

//  Factorial using recursion
// TODO: How will you modify this function if N is negative
function factorialUsingRecursion(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorialUsingRecursion(n - 1);
}

//  Multiplication using for loop
// TODO: How will you modify this function to satisfy
// Case 1: When (a) is -ve
// Case 2: When (b) is -ve
// Case 3: When (a) and (b) is -ve

function mulUsingLoop(a, b) {
  let product = 0;
  if (Math.abs(a) != a && Math.abs(b) != b) {
    a = Math.abs(a);
    b = Math.abs(b);
  }
  if (Math.abs(a) != a) {
    temp = a;
    a = b;
    b = temp;
  }
  for (let i = 0; i < a; i++) {
    product += b;
  }
  return product;
}

//  Multiplication using recursion
// TODO: How will you modify this function to satisfy
// Case 1: When (a) is -ve
// Case 2: When (b) is -ve
// Case 3: When (a) and (b) is -ve
function mulUsingRecursion(a, b) {
  if (b <= 1) {
    return a;
  }
  return a + mulUsingRecursion(a, b - 1);
}

// TODO: Fibonacci using for loop

function fibUsingLoop(n) {
  let fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    const fib = fibArr[i - 2] + fibArr[i - 1];
    fibArr.push(fib);
    console.log(fibArr);
  }
  return fibArr[n];
}

// TODO: Fibonacci using recursion.

function fibUsingRecursion(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fibUsingRecursion(n - 1) + fibUsingRecursion(n - 2);
}
