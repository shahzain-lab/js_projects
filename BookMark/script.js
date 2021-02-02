
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
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 1500)
    }

    static deleteBook(ele){
        if(ele.classList.contains('delete')){
            ele.parentElement.parentElement.remove()
        }
    }

    static clearFeild(){
        document.querySelector('#title').value = '';
         document.querySelector('#author').value = '';
         document.querySelector('#isbn').value = '';
    
    }
    
}

//handle storage

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books= localStorage.getItem('books')
        }
       return books
    }
}

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


    //validation feild
    if(title === "" || author === "" || isbn === "" ){
        UI.showAlert('please fill the requirement',"danger")
    }else{
   // initialize The Book     
    const book = new Book(title, author, isbn);

    //success submit
    UI.showAlert('Book Added' , 'success')
   
    ///ADD  TO UI
    UI.addBookToList(book)

    //clearFeild
    UI.clearFeild();
    }

})

//remove a book
document.querySelector('#book-list').addEventListener('click',(e) => {
    UI.deleteBook(e.target)
})