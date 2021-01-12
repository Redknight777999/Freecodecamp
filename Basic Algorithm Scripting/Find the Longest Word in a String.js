//  VARIANT 1 with WORD to return


function findLongestWordLength(str) {
	let max = -Infinity;
	let maxWord = '';

	const arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max) {
			maxWord = arr[i];
			max = arr[i].length
		}

	}
	return maxWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


//  VARIANT 1 with word number in array to return

function findLongestWordLength(str) {
	let max = -Infinity;
	let maxWord = '';

	const arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max) {
			max = arr[i].length
		}

	}
	return max;
}




console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));