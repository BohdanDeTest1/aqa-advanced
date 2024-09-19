/**
 * Фільтрує масив, залишаючи лише числа більші за minValue.
 * @param {number} minValue - Мінімальне значення для фільтрації.
 * @param {number[]} numbersList - Масив чисел, який потрібно відфільтрувати.
 * @returns {number[]} Новий масив, що містить лише числа більші за minValue.
 */
function filterGreaterThanValue(minValue, numbersList) {
	// Використовуємо метод filter для відфільтрування масиву
	return numbersList.filter((number) => number > minValue);
}

// Приклад використання
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const minValue = 10;

const result = filterGreaterThanValue(minValue, numbersList);
console.log(result); // [14, 43, 34]
