/**Завдання 1
Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль 
переданий текст через вказану кількість мілісекунд */

function printTextAfterDelay(text, delay) {
    if (typeof text !== 'string') {
        console.error('First argument must be a string.');
        return;
    }

    if (typeof delay !== 'number' || delay < 0) {
        console.error('Second argument must be a non-negative number.');
        return;
    }

    setTimeout(() => {
        console.log(text);
    }, delay);
}
printTextAfterDelay(2000,'Hello, World!'); 
printTextAfterDelay('Hello, World!','Hello, World!')
printTextAfterDelay('Hello, World!', 2000); 
printTextAfterDelay('This will appear after 1 second', 1000);