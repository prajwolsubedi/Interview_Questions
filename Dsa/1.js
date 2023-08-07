/*
From a given string find the character which has repeated consecutively the most.

Example:
- “abccc” should return “c”
- “bbcccbb” should return “c”
- “aabbbbbcnnmz” should return “b”
- “mjnuuiii123888888nnhujh” should return “8”
* Incase of same number of repetitions, later one should be returned
- “ab00mj11” should return “1”
* Incase of all single items, last character should be returned
- “abc” should return “c”

*/

function mostConsecutivelyRepeated(string) {
  if (typeof string !== "string") {
    return "Input should be an string!";
  }
  const length = string.length;
  let currentCount = 1;
  let maxRepeatedChar = string[length - 1];
  let maxCount = 1;

  for (let i = 1; i < length; i++) {
    if (string[i] === string[i - 1]) {
      currentCount++;
      if (currentCount >= maxCount) {
        maxRepeatedChar = string[i];
        maxCount = currentCount;
      }
    } else {
      currentCount = 1;
    }
  }
  return maxRepeatedChar;
}

console.log(mostConsecutivelyRepeated(''));
