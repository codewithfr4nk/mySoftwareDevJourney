// function that implements fizzBuz into an array

function fizzBuzz() {
    let x = 1;
    let num = [];
    
    while (x <= 100) {
        if (x % 3 === 0 && x % 5 === 0) {
            num.push("FizzBuzz");
        } else if (x % 3 === 0) {
            num.push("Fizz");
        }
        else if (x % 5 === 0) {
            num.push("Buzz");
        } else {
            num.push(x)
        }
        x++;
    }
    
    console.log(num)
}

fizzBuzz();
 