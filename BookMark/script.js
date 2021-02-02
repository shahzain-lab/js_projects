
//class Book: Represent a Book
class Book{
    constructor(title, author , isbn){
        this.title = title,
        this.author =author,
        this.isbn = isbn
    }
}


class UI{
    static displayData(){
        const storeData = [
            {
                title: 'Think and gtow rich',
                author: 'Napoleon Hill',
                isbn: 322323
            },
            {
                title: 'Harry Potter',
                author: 'J.K Rowling',
                isbn: 372648
            },
        ]
        const books = storeData;
        books.forEach((book) => UI.addBookToList(book));

    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a class="btn btn-danger btn-sm delete"  href="#">X</a></td>
        `;
        list.appendChild(row);
    }
    static clearFeild(){
        document.querySelector('#title').value = '';
         document.querySelector('#author').value = '';
         document.querySelector('#isbn').value = '';
    
    }
    
}

//handle storage

///Display UI
document.addEventListener('DOMContentLoaded', UI.displayData)

//add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
    
    //avoid auto-submit
    e.preventDefault()

    //Get the values 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn)
   
    ///initialize
    UI.addBookToList(book)

    //clearFeild
    UI.clearFeild()
})

//remove a book