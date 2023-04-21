// Create a function that takes a non-negativer number as input and returns an integer with the digits ordered in descending order
function orderNumber(num){
    //return the digits in descending order
    return parseInt(num.toString().split("").sort().reverse().join(""));
}

// Test the code
console.log(orderNumber(45362));
console.log(orderNumber(544876549));