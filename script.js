let library = [
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        numOfPages: 336,
        haveRead: 1
    },
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Sorcerer's Stone",
        numOfPages: 309,
        haveRead: 0
    },
    {
        author: "Silvia Moreno-Garcia",
        title: "Mexican Gothic",
        numOfPages: 304,
        haveRead: 1
    }
];

function Book(author, title, numOfPages, haveRead) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
}

function addBookToLibrary(){
    let author = document.getElementById("new-book-title").value;
    let title = document.getElementById("new-book-author").value;
    let numOfPages = document.getElementById("new-book-pagenum").value;
    let haveRead = document.getElementById("new-book-read").checked;
    let newBook = new Book(author, title,numOfPages,haveRead);
    console.log("Adding book to library")
    library.push(newBook);
    showAllBooks();
}

function showAllBooks() {
    const bookSection = document.createElement('div');
    bookSection.setAttribute('class','books');
    library.forEach(
        book => {
            let bookTitle = book["title"];
            let bookAuthor = book["author"];
            let bookPages = book["numOfPages"];
            let bookRead = book["haveRead"];

            const oneBookSection = document.createElement('div');
            oneBookSection.setAttribute('class','bookInfo');

            const title = document.createElement("div");
            title.setAttribute('class','title');
            title.textContent = bookTitle;
            oneBookSection.appendChild(title);
            const author = document.createElement("div");
            author.setAttribute('class','author');
            author.textContent = "By "+ bookAuthor; 
            oneBookSection.appendChild(author);
            const pages = document.createElement("div");
            pages.setAttribute('class','pages');
            pages.textContent = bookPages + " pages";
            oneBookSection.appendChild(pages);
            const read = document.createElement("div");
            read.setAttribute('class','read');
            if (bookRead == 1){
                read.textContent = "Read";
            }
            else{
                read.textContent = "Want to Read";
            }
            oneBookSection.appendChild(read);

            bookSection.appendChild(oneBookSection);
        }
    )
    document.body.appendChild(bookSection);
}

function openNewBookForm(){
    document.getElementById("newBookForm").style.display = "block";
    console.log("new book button pressed")
}

function closeNewBookForm(){
    document.getElementById("newBookForm").style.display = "none";
}


showAllBooks();