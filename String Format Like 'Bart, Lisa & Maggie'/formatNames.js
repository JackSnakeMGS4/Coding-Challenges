/*
	Given: an array containing hashes of names
	Return: a string formatted as a list of names separated by commas 
	except for the last two names, which should be separated by an 
	ampersand.

	Test Cases:
	[{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},
	{name: 'Homer'},{name: 'Marge'}] 
	
	Expected Output: 'Bart, Lisa, Maggie, Homer & Marge'

	[{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]
	
	Expected Output: 'Bart, Lisa & Maggie'

	[{name: 'Bart'},{name: 'Lisa'}] 
	
	Expected Output: 'Bart & Lisa'

	[{name: 'Bart'}]
	
	Expected Output: 'Bart'

	[] 
	
	Expected Output: ''
*/

// My solution
function list(names){
  return names.length === 0 ? '' : names.map((obj, index) =>{
      return index === names.length - 2 ? `${obj.name} & ` : 
             index === names.length - 1 ? `${obj.name}` :
             `${obj.name}, `;
      }).join('');
}

// Solution using .reduce() by clementoriol, DataCrash, 
// and others (codewars)

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

// Following is the same solution as above but 
// with some minor changes for a cleaner solution
function list(names){
  return names.reduce(function(prev, current, index, array){
  	return index === 0 ? current.name :
  		   index === array.length - 1 ? `${prev} & ${current.name}` :
  		   `${prev}, ${current.name}`;
  }, '');
}