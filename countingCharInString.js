function count(string) {
  // The function code should be here
  const frequencyCounter = {};

  // loop over the string
  for (let val of string) {
    frequencyCounter[val] = ++frequencyCounter[val] || 1;
  }

  // return the object
  return frequencyCounter;
}

// test the function
console.log(count('aba'));