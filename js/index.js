class Book{
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }
    render(){
        let bookWrapper = document.createElement('body');
            bookWrapper.style.border = "5px solid black";
            bookWrapper.style.backgroundColor = "maroon";
            bookWrapper.style.opacity = ".7";
        let bookTitle = document.createElement('h1');
        bookTitle.textContent = `${this.author} ${this.language} ${this.subject} ${this.title}`;
            bookTitle.style.border = "2px solid black";
            bookTitle.style.fontWeight = "normal";
            bookTitle.style.backgroundColor = "red";
        
        let bookListOfTitle = document.createElement('span');

        for(const title of this.title){
            let titleItem = document.createElement('span');
            titleItem.style.fontSize = '35px';
            titleItem.style.fontWeight = "bolder";
            titleItem.textContent = title;
            bookListOfTitle.append(titleItem);
        }
    bookWrapper.append(bookTitle, bookListOfTitle);
    //console.log('this is bookWrapper', personWrapper)
    return bookWrapper
    }
}
//needs to keep track of all properties found in the data such as the title and author
//render needs to build and return needed elements

class Bookshelf{
    constructor(){
        this.arrayOfBook = [];
    }
    addBook(aBook){
        this.arrayOfBook.push(aBook);
    }
    //rendering objects to DOM
    render(){
        let bookShelf = document.querySelector('#bookShelf');
        let listOfBookWrapper = document.createElement('ul');
        //console.log('this is arrayofBook', this.arrayOfBook)
        for(const book of this.arrayOfBook){
            listOfBookWrapper.append(book.render());
          }
        //console.log('this is listOfBookWrapper', listOfBookWrapper)
    bookShelf.append(listOfBookWrapper);
    }
    seed(arrayOfInfo){
        for(const book of arrayOfInfo){
            let shiny = new Book(book.author, book.language, book.subject, book.title);
            bookshelf.addBook(shiny)
        }
    }
}

//let hungerGames = new Book('blah', 'cool', 'sure', 'works');

let bookshelf = new Bookshelf();

bookshelf.seed(bookData);

bookshelf.render();
//maintains an array of Books
//has the ability to ad books
//this should have a blueprint of Bookshelf and fill it with Books by processing the data from other js (using bookData)
