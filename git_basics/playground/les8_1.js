let sum = function (a, b) {
	return a + b;
};
console.log(sum(1, 2));

let numbers = [1, 2, 3, 4];
let sq = numbers.map(function (number) {
	return number * number;
});

console.log(sq);

// document.getElementById("myButton").addEventListener("click", function (){
// alert("Button was clicked");
// })

let multiply = (a, b) => a * b;
console.log(multiply(2, 4));

(function () {
	console.log('This function  is called immediately');
})();

(function () {
	console.log('This function  is called immediately too');
})();
