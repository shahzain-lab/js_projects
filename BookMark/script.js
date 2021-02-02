//Book Class: Represent a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'John Doe',
                isbn: '12312'
            },
            {
                title: 'Book two',
                author: 'John Doe',
                isbn: '12323'
            },
        ];
          const books = StoredBooks;

          books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row)
    }
}

//Store Class: Handle Storage

//Events: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Events: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    
    ///preventDefault
    e.preventDefault()

    //Get values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    
    ///initialied
    const book = new Book( title, author, isbn);
    console.log(book)
   
   UI.addBookToList(book)
})

//Events: Remove a Books 