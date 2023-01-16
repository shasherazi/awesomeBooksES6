const formTitle = document.querySelector('.main-form-form-title');
const formAuthor = document.querySelector('.main-form-form-author');
const booksList = document.querySelector('.main-books-list-ul');

export default class Book {
    static books = [];

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    /* eslint-disable class-methods-use-this */
    addBookToView(title, author) {
      Book.books.push({
        title,
        author,
      });

      formTitle.value = '';
      formAuthor.value = '';

      const bookItem = document.createElement('li');
      bookItem.classList.add('main-books-list-ul-li');
      bookItem.innerHTML = `
      <div>
        <div class='books-display'>
          <div class='book-name'>
            <p class="main-books-list-ul-li-title">${title} by</p>
            <p class="main-books-list-ul-li-author">${author}</p>
          </div>
          <div>
            <button class="main-books-list-ul-li-button">Remove</button>
          </div>
        </div>
      </div>
              `;
      booksList.appendChild(bookItem);
    }

    removeBook() {
      Book.books = Book.books.filter((book) => `${book.title} by` !== this.title);
      updateLocalStorage(); // eslint-disable-line no-undef
    }
}