"use strict";







function outerFunction(input) {
  let outerVar = 10;

  function closureFunction() {
    console.log(outerVar); // closureFunction captures outerVar in a closure
    console.log(input);
  }

  return closureFunction; // Returns the closure, which retains access to outerVar
}

const closure = outerFunction('prajwol');
closure(); // Output: 10









// const myObject = {
//   firstName: 'prajwol',
//   age: 12,
//   myAge : function(){
//     console.log(`I am khatra`);
//     console.log(this);
//   }
// }
// myObject.myAge()

// calcAge1(1);
// function calcAge1(birthYear) {
//   console.log(birthYear);
//   console.log(this);
// }

// const calcAge2 = function (birthYear) {
//     console.log(birthYear);
//     // console.log(this);
// };
// calcAge2(2)

// const calcAge3 = (birthYear) => {
//   console.log(birthYear);
// //   console.log(this);
// };
// calcAge3(3)
// console.log(this);
// console.log(this === window);