
/*
	Replace all duplicate characters with ")" and non-duplicates with "(" while maintaining the same character order.

	Test.assertEquals(duplicateEncode("din"),"(((");
	Test.assertEquals(duplicateEncode("recede"),"()()()");
	Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
	Test.assertEquals(duplicateEncode("CodeWarrior"),"()(((())())");
	Test.assertEquals(duplicateEncode("Supralapsarian"),")()))()))))()(","should ignore case");
	Test.assertEquals(duplicateEncode("iiiiii"),"))))))","duplicate-only-string")
*/

// Solved it but it likely wouldn't do so great on a really huge word input
function duplicateEncode(word){
  let str = '';
  let w = word.toLowerCase();
  
  for(let i = 0; i < w.length; i++){
    w.indexOf(w[i]) !== w.lastIndexOf(w[i]) ? str += ')' : str += '(';
  }
  
  return str;
}

// most solutions ended up using what's essentially a nested loop pattern (mine included) since indexOf and lastIndexOf loop through the input
// Solution from hencethus, 3tlam, and others (codewars)
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// This is a far better solution in regards to time complexity
// Tested on JSBench.me
// So it's important to remember that less lines of code doesn't always mean better code
// Solution from Kitanotori (codewars)
function duplicateEncode(word) {
    const chars = {};
    const w = word.toLowerCase();
    for (const char of w) {
      if (chars[char]) {
        chars[char] += 1;
      } else {
        chars[char] = 1;
      }
    }
    const str = [];
    for (const char of w) {
      if (chars[char] > 1) {
        str.push(')');
      } else {
        str.push('(');
      }
    }
    return str.join('');
}