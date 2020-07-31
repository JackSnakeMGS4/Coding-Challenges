// My solution
function openOrSenior(data){
  return data.map(member => (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open');;
}

// From jhairau (codewars)
// Essentially the same as my solution but it makes use of destructuring where mine does not
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}