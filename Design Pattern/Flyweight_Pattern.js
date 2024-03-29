//refers :- https://www.patterns.dev/vanilla/flyweight-pattern
const books = new Map();
const bookList = [];
const isbnNumbers = new Set();


function Book(title, author, isbn) {
    this.title =title;
    this.author = author;
    this.isbn = isbn;
}

const createBook = (title, author, isbn) => {
    const isExistingBook = books.has(isbn);
    if(isExistingBook){
        return books.get(isbn);
    }

    const book = Book(title, author, isbn);
    isbnNumbers.add(isbn);
    books.set(isbn,book)

    return book;
}

const addBook = (title, author, isbn, availability, sales) => {
    const book = {
        ...createBook(title, author, isbn),
        availability, sales, isbn
    }

    bookList.push(book);
    return book;
}

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", isbnNumbers.size);



