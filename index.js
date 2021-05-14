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
console.log(fib(30));

console.log(`Function called ${functionCall} times`);

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
console.log(fib(10));

console.log(`Function called ${functionCall} times`);
