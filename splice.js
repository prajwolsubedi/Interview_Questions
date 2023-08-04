const arr = [1,2,3,4,5]

/*
array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

startIndex: The index at which the modification should begin. If negative, it counts from the end of the array (-1 refers to the last element).

deleteCount: The number of elements to remove from the array starting at the startIndex. If set to 0, no elements are removed, and the operation will only add elements.

item1, item2, ..., itemN: Elements to be inserted into the array starting at the startIndex.

Return value:
The method returns an array containing the elements that were removed from the original array. If no elements are removed, an empty array is returned.
*/

//1. using splice to remove elements from an array at specific position

// const removedElement = arr.splice(2,1);
// console.log(arr);
// console.log(removedElement);


//2. using splice to replace elements in an array at specific position

// const removedElement = arr.splice(3,2,'a','b')
// console.log(arr);
// console.log(removedElement);

//3. using splice to insert elemnts in an array at specific position

const removedElement = arr.splice(2,0,'a','b','c')
console.log(arr);
console.log(removedElement);
