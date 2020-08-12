/*
  Write a function, persistence, that takes in a positive parameter num 
  and returns its multiplicative persistence, which is the number of 
  times you must multiply the digits in num until you reach a single digit.

  Solved it using recursion. I wanted to solve it using a single loop but
  I decided to go with recursion since it was the first solution I
  thought of.


*/

function persistence(num) {
  let counter = 0;
  function helperMethod(num){
    let arr = [...num + ''];
    
    if(arr.length <= 1) return counter;
    else{
      counter++;
      return helperMethod(arr.reduce((a, b) => a * b));
    }
  }
  
  return helperMethod(num);
}


// Solved with a while loop by Strato, Nikking, and others (codewars)
// A possible con is the mutation on the parameter input (depends on who you ask)
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}