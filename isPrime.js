// Define a function that takes an integer argument and returns a logical value 
//true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater 
//than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as
// well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most 
//trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). 
//Looping all the way up to n, or n/2, will be too slow.

/////////////////// SOLUTION ///////////////////////
function isPrime(num) {
  //TODO
  // If number is less than 2, return false
  if (num <= 1) return false;

  //return false if number is divisible by 2
  if (num % 2 === 0 && num > 2) return false;

  // For numbers greater than 2, start 3 and increment in twos
  // stop at the square
  for (let dig = 3; dig <= Math.sqrt(num); dig += 2) {
    if (num % dig === 0) return false;
  }

  //Otherwise return true
  return true;
}

//Solution 2
function isPrime(num){
  // If number is less than 2, return false
  if (num <= 1) return false;

  // For numbers greater than 2, start 3 and increment in twos
  // stop at the square
  for (let dig = 2; dig <= Math.sqrt(num); dig ++) {
    if (num % dig === 0) return false;
  }

  //Otherwise return true
  return true;
}


//Solution 3
function isPrime(element) {
  // for numbers less than 2 and even numbers
  if (element % 2 === 0 || element < 2) {
    return false;
  }

  // for numbers divisible by 3
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}