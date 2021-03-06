// Memoization allows you to create cache to retrieve results
// of previously run functions.
// In this case we are using memoization by creating a cache property
// for the function.
function square(x) {
	square.cache = square.cache || {};
	if (!square.cache[x]) {
		square.cache[x] = x * x;
	}
	return square.cache[x];
}

square(3);
square(3);
square(4);
square(5);

console.log(square.cache);

// Immediately Invoked Function Expression (IIFE)
// Allows you to prevent naming collisions
let value = 5;
(function () {
	console.log(value);
})();

// Recursive Functions
function loop5Times(i = 1) {
	if (i < 6) {
		console.log(i);
		i++;
		return loop5Times(i);
	}
}

loop5Times();

// Currying
function multiplier(x, y) {
	if (y === undefined) {
		return function (z) {
			return x * z;
		};
	} else {
		return x * y;
	}
}

const calcTax = multiplier(0.22);
console.log(calcTax(400));

// General Curry
function curry(func, ...oldArgs) {
	return function (...newArgs) {
		const allArgs = [...oldArgs, ...newArgs];
		return func(...allArgs);
	};
}

const divider = (x, y) => x / y;
console.log(divider(10, 5));

const reciprocal = curry(divider, 1);

console.log(reciprocal(2));
