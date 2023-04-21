// Task 3
// create a function for symmetric strings
function solution(S){
    if (S.length % 2 !== 0) return 'Not symmetric'
    // split the string into 2 parts
    let part1 = S.slice(0, S.length/2)
    let part2 = S.slice(S.length/2, S.length);

    // create a function to check if the two parts are equal
    const similarChar = (str) => str.split("").every( (char) => str[0] === char)



    return `Part 1: ${similarChar(part1)}, Part 2: ${similarChar(part2)}`;
}

// Test the function
console.log(solution("<<<>>>"));
console.log(solution('<<>>>'));
//console.log('<<>>'.split(""));

// console.log('Ev?ns'.replace(/\?/g, '<'));

// for (let sym of ['<', '>']) {
//     console.log(sym)
// }

let y = "<<<>>>".match(/\<\1*\>\1*/g)
console.log(y[0].length)