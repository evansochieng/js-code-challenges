function formatDuration(seconds) {
  // define variables to store hours, minutes and seconds
  let hours;
  let minutes;
  let remSeconds;

  // define variables for days and years
  let days;
  let years;

  //if 0, return now
  if (seconds === 0) {
    return "now";
  }

  // check if seconds is > 3600
  if (seconds >= 3600) {
    hours = ~~(seconds / 3600);
    remSeconds = seconds % 3600;

    if (remSeconds >= 60) {
      minutes = ~~(remSeconds / 60);
      remSeconds = remSeconds % 60;
    }
  } else if (seconds >= 60) {
    minutes = ~~(seconds / 60);
    remSeconds = seconds % 60;
  } else {
    remSeconds = seconds;
  }

  // convert hours to days
  if (hours >= 24) {
    days = ~~(hours / 24);
    hours = hours % 24;
  }

  // convert days to years
  if (days >= 365) {
    years = ~~(days / 365);
    days = days % 365;
  }

  //return statement
  let yearString;
  let dayString;
  let hourString;
  let minuteString;
  let secondString;

  // years return part
  if (years > 1) {
    yearString = `${years} years`;
  } else if (years === 1) {
    yearString = `${years} year`;
  } else {
    yearString = "";
  }

  // days return part
  if (days > 1) {
    dayString = `${days} days`;
  } else if (days === 1) {
    dayString = `${days} day`;
  } else {
    dayString = "";
  }

  // hours return part
  if (hours > 1) {
    hourString = `${hours} hours`;
  } else if (hours === 1) {
    hourString = `${hours} hour`;
  } else {
    hourString = "";
  }

  // minutes return part
  if (minutes > 1) {
    minuteString = `${minutes} minutes`;
  } else if (minutes === 1) {
    minuteString = `${minutes} minute`;
  } else {
    minuteString = "";
  }

  // seconds return part
  if (remSeconds > 1) {
    secondString = `${remSeconds} seconds`;
  } else if (remSeconds === 1) {
    secondString = `${remSeconds} second`;
  } else {
    secondString = "";
  }

  //return concatenated string
  if (
    yearString &&
    dayString &&
    hourString &&
    minuteString &&
    secondString
  ) {
    return `${yearString}, ${dayString}, ${hourString}, ${minuteString} and ${secondString}`;
  } else if (
    dayString &&
    hourString &&
    minuteString &&
    secondString
  ) {
    return `${dayString}, ${hourString}, ${minuteString} and ${secondString}`;
  } else if (hourString && minuteString && secondString) {
    return `${hourString}, ${minuteString} and ${secondString}`;
  } else if (minuteString && secondString) {
    return `${minuteString} and ${secondString}`;
  } else {
    return yearString + dayString + hourString + minuteString + secondString;
  }
}

// Test code
console.log(formatDuration(132030240));