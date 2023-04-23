// Create a function to calculate the match outcomes between two variables
const getScoreDifference = (arr) => {
    // create empty arrays for the players scores
    let firstPlayerScores = [];
    let secondPlayerScores = [];

    for(let i=0; arr.length !== 0; i++) {
      // pick the first number in the array for first player
      let num1 = arr.shift();
      // push it to the array of the scores of the first player
      firstPlayerScores.push(num1);

      // reverse the array if the number picked is even
      if (num1 % 2 === 0) {
        arr.reverse();
      }

      // check that the array is not empty
      if (arr.length !== 0) {
        // pick the first number in the array for the second palyer
        let num2 = arr.shift();
        // push the number to the array of the scores of the second player
        secondPlayerScores.push(num2);

        // reverse the array if the number picked is even
        if (num2 % 2 === 0) {
          arr.reverse();
        }
      }
    }

    // Calculate total score for the players
    const firstPlayerTotal = firstPlayerScores.reduce( (initSum, curValue) => initSum + curValue, 0)
    const secondPlayerTotal = secondPlayerScores.reduce(
      (initSum, curValue) => initSum + curValue,
      0
    );

    // return the difference in the scores of the two players
    return firstPlayerTotal - secondPlayerTotal;
};

// Test the function //

// create an array with numbers
const scoreArr = [3, 6, 2, 3, 5];
// print out the return value of the function
console.log(getScoreDifference(scoreArr));