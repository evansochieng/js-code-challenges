// Respinsive Drinking
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

function hydrate(s) {
  // extract numbers and sum
  nums = s.match(/\d+/g).reduce((a, b) => parseInt(a) + parseInt(b), 0);

  // return statement
  return nums > 1 ? `${nums} glasses of water` : `${nums} glass of water`;
}


// Test the function
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));