function createMult(x) {
	return function (y) {
		return x * y;
	};
}
let double = createMult(3);
console.log(double(3));
