//Write a program to calculate the leap year
function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return("Leap Year!")
            }
            return("Not Leap Year!")
        }
        return('Leap year!')
    }
    return('Not Leap Year!')
}
const yearToTest = [2000, 2004, 2008, 2012, 2016, 2020, 2048, 2001, 2044, 2022 ]
yearToTest.map((year) => {
    console.log(`${year} ${leapYear(year)}`);
});


