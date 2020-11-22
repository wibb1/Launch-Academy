import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';

const App = (props) => {
  const [books, setBooks] = useState([])

  const addBook = (formPayload) => {
    console.log("Form submitted!") // Replace this with a fetch!
  }

  useEffect(() => {
    console.log("React component mounted!") // Replace this with a fetch!
  })

  const bookListItems = books.map(book => {
    return <li key={book.id}>{book.name}</li>;
  });

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {bookListItems}
      </ul>
      <BookForm addBook={addBook} />
    </div>
  );
}

export default App;
