//logic for the newBook btn

const newBookBtn = document.querySelector("#newBook");

newBookBtn.addEventListener("click", function () {
const formDisplay = document.querySelector("#mainForm");
formDisplay.style.display = "block";
});

newBookBtn.addEventListener("dblclick", function () {
const formDisplay = document.querySelector("#mainForm");
formDisplay.style.display = "none";
});

//Create a library array to store the book objects
const myLibrary = [];

//Constructor function for daBook

class daBook {
    constructor (title, autor, pages, read) {
    this.autor = autor;
    this.title = title;
    this.pages = pages;
    this.read  = read;
    }      

}

//looping function

function displayInfo() {
    const libraryBook = document.querySelector("#bookCards");
    libraryBook.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book, i) => {
        // Create the main book card element
        let bookElement = document.createElement("div");
        bookElement.classList.add("book-card");

        // Create the card header
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        let autorElement = document.createElement("h3");
        autorElement.classList.add("autor");
        autorElement.textContent = book.autor;

        let titleElement = document.createElement("h5");
        titleElement.classList.add("title");
        titleElement.textContent = `made by ${book.title}`;

        cardHeader.appendChild(autorElement);
        cardHeader.appendChild(titleElement);

        // Create the card body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let pagesElement = document.createElement("p");
        pagesElement.textContent = `${book.pages} pages`;

        let readStatusElement = document.createElement("p");
        readStatusElement.classList.add("read-status");
        readStatusElement.textContent = book.read ? "Read" : "Not Read Yet";

        // Create the remove button
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeBook(i));

        // Create the toggle read status button
        let toggleReadBtn = document.createElement("button");
        toggleReadBtn.classList.add("toggle-read-btn");
        toggleReadBtn.textContent = "Toggle Read";
        toggleReadBtn.addEventListener("click", () => toggleRead(i));

        cardBody.appendChild(pagesElement);
        cardBody.appendChild(readStatusElement);
        cardBody.appendChild(removeBtn);
        cardBody.appendChild(toggleReadBtn);

        // Append header and body to the book element
        bookElement.appendChild(cardHeader);
        bookElement.appendChild(cardBody);

        // Append the book element to the library container
        libraryBook.appendChild(bookElement);
    });
}


//Create a function to add a Book to the Library
function addBookToLibrary () {
let autor = document.querySelector("#bookAutor").value;
let title = document.querySelector("#bookTitle").value;
let pages = document.querySelector("#bookPages").value;
let read = document.querySelector("#Read").checked;
let addBook = new daBook(autor, title, pages, read);
myLibrary.push(addBook);
displayInfo();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayInfo();
}

function toggleRead(index){
    myLibrary[index].read = !myLibrary[index].read;
    displayInfo();
}

document.querySelector("#mainForm").addEventListener("submit", function (event){
event.preventDefault();
addBookToLibrary();
});


