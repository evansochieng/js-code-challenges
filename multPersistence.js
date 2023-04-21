// //Option 1
// function persistence(num) {
//   //  multiply-indivisual digits -result- single didgit
//   count = 0;
//   for (var f = 0; f <= Number.MAX_VALUE; f++) {
//     if (num.toString().length < 2) {
//       count += 0;
//       break;
//     } else {
//       num = parseInt(
//         num
//           .toString()
//           .split("")
//           .map((n) => parseInt(n))
//           .reduce((ac, v) => ac * v, 1)
//       );
//       count += 1;
//     }
//   }
//   return count;
// }

//Option 2
//My version
function persistence(num) {
    //define a variable to store count
    let count = 0;

    //loop while length of number > 1, increase count
    for (count; num.toString().length > 1; count++){
      num = num
            .toString()
            .split("")
            .reduce((initVal, curVal) => initVal * parseInt(curVal), 1)
    }

    //return count
    return count
}


//call the function
x = persistence(999)
console.log(x)

//Using recursion
function persistence(num) {
  //define a variable to store count
  const numStr = num.toString();

  //check if num is of length 1, return 0
  if (numStr.length === 1){
    return 0;
  }
  //otherwise
  const nextNum = numStr
    .split("")
    .reduce((initVal, curVal) => initVal * parseInt(curVal), 1);

  //increase count by 1
  return 1 + persistence(nextNum);
}
