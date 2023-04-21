// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


/// Write a function to handle this
function humanReadable(seconds) {
    let hours = 0;
    let minutes = 0;
    let timeSeconds = 0;
    if (seconds > 3600){
        //calculate hours and find remainder(modulo)
        hours = ~~(seconds/3600);
        let remainingSeconds = seconds % 3600;
        
        //check if remaining seconds greater than 60 and calculate minutes
        if (remainingSeconds >= 60){
            minutes = ~~(remainingSeconds / 60);
            timeSeconds = remainingSeconds % 60;
        } else {
            timeSeconds = remainingSeconds;
        }
    } else if (seconds >= 60){
        minutes = ~~(seconds/60);
        timeSeconds = seconds % 60;
    } else {
        timeSeconds = seconds;
    }

    //create a time array with the different parts of time
    const timeArray = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        timeSeconds.toString().padStart(2, '0')
    ];

    //return this array as a string separated by :
    return timeArray.join(":");
}

//Try it out
console.log(humanReadable(356734));
console.log(humanReadable(359999));