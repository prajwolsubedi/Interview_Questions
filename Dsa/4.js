//Create a program that simulates a dice roll. It should generate a random number between 1 and 6 and display the result to the user.

function randomDiceNo(){
    const num = Math.random() * 6;
    const result = Math.floor(num) + 1;
    return result;
    
}

console.log(randomDiceNo());