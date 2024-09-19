function muttureness(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}
let age1 = 15;
let age2 = 25;
console.log(`Test age is ${age1}. Does they matture: ${muttureness(age1)}`);
console.log(`Test age is ${age2}. Does they matture: ${muttureness(age2)}`);
