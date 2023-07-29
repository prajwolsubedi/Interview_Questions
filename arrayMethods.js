
//New array.

// const arr = [1,2,3,4,5]

// const mapArr = arr.map((item) => item + 5)
// const filterArr = mapArr.filter(item => item % 2 === 0)
// const sliceArr = arr.slice(1,4)
// console.log(sliceArr);

// arr.push(6)
// arr.unshift(0)
// arr.pop();
// arr.shift();
// arr.shift();
// const arr2 = [[6,7]]
// const arr3 = arr.concat(arr2)
// arr3[5][0] = 8
// console.log(arr2);
// console.log(arr3);

//flat and flatMap

const arr = [1,2,3,4,[[5,6],7]]
// const flatArr = arr.flat();
// console.log(flatArr);
// console.log(arr);

const flatMapArr = arr.flatMap((element) => element).flat(2)
console.log(flatMapArr);




