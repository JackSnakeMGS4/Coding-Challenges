/* My solution involving recursion. Kudos to me for solving it but
   it's horrible. Plus, I felt there was an eaiser way of solving this
   using recursion at all and in a much cleaner manner.

   Test Cases:
   a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
Test.assertSimilar(dirReduc(a), ["WEST"])
  b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
Test.assertSimilar(dirReduc(b), [])
  c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
Test.assertSimilar(dirReduc(c), ["NORTH"])
  u = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
Test.assertSimilar(dirReduc(u), ["EAST", "NORTH"])
  v = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
Test.assertSimilar(dirReduc(v), ["NORTH", "EAST"])
  u=["NORTH", "WEST", "SOUTH", "EAST"]
Test.assertSimilar(dirReduc(u), ["NORTH", "WEST", "SOUTH", "EAST"])
*/

function dirReduc(arr){
  let reduced = false;
  
  function helperMethod(data,a,b,isReduced){
    if(isReduced) return data;
    else{
      let matchFound = false;
      
      while(!matchFound){
        if((data[a] == 'NORTH' && data[b] == 'SOUTH') || (data[a] == 'SOUTH' && data[b] == 'NORTH')){
          matchFound = true;
        }
        else if((data[a] == 'EAST' && data[b] == 'WEST') || (data[a] == 'WEST' && data[b] == 'EAST')){
          matchFound = true;
        }
        else{
          a+=1; b+=1;
          
          if(b >= data.length){ isReduced = true; break;}
        }
      }
        
      if(matchFound){
        data.splice(a,2);
      }
      
      return helperMethod(data,0,1,isReduced);
    }
  }
  
  return helperMethod(arr,0,1,reduced);
}

// Solution from Unnamed, Meow, and others (codewars)
// Nice solution with object literal

function dirReduc(plan) {
  // object literal with opposite key/value pairings
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};

  /*  in .reduce() the first argument (dirs) is the accumalator
      which is this case is an empty array. 
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce (specifically the Counting Instances of values example)

      dir is the current element being processed.
  */
  return plan.reduce(function(dirs, dir){

      /*  Take this for example: ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
        
          the initial values for dirs, dir, and opposite[dir] are:
          dir: "NORTH"
          dirs: []
          dirs[dirs.length - 1]: -1
          opposite[dir]: "SOUTH" (remember the opposite key value pairings) 

          Knowing that then the first iteration asks if -1 === "SOUTH".
          That evaluates to false so we push dir into dirs.

          Second iteration values:
          dir: "SOUTH"
          dirs: ["NORTH"]
          dirs[dirs.length - 1]: "NORTH"
          opposite[dir]: "NORTH"

          Now we ask if "NORTH" === "NORTH" which is true so we remove that elements from dirs. The third iteration tests plan[2] which results in dirs being this: ["SOUTH"]
      */

      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

/* Solution using .join() from Balkoth and others (codewars)
   while solving the kata on my own I also felt a possibility of
   using .join() but couldn't figure it how it would work so this
   is a good solution to study
*/

function dirReduc(arr) {
  /* join turns arr into a string of the concatenated cardinal dirs.
     pattern is the declaration of a RegExp which the patterns we
     will search for the str variable. the pipe sign (|) seperates
     indicates that any of these patterns are a match
  */
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;

  // .test() returns true while str has any matches to pattern RegExp
  // then we basically remove that match from str 
  while (pattern.test(str)) str = str.replace(pattern,'');

  // .match() works similar to .test() but instead of returning a boolean
  // it returns an array containing all matches (one element per match) to the RegExp paramater
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}