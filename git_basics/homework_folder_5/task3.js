//for cycle "For"
let number = 3;
let f = 'For';
let w = 'While';
console.log(`\r\n --- Table for cycle "${f}" ---\r\n`);
for (let i = 1; i <= 10; i++) {
	console.log(`${number} * ${i} = ${number * i}`);
}

//for cycle "While"
console.log(`\r\n--- Table for cycle "${w}" ---\r\n`);
let numberTwo = 4;
let i = 0;
while (i < 10) {
	i++;
	console.log(`${numberTwo} * ${i} = ${numberTwo * i}`);
}
