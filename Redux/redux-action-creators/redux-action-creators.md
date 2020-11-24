In our last example, we looked at a fairly small application that simply had to increment two different numbers on our screen. But what happens when we have different types of interactions happening on our page?

## Learning Objectives

- Define action creators and justify their use
- Illustrate how reducers, actions, and action creators interact within our app

## Apps with multiple action types

Let's open up our page here by running the following:

```no-highlight
et get redux-action-creators
cd redux-action-creators
open index.html
```

We have a page with a list of books to read, which currently has one book listed. We have the ability to add new books through our form, but also to delete individual books from our list.

### Diving into the code

If we look in our `main.js` file, we can see that the logic has already gotten more complicated than what we've seen in the past. We have an `initialState` set up with our first book to read, a `bookReducer` to consume all of our actions and update our state, and all of our JavaScript code to handle events with our form and our buttons.

We can see that we have two important parts of code as far as interacting with our page. For our new book form, we have the following:

```javascript
const newBookForm = document.getElementById('new-book-form')

[...]

const ADD_BOOK = 'ADD_BOOK'

newBookForm.addEventListener('submit', () => {
  event.preventDefault();
  const bookTitle = document.getElementById('book-title').value
  const bookAuthor = document.getElementById('book-author').value
  document.getElementById('book-title').value = ''
  document.getElementById('book-author').value = ''
  const newBook = { id: createNextId(), title: bookTitle, author: bookAuthor }
  store.dispatch(
    {
      type: ADD_BOOK,
      newBook: newBook
    }
  )
})
```

This is setting up our form so that upon submitting, we are grabbing the title and author that were filled in, clearing the form, and creating a new book object called `newBook`. Then, we are dispatching an action with type `ADD_BOOK` and handing our new book to our reducer so that it can add it to our list of books. Remember that we want to be sure to define our action type as a constant `ADD_BOOK`, and then call on that constant in our `store.dispatch`.

Our next important part of code for interacting with our page revolves around our delete buttons:

```javascript
const deleteButtons = document.getElementsByClassName('delete-button')

const addDeleteListeners = () => {
  Array.from(deleteButtons).forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      store.dispatch({
        type: 'DELETE_BOOK',
        deletedBookId: deleteButton.id
      })
    })
  })
}
```

This section is responsible for setting up each of our delete buttons to remove the book with a specific id from our list of books.

## Using Action Creators to create our actions

In the above two blocks of code, we're actively dispatching two different types of actions, each with different payloads. We have an `ADD_BOOK` action type and a `DELETE_BOOK` action type. Additionally, the delete button for each individual book is going to tie to its own unique id. Even in such a small app, we can see our code getting more complicated, and how each of our `addEventListener` functions have an increasing amount of responsibility.

As good developers, we want to separate our code into as many small, reusable parts as possible. As we can imagine, the complication we are already seeing will become even more complex as we move into full React apps with multiple components. We don't want our components to be responsible for setting up actions, especially if the same functionality might end up being used elsewhere! For this reason, we incorporate _action creators_.

An action creator is exactly what it sounds like: a JavaScript function that creates an action. Action creators allow us to separate out the creation of our `action` objects into their own, stand-alone functions.

This affords us many benefits:

* We can better organize our code into separate files (once our apps are large enough)
* We can make our code more readable (rather than having an action buried inside a method or component, we can set up a separate function with clearly-named arguments)
* Our code becomes more compartmentalized and more easily tested, so that we can make sure our action creators are returning exactly the action that we, and our reducer, expect.

There are two kinds of action creators: synchronous and asynchronous. Asynchronous action creators could contain some other tasks, such as a fetch call. For now, we will simply focus on synchronous action creators. Our action creators, in this case, are pure functions and are responsible for one thing alone: given some argument that holds the payload, they return the same exact type of action, every single time.

### Refactoring our Book List app

Now that we know what action creators are, let's go ahead and refactor our book list application to use them.

First, we will want to factor out our `ADD_BOOK` action into an action creator. Let's add the following above our `newBookForm.addEventListener`:

```javascript
const addBookToList = newBook => {
  return {
    type: ADD_BOOK,
    newBook: newBook
  }
}
```

This action creator clearly indicates that it is used to add a new book to our list, and take in the new book's information. As a developer, I can easily look at this and see what its use case is and what I need to give it!

Now that we have defined this `addBookToList` action, let's refactor our original event listener:

```javascript
newBookForm.addEventListener('submit', () => {
  event.preventDefault();
  const bookTitle = document.getElementById('book-title').value
  const bookAuthor = document.getElementById('book-author').value
  document.getElementById('book-title').value = ''
  document.getElementById('book-author').value = ''
  const newBook = { id: createNextId(), title: bookTitle, author: bookAuthor }
  store.dispatch(addBookToList(newBook))
})
```

Ahh, that feels better. We can now clearly see that we're dispatching an action whose purpose is to add a new book to our list, and we're giving it that new book's information, all in one line.

Let's do the same for our `DELETE_BOOK` action. We'll start by adding our action creator above our `addDeleteListeners` function:

```javascript
const deleteBookFromList = deletedBookId => {
  return {
    type: DELETE_BOOK,
    deletedBookId: deletedBookId
  }
}
```

We can clearly see that this action creator will return an action intended to delete a book from our list, and will need to know the id of the book to delete. We can now update our `addDeleteListeners` function as follows:

```javascript
const addDeleteListeners = () => {
  Array.from(deleteButtons).forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      store.dispatch(deleteBookFromList(deleteButton.id))
    })
  })
}
```

With those changes made, our code is looking a lot more readable, and we should once again be able to add and delete books from our list with ease!

## Wrapping It Up

Our action creators allow us to bring the concepts we have used throughout our development to our Redux code: DRY, reusable, readable, clearly separated code. They also give us the ability to easily test our code, and will be increasingly helpful as we move into tying our Redux to React components!
