console.log(`
+--------------------------------------+
|                                      |
|             Week 2 Notes             |
|    (view notes.js in sources tab)    |
|                                      |
+--------------------------------------+
`);

// Implement a Filter function
function filterArray(array, callback) {
	const filteredArray = [];
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			filteredArray.push(array[i]);
		}
	}
	return filteredArray;
}

console.log(filterArray([3, 30, 4, 12, 4, 3, 10, 92], (item) => item < 10));

// Implement a Map function
function mapArray(array, callback) {
	const mappedArray = [];
	for (let i = 0; i < array.length; i++) {
		mappedArray.push(callback(array[i]));
	}
	return mappedArray;
}

console.log(mapArray([1, 2, 3, 4, 5, 6], (item) => item * item));

// Implement a Reduce function
function reduceArray(array, callback, start = null) {
	// if start is null then accumulator will be null
	// otherwise accumulator will be the first element of the array
	let accumulator = array[0];
	let startIndex = 1;
	if (start !== null) {
		accumulator = start;
		startIndex = 0;
	}
	for (let i = startIndex; i < array.length; i++) {
		accumulator = callback(accumulator, array[i]);
	}
	return accumulator;
}

console.log(reduceArray(["hello", "darkness", "my", "old", "friend"], (a, b) => a + " " + b));
