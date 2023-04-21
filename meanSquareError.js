// // write a function for calculating the mean square error given two arrays
// const solution = function (firstArray, secondArray) {
//     const squareError = firstArray.forEach((element, index) => {
//         return Math.abs(element - secondArray[index]) ** 2
//     });
// };

// write a function for calculating the mean square error given two arrays
const solution = (firstArray, secondArray) => {
  let meanSquareError = 0;
  firstArray.forEach((element, index) => {
    meanSquareError += (Math.abs(element - secondArray[index]) ** 2);
  });

//   const meanSquareError =
//     squareError.reduce((prevValue, curValue) => prevValue + curValue, 0) /
//     squareError.length;

  return meanSquareError;
};

// const solution = (firstArray, secondArray) => {
//     let squareError = [];
//     firstArray.forEach((element, index) => {
//         squareError.push(Math.abs(element - secondArray[index]) ** 2); 
//     });

//     const meanSquareError = squareError.reduce((prevValue, curValue) => prevValue + curValue, 0) / squareError.length;

//     return meanSquareError;
// };
//Test function
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(solution(arr1, arr2));

// Solution 2
const answer = (first, sec) =>
  first.reduce((a, el, i) => a + Math.abs(el - sec[i]) ** 2, 0) / first.length;