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
    static deleteBook(ele){
        if(ele.classList.contains('delete')){
            ele.parentElement.parentElement.remove()
        }
    }

    static showAlert(message){
        const div = document.createElement('div');
        div.className='alert alert-danger';
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form)
    }

    static clearFeild(){
         document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
         document.querySelector('#isbn').value = '';
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
   
   ///validate
   if(title === '' || author === '' || isbn === ''){
    UI.showAlert('Plase fill the input feild') 
   }else{

    ///initialied
    const book = new Book( title, author, isbn);
    console.log(book)
    
    //add to UI
   UI.addBookToList(book)

    
   ///clear feild
   UI.clearFeild()

       
   }
})

//Events: Remove a Books 

document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})