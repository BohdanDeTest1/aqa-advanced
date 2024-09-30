import { TodoService, UserService } from './task_4_services.js';

async function handleAllRequests() {
	try {
		const [todo, user] = await Promise.all([TodoService.fetchTodo(), UserService.fetchUser()]);
		console.log('Todo:', todo);
		console.log('User:', user);
	} catch (error) {
		console.error('There was a problem with one or more fetch operations:', error);
	}
}

handleAllRequests();

async function handleRaceRequests() {
	try {
		const result = await Promise.race([TodoService.fetchTodo(), UserService.fetchUser()]);
		console.log('First response received:', result);
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
}

handleRaceRequests();
