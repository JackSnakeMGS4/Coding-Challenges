function LongestWord(sentence) { 

  // code goes here
  let words = sentence
              .replace(/[^a-zA-Z]/g,' ')
              .split(' ')
              .filter(item => item !== '');   
  
  let longestWord = '';
  
  //console.log(words);
  
  for(let i = 0; i < words.length; i++){
    if(words[i].length > longestWord.length){
      longestWord = words[i];
      //console.log(longestWord);
    }
  }

  return longestWord;
}
   
// keep this function call here 
console.log(LongestWord(readline()));