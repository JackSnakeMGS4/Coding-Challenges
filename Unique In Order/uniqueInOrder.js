/*
  Lines 5 - 35 are my solution which given my lack of experience is
  pretty bad. But I managed to solve it!

  The other two solutions are from others but comparing them to mine
  shows me where I can improve.
*/

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if(typeof iterable == "string"){
    //I got to hung up on strings that I forgot they have indexes too
    return iterateThrough(iterable.split(''));
  }
  else{
    return iterateThrough(iterable);
  }
}

function iterateThrough(input){
  let [a,b,uniqueOrder] = [0,1,[]];
  
  while(b < input.length){
    if(input[b] !== input[a]){
      uniqueOrder.push(input[a]);
      a = b;
      
      if(b == input.length - 1){
        uniqueOrder.push(input[b]);
      }
    }
    else if(b == input.length - 1 && input[b] == input[b]){
      uniqueOrder.push(input[b]);
    }

    b++;
  }
  
  return input.length == 1 ? input : uniqueOrder;
}

// MariusTheNorse (codewars)

//if filter() use isn't allowed then this is best
function uniqueInOrder(it) {
  var result = []
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== result[result.length - 1]) {
      result.push(it[i])
    }
  }
  
  return result
}

// sensone and others (codewars)

//if filter() is allowed then this best
//also implments ES6 ... operator which is pretty cool!
var uniqueInOrder=function(iterable){
  // a is the element parameter
  // i defaults to 0 since the index of the current element (a) is 0
  // keep a if it's not equal to value of iterable[i-1]
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//uniqueInOrder('AAAABBBCCDAABBB');