// Генераторна функція, яка генерує послідовність чисел
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Використання генератора
const iterator = simpleGenerator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); 