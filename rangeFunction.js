function range(start, stop, step) {
  // check number of arguments passed: if it is 1, then it is the stop
  // assign the others undefined
  if (arguments.length === 1) {
    stop = arguments[0];
    start = undefined;
    step = undefined;
  }
  //assign defaults if some of the variables have no values
  start = start || 0;

  //For step, we need to check if its undefined, 0 can be a step
  if (step === undefined) {
    step = 1;
  }

  //create an empty list for the
  let integerList = [];

  //ranges that stop before they start are considered to be zero-length
  if (start > stop) {
    return integerList;
  }

  //Check the value of step
  // If its zero, return the same value, start, the number of times it could have been
  //returned if step was 1
  // Else do the normal incrementing
  if (step === 0) {
    for (let i = start; i < stop; i++) {
      integerList.push(start);
    }
  } else {
    for (let i = start; i < stop; ) {
      integerList.push(i);
      i += step;
    }
  }

  // return the array
  return integerList;
}


//Test function
console.log(range(10));
console.log(range(1,11));
