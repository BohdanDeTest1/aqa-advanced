export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

  
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        } else {
            console.error('Name must be a string.');
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === 'string') {
            this._author = value;
        } else {
            console.error('Author must be a string.');
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            console.error('Year must be a positive number.');
        }
    }

    printInfo() {
        console.log(`Book: ${this._name} Author: ${this._author} Year: ${this._year}`);
    }

    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('Invalid input. Please provide an array of books.');
        }
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}

const book1 = new Book('firstBook', 'James', 1990);
const book2 = new Book('secondBook', 'Alice', 1985);
const book3 = new Book('thirdBook', 'Bob', 2000);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const oldestBook = Book.getOldestBook([book1, book2, book3]);
console.log('Oldest Book:');
oldestBook.printInfo();