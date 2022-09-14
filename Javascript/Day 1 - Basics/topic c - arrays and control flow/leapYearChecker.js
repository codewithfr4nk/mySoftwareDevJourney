/*
Rules for a leap year:
    1. Every year that is evenly divisible 4
    2. Except every year that is evenly divisible by 100
    3. Unless the year is also evenly b 400
    i.e 2100 in Not a leap year
        2016 is a leap year
*/

function findLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                
                return `${year} is a Leap year.`
                
            } else {
                
                return `${year} is Not a Leap year.`
            }
        } else {
            return `${year} is a Leap year.`
        }
        
    } else {
        
        return `${year} is Not a Leap year.`
    }
}

const year = findLeapYear(2017);
console.log(year);