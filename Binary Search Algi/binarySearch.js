// This has only been tested with numbers

function binarySearch(sortedArray, value){
	let leftIndex = 0;
	let rightIndex = sortedArray.length - 1;

	let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);

	while(sortedArray[middleIndex] !== value && leftIndex <= rightIndex){
		if(sortedArray[middleIndex] < value){
			leftIndex = middleIndex + 1;
		}
		else if(sortedArray[middleIndex] > value){
			rightIndex = middleIndex - 1;
		}

		middleIndex = Math.ceil((leftIndex + rightIndex)/2);
	}

	return sortedArray[middleIndex] === value ? middleIndex : -1;
}