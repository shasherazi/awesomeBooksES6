import updateClock from './modules/updateClock.js';
import updateLocalStorage from './modules/updateLocalStorage.js';
import display from './modules/display.js';
import Book from './modules/Book.js';

const form = document.querySelector('.main-form-form');
const formTitle = document.querySelector('.main-form-form-title');
const formAuthor = document.querySelector('.main-form-form-author');
const newBookSection = document.querySelector('.add-new-book');
const bookListSection = document.querySelector('.book-list-display');
const contactSection = document.querySelector('.contact-info');
const newBtn = document.querySelector('#new');
const listBtn = document.querySelector('#list');
const contactBtn = document.querySelector('#contact');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(formTitle.value, formAuthor.value);
  book.addBookToView(formTitle.value, formAuthor.value);
  updateLocalStorage();
});

// Remove books from the List and from the books array
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('main-books-list-ul-li-button')) {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();

    const book = new Book(
      e.target.parentElement.parentElement.children[0].children[0].innerHTML,
      e.target.parentElement.parentElement.children[0].children[1].innerHTML,
    );
    book.removeBook();
  }
});

// Get books from local storage
document.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('booksArray'));
  if (books) {
    books.forEach((book) => {
      const bookItem = new Book(book.title, book.author);
      bookItem.addBookToView(book.title, book.author);
    });
  }
});

// Show current date
setInterval(updateClock, 1000);

bookListSection.style.display = 'none';
contactSection.style.display = 'none';

newBtn.addEventListener('click', () => {
  display(newBookSection, bookListSection, contactSection);
});

listBtn.addEventListener('click', () => {
  display(bookListSection, newBookSection, contactSection);
});

contactBtn.addEventListener('click', () => {
  display(contactSection, newBookSection, bookListSection);
});