function addBinary(a,b){
	// toString() defaults to a base of 10 for conversion
	// but we can change that any other base between 2 and 36
	return (a + b).toString(2);
}