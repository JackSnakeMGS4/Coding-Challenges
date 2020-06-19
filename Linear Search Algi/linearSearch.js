function LinearSearch(array, value)
{
	for(let i = 0; i < array.length; i++)
	{
		console.log(array[i]);

		if(array[i] === value)
		{
			return i;
		}
	}

	return -1;
}