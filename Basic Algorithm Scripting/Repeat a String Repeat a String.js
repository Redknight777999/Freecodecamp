function repeatStringNumTimes(str, num) {
	if (num <= 0) return '';

	let finalString = '';

	for (let i = 0; i < num; i++) {
		finalString += str;
	}

	return finalString;
}

console.log(repeatStringNumTimes("abc", 3));