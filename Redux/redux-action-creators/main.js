const { createStore } = Redux;

const initialState = {
  books: [
    {
      id: 1,
      title: 'POODR',
      author: 'Sandi Metz'
    }
  ]
}

// Reducer

const bookReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOOK:
      const newBookArray = state.books.concat(action.newBook)
      return Object.assign({}, state, {
        books: newBookArray
      })
    case DELETE_BOOK:
      const filteredBooks = state.books.filter(function(book) {
        return book.id !== parseInt(action.deletedBookId)
      })
      return Object.assign({}, state, {
        books: filteredBooks
      })
    default:
      return state;
  }
}

// JS to add new book

const newBookForm = document.getElementById('new-book-form')

// Calculates next book's id

const createNextId = () => {
  const currentBooks = store.getState().books
  const bookIds = []
  currentBooks.forEach(function(book) { bookIds.push(book.id) })
  return Math.max(...bookIds) + 1
}

// CONST type for adding book

const ADD_BOOK = 'ADD_BOOK'


// Submits form and dispatches add action

const addBookToList = newBook => {
  return {
    type: ADD_BOOK,
    newBook: newBook
  }
}

newBookForm.addEventListener('submit', () => {
  event.preventDefault();
  const bookTitle = document.getElementById('book-title').value
  const bookAuthor = document.getElementById('book-author').value
  document.getElementById('book-title').value = ''
  document.getElementById('book-author').value = ''
  const newBook = { id: createNextId(), title: bookTitle, author: bookAuthor }
  store.dispatch(addBookToList(newBook))
})

// JS to delete books
const deleteButtons = document.getElementsByClassName('delete-button')

// CONST type for deleting book

const DELETE_BOOK = 'DELETE_BOOK'

// Adds click listener to dispatch delete action
const deleteBookFromList = deletedBookId => {
  return {
    type: DELETE_BOOK,
    deletedBookId: deletedBookId
  }
}

const addDeleteListeners = () => {
  Array.from(deleteButtons).forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      store.dispatch(deleteBookFromList(deleteButton.id))
    })
  })
}

// Sets up store
const store = createStore(bookReducer);

// Renders list of books to page
const bookList = document.getElementById('book-list')

const render = () => {
  let newBookList = ''
  console.log(store.getState().books);
  store.getState().books.forEach(function(book) {
    newBookList += `<li>${book.title}, ${book.author}</li> <button class='delete-button' id=${book.id}>Delete</button>`
  })
  bookList.innerHTML = newBookList
  addDeleteListeners()
}

render();
store.subscribe(render);
