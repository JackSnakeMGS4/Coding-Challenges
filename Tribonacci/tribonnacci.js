/*
	Well met with Fibonacci bigger brother, AKA Tribonacci.

	As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

	you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

	Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified

	Test Cases:

	Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
	Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
	Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
	Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
	Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
	Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
	Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
	Test.assertSimilar(tribonacci([1,1,1],1),[1])
	Test.assertSimilar(tribonacci([300,200,100],0),[])
*/

// My solution
function tribonacci(sig,n){
  let arr = sig;
  let b = 0;
  
  while(b < n){
    let value = sig[sig.length - 1] + sig[sig.length - 2] + sig[sig.length - 3];
    arr.push(value);
    b++;
  }
  arr.splice(n);
  
  return n === 0 ? [] : arr;
}

// Another solution from malyhinvi, sireaev, and a few others (codewars)
// Like the usage of const result = signature.slice(0,n)
function tribonacci(signature,n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
  }
  return result;
}