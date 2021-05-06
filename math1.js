// TODO: Factorial using recursion
function factorialUsingRecursion(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorialUsingRecursion(n - 1);
}
