function squareDigits(num){
  //may the code be with you
  let answer = '';
  let number = num.toString();
  
  for(let i in number){
    answer += Number(number[i] **= 2);
  }
  
  return Number(answer);
}