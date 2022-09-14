function bmiCalculator(weight, height) {
    const bmi = weight / Math.pow(height, 2);  
    return (Math.round(bmi) + (" kgm-2"));
}

const soln = bmiCalculator(60, 3.8);
console.log(soln);