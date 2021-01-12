// Variant 1

function confirmEnding(str, target) {
	return str.substr(-target.length) === target;

}

console.log(confirmEnding("Bastian", "n"));

// =========================

// Variant 2


function confirmEnding(str, target) {
	return str.slice(str.length - target.length, str.length) === target;

}

console.log(confirmEnding("Bastian", "n"));