// Selectors for elements
const newBookBtn = document.querySelector("#newBook");
const formDisplay = document.querySelector("#mainForm");
const libraryBook = document.querySelector("#bookCards");

// Toggle form visibility
newBookBtn.addEventListener("click", () => {
  formDisplay.style.display = formDisplay.style.display === "block" ? "none" : "block";
});

// Create library array to store books
const myLibrary = [];

// Constructor function for daBook
class daBook {
  constructor(title, autor, pages, read) {
    this.autor = autor;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

// Function to display books in the library
function displayInfo() {
  libraryBook.innerHTML = ''; // Clear previous content

  myLibrary.forEach((book, i) => {
    // Create book card structure
    let bookElement = document.createElement("div");
    bookElement.classList.add("book-card");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    let titleElement = document.createElement("h5");
    titleElement.classList.add("title");
    titleElement.textContent = `made by ${book.title}`;

    let autorElement = document.createElement("h3");
    autorElement.classList.add("autor");
    autorElement.textContent = book.autor;

    cardHeader.appendChild(autorElement);
    cardHeader.appendChild(titleElement);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let pagesElement = document.createElement("p");
    pagesElement.textContent = `${book.pages} pages`;

    let readStatusElement = document.createElement("p");
    readStatusElement.classList.add("read-status");
    readStatusElement.textContent = book.read ? "Read" : "Not Read Yet";

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeBook(i));

    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.classList.add("toggle-read-btn");
    toggleReadBtn.textContent = "Toggle Read";
    toggleReadBtn.addEventListener("click", () => toggleRead(i));

    cardBody.appendChild(pagesElement);
    cardBody.appendChild(readStatusElement);
    cardBody.appendChild(removeBtn);
    cardBody.appendChild(toggleReadBtn);

    bookElement.appendChild(cardHeader);
    bookElement.appendChild(cardBody);

    libraryBook.appendChild(bookElement);
  });
}

// Add book to library function with validation
function addBookToLibrary() {
  const autor = document.querySelector("#bookAutor").value.trim();
  const title = document.querySelector("#bookTitle").value.trim();
  const pages = document.querySelector("#bookPages").value.trim();
  const read = document.querySelector("#Read").checked;

  // Validation for fields
  if (!autor || !title || !pages) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(autor) || !/^[A-Za-z\s]+$/.test(title)) {
    alert("Author and title should contain only letters.");
    return;
  }

  if (!/^\d+$/.test(pages)) {
    alert("Pages should contain only numbers.");
    return;
  }

  // Add book to library and display
  const newBook = new daBook(title, autor, pages, read);
  myLibrary.push(newBook);
  displayInfo();
  formDisplay.style.display = "none"; // Hide form after adding book
  formDisplay.reset(); // Clear form fields
}

// Remove book function
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayInfo();
}

// Toggle read status function
function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayInfo();
}

// Event listener for form submission
formDisplay.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
});
