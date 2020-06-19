function naiveStringSearch(string, stringPattern){
	let index = 0;// pertains to the string pattern input
	let patternOccurences = 0;

	for(let i = 0; i < string.length; i++){
		if(string[i] !== stringPattern[index]){
			index = 0;
			continue;
		}

		// console.log(string[i],stringPattern[index]);

		if(index >= stringPattern.length - 1){
			patternOccurences++;
			index = 0;
		}
		else{
			index++;
		}
	}

	return patternOccurences >= 1 ? patternOccurences : 0;
}

// findOccurencesOfPattern('wozomgzomg','omg'); Expected Result: 2