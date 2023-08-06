const arr = [9,8,7,6,5,4,3,2,1,0]

// const result = arr.reverse();
const result = arr.sort()

const arr3 = [11,2,22,1]
console.log(arr3.sort((a, b) => a - b));

const fillArray = new Array(5).fill(0)
console.log(fillArray);

const resultFillArray = fillArray.fill(1,1,-1)
console.log(resultFillArray);