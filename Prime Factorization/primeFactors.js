/*
  Given a positive number n > 1 find the prime factor decomposition of n. 
  The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

  Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
  Test.assertEquals(primeFactors(7919),"(7919)")
  Test.assertEquals(primeFactors(17*17*93*677),"(3)(17**2)(31)(677)")
  Test.assertEquals(primeFactors(933555431), "(7537)(123863)")
  Test.assertEquals(primeFactors(342217392), "(2**4)(3)(11)(43)(15073)")
  Test.assertEquals(primeFactors(35791357), "(7)(5113051)")
  Test.assertEquals(primeFactors(782611830), "(2)(3**2)(5)(7**2)(11)(13)(17)(73)")
  Test.assertEquals(primeFactors(775878912), "(2**8)(3**4)(17)(31)(71)")
*/

function primeFactors(n){
  if(n <= 1) return undefined;
  
  let integer = n;
  let primeFactors = {};
  let divisor = 2;
  
  while(integer >= 2){
    // check if the current divisor should be included in the prime factorization 
    // I.E. 50%2 = 0 meaning 2 is one of 50's prime factors
    if(integer % divisor == 0){
      // If it is, then store it into an object that will hold all of n's prime factors and their occurences
      primeFactors[divisor] = (primeFactors[divisor] || 0) + 1;
      
      // Now we want to find the prime factors of the second factor
      // I.E. 50/2 = 25 so our current factors are 2 x 25 but 25 can be factorized even further
      integer = integer / divisor;
    }
    else{
      // If the current integer cannot be factorized into whole numbers then we need a different prime number
      // I.E. 25/2 = 12.5 but 12.5 is not a whole number 
      // So we move on to 25/3 = 8 R1 (remainders disqualify the divisor from being a prime factorwhich is not correct either
      // Finally, we move on to 25/5 = 5 which fits the criteria for prime factorization
      divisor++;
    }
  }
  
  let str = '';
  // Loop through primeFactors and convert the property names and values into the expected string format
  for(const prime in primeFactors){
    primeFactors[prime] === 1 ? str += `(${prime})` : str += `(${prime}**${primeFactors[prime]})`;
  }
  
  return str;
}

// Another solution using nested loops
// According JSBench.me this runs much faster than the above so it's time to dig in and study it
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}