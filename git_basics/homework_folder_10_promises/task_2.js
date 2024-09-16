/**
 * В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних
 */

function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('There was a problem with one or more fetch operations:', error);
    });


Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('First response received:', result);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });