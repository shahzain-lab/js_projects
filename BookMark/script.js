//Book Class: Represent a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const StoreBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '23231'
            },
            {
                title: 'Book Two',
                author: 'John Doe',
                isbn: '23341'
            },
        ];
        const books = StoreBooks;

        books.forEach((book) => UI.addBookToList(book))
    }
    
}
//Store Class: Handle Storage

//Events: Display Books

//Events: Add a Book

//Events: Remove a Books