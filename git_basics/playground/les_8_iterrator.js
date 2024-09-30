// Створюємо ітератор для масиву чисел
function createNumberIterator(numbers) {
	let index = 0;

	return {
		next: function () {
			if (index < numbers.length) {
				return { value: numbers[index++], done: false };
			} else {
				return { value: undefined, done: true };
			}
		},
	};
}

// Використання ітератора
const numbers = [1, 2, 3, 4, 5];
const iterator = createNumberIterator(numbers);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
