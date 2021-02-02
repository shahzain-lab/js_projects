
//class Book: Represent a Book

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
        books.forEach((book) => ToTheList(book));

        const list = document.createElement('tr');
        
       const row =  document.querySelector('#book-list');
       row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td href="#" className="btn btn-danger">X</td>
       `;
       list.appendChild(row)
    };
    
}

///Display UI
addEventListener('DOMContentLoaded', displayData)