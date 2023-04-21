// Description
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

/////////////////////////////////////Development Stage/////////////////////////////////////
//Define your string
let str = "is2 Thi1s T4est 3a";

//Convert the string to an array of strings
const strArr = str.split(" ");

//define variables to store count of loop
let i = 0,
  j;

//Loop over the elements in the array, match the numver in the elements
while (i < strArr.length) {
  j = i + 1;
  while (j < strArr.length) {
    if (
      parseInt(strArr[j].match(/\d+/)[0]) < parseInt(strArr[i].match(/\d+/)[0]) 
    ) {
      let nextWord = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = nextWord;
    }
    j++;
  }
  i++;
}

//convert array back to string
const sortedStr = strArr.join(" ")
//////////////////////////////////////////////////////////////////////////////////////

/////////Define a function to implement all this//////////
function order(words) {
  // ...
  //Convert the string to an array of strings
  const strArr = words.split(" ");

  //define variables for the loops
  let i = 0,
    j;

  //Loop over the elements in the array, match the number in the elements
  while (i < strArr.length) {
    j = i + 1;
    while (j < strArr.length) {
      if (
        //match digits, extract the number at index 0
        // Compare number in current string with the one in next string
        parseInt(strArr[j].match(/\d+/)[0]) <
        parseInt(strArr[i].match(/\d+/)[0])
      ) {
        let nextWord = strArr[i];
        strArr[i] = strArr[j]; //swap strings if condition is met
        strArr[j] = nextWord;
      }
      j++;
    }
    i++;
  }

  //convert array back to string and return
  return strArr.join(" ");
}


////Test code////
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));


//