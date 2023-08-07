//Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

function noOfVowels(string){
    let vowelCount = 0
    if(typeof string !== 'string')
        return `Invalid input!!`
    
    for(let i=0; i<string.length; i++){
        let check = string[i]
        // if(check === 'a' || check === 'e' || check === 'i' || check === 'o' || check === 'u'){
        //     vowelCount += 1;
        // }
        if ('aeiou'.includes(string[i])) {
            vowelCount += 1;
          }
    }
    return vowelCount
}

console.log(noOfVowels('897491375saeio'));