/*
	TEST CASES:
	1: isAnagram('iceman',cinema); true
	2: isAnagram('cat', 'rat'); false
	3: isAnagram('hello', 'lelho'); true
	4: isAnagram('iCu!', 'uci!'); true
	
	Questions to ask before writing code:

	Is the the method case-sensitive?
	What if the user inputs more than two strings?
	Should we count number play as a valid entry? 
	I.E. hello is the same 07734 depending on the interface 
	and calculator font
	How should we handle special characters?
	What about other invalid inputs?
	Should we assume English is the only acceptable language?
*/

function isAnagram(string1,string2)
{
	if(!(string1.length == string2.length)) return false;

	// check for special characters and ignore them
	// create an object for each input that will track
	// inputs characters and their # of occurences
	let frqCount1 = {};
	let frqCount2 = {};

	[...string1].forEach(char => {
		let c = char.toLowerCase();

		frqCount1[c] = (frqCount1[c] || 0) + 1;
	});
	
	console.log(frqCount1);

	[...string2].forEach(char => {
		let c = char.toLowerCase();

		frqCount2[c] = (frqCount2[c] || 0) + 1;
	});
	
	console.log(frqCount2);

	for(let key in frqCount1)
	{
		if(frqCount2.key !== frqCount1.key) return false;

		if(frqCount2[key] !== frqCount1[key]) return false;
	}

	return true;
}