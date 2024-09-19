// for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) {
//         continue; // Пропускає решту коду для парних чисел
//     }
//     console.log(i); // Виведе тільки непарні числа
// }

// function checkValue(value) {
//     if (value < 0) {
//         throw new Error('Value must be non-negative');
//     }
//     console.log('Value is valid');
// }

// try {
//     checkValue(-1);
// } catch (e) {
//     console.error(e.message); // Виведе: 'Value must be non-negative'
// }
function* fibonacciGenerator() {
	// Створює генераторну функцію для обчислення чисел Фібоначчі
	let a = 0,
		b = 1;
	// Ініціалізує дві змінні a і b зі значеннями 0 та 1 відповідно
	while (true) {
		// Безкінечний цикл для постійного генерації нових значень
		yield a;
		// Повертає поточне значення a і призупиняє виконання функції до наступного виклику
		[a, b] = [b, a + b];
		// Оновлює значення a та b: a стає b, а b стає сумою a та b (обчислює наступне число Фібоначчі)
	}
}
// Створюємо генератор
const fib0 = fibonacciGenerator();
// Генеруємо масив з 100 ітерацій і збираємо результати
const results0 = Array.from({ length: 100 }, () => fib0.next().value);

console.log(results0);

// Створюємо генератор
const fib1 = fibonacciGenerator();
const results1 = [];

// Виконуємо 100 ітерацій і збираємо результати
for (let i = 0; i < 200; i++) {
	results1.push(fib1.next().value);
}

console.log(results1);
