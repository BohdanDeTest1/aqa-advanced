/**Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі */

const users = [
	{ name: 'Джон', email: 'john@example.com', age: 28 },
	{ name: 'Емілі', email: 'emily@example.com', age: 35 },
	{ name: 'Майкл', email: 'michael@example.com', age: 22 },
];

for (const user of users) {
	const { name, email, age } = user;
	console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
