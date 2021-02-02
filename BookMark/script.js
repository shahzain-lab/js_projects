
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
    
}

//handle storage

///Display UI
document.addEventListener('DOMContentLoaded', UI.displayData)

//add a book