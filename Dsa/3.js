// Given a list of strings, write a function to find the longest string in the list.

const names = ["prajwol", "sahin", "elon", "sam", "bestVersion"];

function longestStringInArray(arr) {
  let maxStringLength = 0;
  let maxString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= maxStringLength) {
      maxStringLength = arr[i].length;
      maxString = arr[i];
    }
  }
  return maxString;
}

console.log(longestStringInArray(names));
