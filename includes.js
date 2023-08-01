// const numbers = [8, 2, 6, 4, 10];
// const allEvenNumbers = numbers.every(num => num % 2 === 0);
// const someEvenNumbers = numbers.some(num => num % 2 === 0)

// console.log(allEvenNumbers); 
// console.log(someEvenNumbers);

const numbers = [1, 2, 3, 4, 5];
const hasThree = numbers.includes(3);
console.log(hasThree); // Output: true (since 3 is in the array)

const hasTen = numbers.includes(10);
console.log(hasTen);

const fruits = ['apple', 'banana' , 'orange'];
const joinedString = fruits.join(', ');
console.log(joinedString, typeof joinedString);