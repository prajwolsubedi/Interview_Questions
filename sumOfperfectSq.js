/*
    3)  Write a program to find the sum of perfect square numbers between a and b, including both    a and b as well if they are perfect square.
    Eg.
    The perfect numbers between a = 2 and b = 10 are 4, 9 and the sum is 13
    The perfect square numbers between a = 4 and b = 25 are 4, 9, 16, 25 and the sum is 54.
    Find the sum of such numbers keeping in mind that a, b are in range [1, 10000]
*/
function isPerfectSquare(num) {
  squareRoot = Math.sqrt(num);
  return squareRoot === Math.floor(squareRoot);
}
function sumOfPerfectSquare(lowerLimit, upperLimit) {
  if (
    lowerLimit < 1 ||
    upperLimit > 10000 ||
    upperLimit < 1 ||
    lowerLimit > 10000
  ) {
    return "Envalid input the range of a and b shoule be [1,10000]";
  }
  if (lowerLimit > upperLimit) {
    return "a should be smaller than or equal to b.";
  }
  let sum = 0;
  for (i = lowerLimit; i <= upperLimit; i++) {
    if (isPerfectSquare(i)) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfPerfectSquare(4, 9));

