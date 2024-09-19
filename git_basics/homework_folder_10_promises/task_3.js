/**
 Виконайте завдання 2 але використовуючи конструкцію async/await 
 для функції що виконує запити
 */

async function fetchTodo() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

async function fetchUser() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

async function handleRequests() {
	try {
		const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
		console.log('Todo:', todo);
		console.log('User:', user);
	} catch (error) {
		console.error('There was a problem with one or more fetch operations:', error);
	}
}

handleRequests();

async function handleRace() {
	try {
		const result = await Promise.race([fetchTodo(), fetchUser()]);
		console.log('First response received:', result);
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

handleRace();
