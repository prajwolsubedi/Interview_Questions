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

