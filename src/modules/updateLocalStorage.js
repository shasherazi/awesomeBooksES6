import Book from './Book.js';

const updateLocalStorage = () => {
  // Add item to local storage
  localStorage.setItem('booksArray', JSON.stringify(Book.books));
};

export default updateLocalStorage;