// Given a quote from Jaden Smith, who is known to capitalize the first letter of every word in them, create a function that takes an input string (lower-cased) an convert it into Jaden Case.
String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

// A neater solution with RegExp from cave.on and others (codewars)
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, m => m.toUpperCase());
};