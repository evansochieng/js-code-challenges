// Define a function to count duplicates in an array
const findDup = (arr) => {
    //define an empty object to store counts
    const counts = {};

    // loop over array
    for (let element of arr){
        counts.hasOwnProperty(element)
          ? (counts[element] += 1)
          : (counts[element] = 1);
    }

    //return duplicate number
    for (let key in counts) {
        if (counts[key] >= 2) {
            return parseInt(key)
        }
    }
};

//Test the function
console.log(findDup([5,4,3,2,1,1]));
console.log(findDup([43, 45, 34, 56, 76, 34]));