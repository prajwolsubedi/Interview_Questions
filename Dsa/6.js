// Implement a recursive function to calculate the factorial of a given positive integer.
// Wap program to check if a given number is prime or not.
function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(0));

function checkPrime(num) {
  if (num === 1 || num === 2) return true;
  if (num % 2 === 0) return false;
  let i = 3;

  while (i <= Math.sqrt(num)) {
    if (num % i === 0) return false;
    i += 2;
  }
  return true;
}
const result = checkPrime(1);
console.log(result);
