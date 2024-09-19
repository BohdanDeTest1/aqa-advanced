function factorial(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}
let number = 4;
console.log(factorial(number));
