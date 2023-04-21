// loop over an array and find elements with matching characters at same position
function solution(S) {
    let index1, index2, pos;

    for (let i=0; i<S.length; i++) {
        let curStr = S[i];
        let remArr = S.filter( item => item !== S[i])

        for (let j=0; j<remArr.length; j++){
            let nxtStr = remArr[j]
            
            for (let k=0; k<curStr.length; k++){
                if (curStr[k] === nxtStr[k]) {
                    // console.log(`Current: ${curStr}, Other: ${nxtStr}`)
                    index1 = S.indexOf(curStr);
                    index2 = S.indexOf(nxtStr);
                    pos = k;
                    //break;
                }
            }
        }
    }

    //return 
    return pos || pos === 0 ? [index1, index2, pos] : [];
}

// Test the function
console.log(solution(['abc', 'bca', 'dbe']));
console.log(solution(["gr", "sd", "rg"]));
console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"]));
