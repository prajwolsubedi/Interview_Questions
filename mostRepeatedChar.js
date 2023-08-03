/*
4) From a given string find the character which has repeated consecutively the most.
Example:
- “abccc” should return “c”
- “bbcccbb” should return “c”
- “aabbbbbcnnmz” should return “b”
- “mjnuuiii123888888nnhujh” should return “8”
* Incase of same number of repetitions, later one should be returned
- “ab00mj11” should return “1”
* Incase of all single items, last character should be returned
- “abc” should return “c”
*/

/*
2. Write a basic javascript code block the implements the following
    a. Constructor
    b. Polymorphism
    c. Inheritance
*/

console.time('myAlgorithm');
    function mostConsecutvelyRepeatedChar(string){
        if(typeof string !== 'string'){
            return ('String should be provided as an input!')
        }
        maxRepeatedChar = string[string.length-1];
        maxCount = 0;
        currCount = 1;
        for(let i=1; i<string.length; i++){
            if(string[i] === string[i-1]){
                currCount++;
                if(currCount >= maxCount){
                    maxCount = currCount;
                    maxRepeatedChar = string[i]
                }
            }
            else{
                currCount = 1;
            }
        }
        return maxRepeatedChar;
    }
console.log(mostConsecutvelyRepeatedChar("abccc"));
console.log(mostConsecutvelyRepeatedChar("bbcccbb"));
console.log(mostConsecutvelyRepeatedChar("aabbbbbcnnmz"));
console.log(mostConsecutvelyRepeatedChar("mjnuuiii123888888nnhujh"));
console.log(mostConsecutvelyRepeatedChar("“ab00mj11”"));
console.log(mostConsecutvelyRepeatedChar("abc"));
console.log(mostConsecutvelyRepeatedChar(123));
console.log(mostConsecutvelyRepeatedChar(NaN));
console.log(mostConsecutvelyRepeatedChar(undefined));
console.log(mostConsecutvelyRepeatedChar("string"));
console.timeEnd('myAlgorithm');
