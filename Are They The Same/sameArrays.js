/*
  Test.describe("Basic tests",function(){
  a1 = [121, 144, 19, 161, 19, 144, 19, 11]
  a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
  Test.assertEquals(comp(a1, a2), true)
  a1 = [121, 144, 19, 161, 19, 144, 19, 11]
  a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
  Test.assertEquals(comp(a1, a2), false)
  a1 = [121, 144, 19, 161, 19, 144, 19, 11]
  a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
  Test.assertEquals(comp(a1, a2), false)
  a1 = [2,1,3]
  a2 = [18,1,2]
  Test.assertEquals(comp(a1, a2), false)
  a1 = []
  a2 = []
  Test.assertEquals(comp(a1, a2), true)
  a1 = []
  a2 = null
  Test.assertEquals(comp(a1, a2), false)
  a1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008]
  a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
  Test.assertEquals(comp(a1, a2), false)
  a1 = [10000000, 100000000]
  a2 = [10000000 * 10000000, 100000000 * 100000000]
  Test.assertEquals(comp(a1, a2), true)
  a1 = [10000001, 100000000]
  a2 = [10000000 * 10000000, 100000000 * 100000000]
  Test.assertEquals(comp(a1, a2), false)
  a1 = [2, 2, 3]
  a2 = [4, 9, 9]
  Test.assertEquals(comp(a1, a2), false)
  a1 = [2, 2, 3]
  a2 = [4, 4, 9]
  Test.assertEquals(comp(a1, a2), true)
  a1 = [4, 4]
  a2 = [1, 31]
  Test.assertEquals(comp(a1, a2), false)
  a1 = [3, 4]
  a2 = [0, 25]
  Test.assertEquals(comp(a1, a2), false)
  a1 = null
  a2 = []
  Test.assertEquals(comp(a1, a2), false)
  })
*/

// My final solution (I know... it's pretty bad)
function comp(array1, array2){
  if((Array.isArray(array1) && array1.length == 0) && (Array.isArray(array2) && array2.length == 0)) return true;
  
  if(!Array.isArray(array1) || !Array.isArray(array2) || array1.length != array2.length) return false;
  
  let emptyArray2 = array2.filter(e => {
    let val = Math.sqrt(e);
    
    if(array1.includes(val)){
      array1.splice(array1.indexOf(val),1);
      return false;
    }
    else return true;
  });
    
  return emptyArray2.length == 0 ? true : false;
}

// Another solution from HTF (codewars)
// [2,2,3] [4,9,9]
function comp(array1, array2){
  // Exit early if we don't have one of the arrays
  if (!array1 || !array2) return false;
  
  // Loop over values in first array
  for (var value of array1) {
      // If the value squared is in the second array remove it
      array2.indexOf(value * value) > -1 && array2.splice(array2.indexOf(value * value), 1);
  }
  
  // If we are left with no values in the second array it means we matched everything so return true
  return array2.length == 0;
}

//Another solution from omiceron and others (codewars)
function comp(a, b) {
  // Note to self: In the case of [2,2,3] and [4,9,9]
  /*
    a.map(x => x*x) returns new array of [4,4,9]
    .sort orders it from least to greatest
    .join turns it into a string by joining all values with a seperator comma: [4,4,9] == "4,4,9"

    Then that strings is compared to the output string of b.join ("4,9,9")
    return true if both strings are the same or false if they are not
  */

  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}