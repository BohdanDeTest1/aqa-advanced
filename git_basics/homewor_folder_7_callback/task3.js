function divide(numerator, denominator) {
	if (denominator === 0) {
		throw new Error('ділення на нуль не допустиме');
	} else if (isNaN(numerator) || isNaN(denominator)) {
		throw new Error('один або всі аргументи не є числами');
	} else if (numerator === null || denominator === null) {
		throw new Error('відсутній один або всі аргументи');
	}
	return numerator / denominator;
}

try {
	console.log(divide(10, 5));
} catch (error) {
	console.log('помилка: ', error.message);
}

try {
	console.log(divide(5, 0));
} catch (error) {
	console.log('помилка: ', error.message);
}

try {
	console.log(divide('v', 10));
} catch (error) {
	console.log('помилка: ', error.message);
}

try {
	console.log(divide('v', NaN));
} catch (error) {
	console.log('помилка: ', error.message);
}

try {
	console.log(divide(5, 'w'));
} catch (error) {
	console.log('помилка: ', error.message);
}

try {
	console.log(divide(null, null));
} catch (error) {
	console.log('помилка: ', error.message);
} finally {
	console.log('Робота завершена');
}
