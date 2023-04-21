let str1 = 'Javascript';

let str2 = 'Java';

let arr1 = str1.split("");

let arr2 = str2.split("");

function scramble(){
    for (i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i])) {
        let x = arr1.find((elem) => arr2[i] === elem);
        let index = arr1.indexOf(x);
        arr1.splice(index, 1);
        //arr1 = arr1.filter((elem) => arr2[i] !== elem);
      } else {
        return false;
      }
    }

    return true;
}

//try it out
console.log(scramble())

/////////////////////////////////////////////////
function scramble(str1, str2) {
  // create arrays from the string
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  arr2.forEach(element => {
    if (arr1.includes(element)) {
      let index = arr1.indexOf(arr1.find((elem) => arr2[i] === elem));
      arr1.splice(index, 1);
      //arr1 = arr1.filter((elem) => arr2[i] !== elem);
    } else {
      return false;
    }
  });
  return true;

  //check if array 1 has all the elements of array 2
  //const isArr2InArr1 = arr2.every(curLetter => arr1.includes(curLetter));

  //return isArr2InArr1
  //return isArr2InArr1;
}