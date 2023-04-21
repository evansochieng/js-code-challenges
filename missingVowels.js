const absentVowel = (x) => {
  // define a vowels' dictionary
  const vowels = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };

  for (v of Object.keys(vowels)) {
    //find missing vowel
    if (!x.toLowerCase().split("").includes(v)) {
      // return the value of the missing vowel (which is a key)
      return vowels[v];
    }
  }
};

console.log(absentVowel("John Doe hs seven red pples under his bsket"));
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
