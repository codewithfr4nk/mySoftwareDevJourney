
// a function that generate a specified (n) number of values in a Fibonacci Sequence
function fibonacciGenerator(n) {
    if (n === 1) {
        let fbSeries = [0];
        return fbSeries;
        
    } else if (n === 2) {
        let fbSeries = [0, 1];
        return fbSeries;
        
    } else {
        let fbSeries = [0, 1]; 
        /*
            - getting the last 2 values in the array
            - adding the values
            - pushing their sum to the end of the array until the value of 'n' is equal to the length of the array
        */
        let lastValue = (fbSeries[fbSeries.length - 1] + fbSeries[fbSeries.length - 2]);
        fbSeries.push(lastValue);

        // looping through the array to add a specified number of values until the value of 'n' is equal to the length of the array
        for (let x = 2; x < n; x++) {
            let lastValue = (fbSeries[fbSeries.length - 1] + fbSeries[fbSeries.length - 2]);
            fbSeries.push(lastValue);
        }
        return fbSeries;
    }
}

fibonacciGenerator(6);
 