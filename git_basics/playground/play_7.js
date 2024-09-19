/* Імплементуйте функцію getNumbersAverage, яка приймає масив з числами. 
Задача: вирахувати та повернути середнє значення чисел у масиві. 
Очікуваний результат: Середнє значення - сума всіх чисел у масиві поділена на кількість цих чисел у масиві 
Примітка: Якщо середнє значення не є цілим числом - його треба округлити до найближчого цілого числа */

function calculateAverage(numbersList) {
	if (numbersList.length === 0) {
		// Якщо масив порожній, повертаємо NaN або інше значення за замовчуванням
		return NaN;
	}

	// Обчислюємо суму всіх чисел у масиві
	const sum = numbersList.reduce((acc, current) => acc + current, 0);

	// Обчислюємо середнє значення
	const average = sum / numbersList.length;

	// Округлюємо до найближчого цілого числа
	return Math.round(average);
}

// Приклад використання
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const average = calculateAverage(numbersList);
console.log(average); // Очікуваний результат: 14
