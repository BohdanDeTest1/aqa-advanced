import { Book } from './Book.js';

export class EBook extends Book {
	constructor(name, author, year, format) {
		super(name, author, year);
		this._format = format;
	}

	get format() {
		return this._format;
	}

	set format(value) {
		if (typeof value === 'string') {
			this._format = value;
		} else {
			console.error('Format must be a string.');
		}
	}

	printInfo() {
		console.log(`Book: ${this.name} Author: ${this.author} Year: ${this.year} Format: ${this.format}`);
	}

	static createEBookFromBook(book, format) {
		if (!(book instanceof Book)) {
			throw new Error('Invalid input. The first argument must be an instance of Book.');
		}
		return new EBook(book.name, book.author, book.year, format);
	}
}

const ebook = new EBook('firstEBook', 'James', 1990, 'PDF');
ebook.printInfo();

const bookInstance = new Book('sampleBook', 'John', 2010);
const createdEBook = EBook.createEBookFromBook(bookInstance, 'EPUB');
createdEBook.printInfo();
