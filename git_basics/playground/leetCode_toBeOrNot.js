// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val1) {
	return {
		toBe(val2) {
			if (val1 === val2) {
				return true;
			} else {
				throw new Error('Not Equal');
			}
		},
		notToBe(val2) {
			if (val1 !== val2) {
				return true;
			} else {
				throw new Error('Equal');
			}
		},
	};
};
try {
	expect(5).toBe(5); // Passes: values are equal
	expect(5).notToBe(3); // Passes: values are not equal
	expect(5).toBe(3); // Throws an error: "Not Equal"
} catch (e) {
	console.error(e.message); // Logs error message
}

try {
	expect(5).notToBe(5); // Throws an error: "Equal"
} catch (e) {
	console.error(e.message); // Logs error message
}
