const dogAge = prompt("What's your dog's age: ");
let converter = (dogAge - 2) * 4 + 21;   /* - dog to human age math formula
- parenthesis takes precedence over multiplication
*/
alert(converter + " years old in human years!");