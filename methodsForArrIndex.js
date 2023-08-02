

//finding index

const arr = [1,2,7,3,4,5,5,6]

//Finding the indexOf and array element based on the value
// console.log(arr.indexOf(5));

//based on test condition
const result = arr.findIndex(item => item > 5)
// console.log(arr.length);
// console.log(result);


//finding element based on testCondition
const findResult = arr.find((item) => item > 2)
console.log(findResult);

