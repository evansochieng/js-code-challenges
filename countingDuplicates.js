function duplicateCount(text) {
  // convert everything to lower case
  let lowerCharArr = text.toLowerCase().split("");

  // loop over the text and create an object with the count of every character
  let countObject = {};

  for (let char of lowerCharArr){
    // create a key for the character and value with the number of its occurence
    countObject.hasOwnProperty(char)
      ? (countObject[char] += 1)
      : (countObject[char] = 1);
  }

  // count duplicates
  let count = 0;
  for (let key in countObject){
    if (countObject[key] >=2 ){
        count += 1;
    }
  }

  //return the object
  return(count)
}

// Test the function
duplicateCount("aA11");