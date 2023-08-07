//Write a function that takes a list of integers as input and returns the sum of all even numbers in the list.

function evenSum(arr){
    let sum = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0)
            sum += arr[i]
    }
    return sum
}
const arr1 = [1,2,3,4,5]
const arr2 = [2,4,6,8]
console.log(evenSum(arr1));
console.log(evenSum(arr2));