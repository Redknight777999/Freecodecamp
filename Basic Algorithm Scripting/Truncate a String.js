function truncateString(str, num) {

	let finalStr = '';

	if (str.length > num) {
		finalStr = str.slice(0, num) + '...'
	} else {
		finalStr = str
	}




	return finalStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);