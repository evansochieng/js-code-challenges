// Custom FizzBuzz Array
// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

// The function should be able to take up to 4 arguments:

// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th arguments are integers, 3 and 5 by default.
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

const fizzBuzzCustom = (strOne="Fizz", strTwo="Buzz", numOne=3, numTwo=5) => {
    // initialize an empty array to store fizbuzz
    const fizzArr = [];

    // check for conditions and push appropriately
    for (let i = 1; i<101; i++) {
        if (i % numOne === 0 && i % numTwo === 0) {
          fizzArr.push(strOne + strTwo);
        } else if (i % numOne === 0) {
          fizzArr.push(strOne);
        } else if (i % numTwo === 0) {
          fizzArr.push(strTwo);
        } else {
          fizzArr.push(i);
        };
    }

    return fizzArr;

};

// Test the function
fizzBuzzCustom();
fizzBuzzCustom('Hey', 'There') 
fizzBuzzCustom('Foo', 'Bar', 2, 3)