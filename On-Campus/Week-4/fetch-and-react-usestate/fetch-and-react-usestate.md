In this article, we'll discuss how to use Fetch in a React component to make GET and POST requests to the backend server.

### Learning Goals

- Review ES6 Promises and the Fetch API
- Use the Fetch API in a React component to GET data from the server
- Use the Fetch API in a React component to POST data to the server

### Getting Started

```no-highlight
et get fetch-and-react-usestate
cd fetch-and-react-usestate
bundle exec bundle install && ruby server.rb
```

In a separate tab, run

```no-highlight
yarn install && yarn run start
```

## ES6 Promises and the Fetch API

As you may recall, we can use the [Javascript Promises API][javascript-promise-api-article] to more easily handle asynchronous programming. This allows us to define callback functions to specify different things that should happen upon a promise being fulfilled or rejected.

One way of utilizing promises is through the Fetch API. When we reviewed the [Fetch API][es6-fetch-api-article], we discussed how it can be used to fetch data from a backend server to use in a frontend app. In this article, we will be using that functionality in the context of React.

### Fetch in a React Component

When using React components for our frontend, we will frequently need to reach out to a server to retrieve or manipulate data which we want to display or change in our app. This server might be something internal within our app, which we create, or an external data source which we reach out to.

Let's walk through two examples of Fetch in a React component: a `GET` request and a `POST` request. In these examples, we will fetch to an internal API; external APIs are discussed at the end of the article.

#### `GET` Fetch Requests

Let's start by implementing a `GET` fetch request to pull data from our server and display it on the frontend.

If you navigate to <http://localhost:4567>, you should see a page with a "Books" heading and a small form for adding new books.

Looking through the React code files, we see that this page is being rendered in `components/App.js`, which includes an unordered list of the titles of any books in state. Because `books` is currently an empty array, this list isn't visible on our page.

```javascript
// App.js
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
```

We'd like to modify our code to retrieve data from our backend server via the Fetch API and update our component's state with this data. Moreover, we'd like this to happen right after the component mounts, rather than requiring some kind of interaction from the user.

Modify `App.js` so that the `useEffect` function contains the fetch below:

```javascript
useEffect(() => {
  fetch('/api/v1/books.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    let booksList = body.books;
    setBooks(booksList);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, [])

```

You'll also notice that we added a second argument - a blank array. This is a common pattern we can use with `useEffect` to ensure the function only runs once. With this second argument, our `fetch` call will execute after the component is first added to the DOM. Without it, we'd actually introduce a dangerous infinite loop because our function introduces a change to state. The change in state inside the implementation will result in a re-render, so `useEffect` will get called again.

With our infinite protection in place, the fetch will make a call to `/books.json`. Looking at `server.rb`, we see that the server will return a [status of 200](https://http.cat/200) and the parsed JSON data from our `books.json` file. (Check out the methods defined at the top of the file to see exactly how this data is being prepared.)

```ruby
get "/api/v1/books.json" do
  status 200
  json parsed_books_json_data
end
```

Once a response is received, the fetch invocation results in a change in the component's state with the array of book objects from the response body. This state change automatically triggers the `render` method to run again, displaying the page updated with the list of books retrieved from the server:

![ES6 Promises and Fetch API 8][es6-promises-and-fetch-api-8]

Voilà!

#### `POST` Fetch Requests

Now let's set up another fetch to let us add books to our database. This fetch will take data collected in the form and make a `POST` request to our server.

Taking a closer look at `App.js`, you'll see that it renders `BookForm.js`, which in turn renders `TextField.js`. There's also an `addBook` function defined in `App.js`, passed down to `BookForm.js` as a prop, and used there in the `handleSubmit` function. This is where we want our new fetch to go!

> _Which component should I put my fetch in?_ Your fetch is ultimately going to update your state, so you'll want the fetch to be in the same component as the state it's updating. If we put this fetch in `BookForm`, it wouldn't be able to update our list of books with our new title!

Let's modify our `addBook` function as follows:

```javascript
const addBook = (formPayload) => {
  fetch('/api/v1/books.json', {
    method: 'POST',
    body: JSON.stringify(formPayload)
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
       error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    setBooks([
      ...books,
      body.book])
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}
```

This fetch will make a `POST` request to our server. Looking at our `server.rb` file, we see

```ruby
post "/api/v1/books.json" do
  parsed_data = JSON.parse(request.body.read)
  book_name = parsed_data["book"]["name"]
  if !book_name.empty?
    book = {
      id: get_next_book_id,
      name: book_name
    }
    books = parsed_books_json_data["books"]
    books.push(book)
    update_books_json_data(books)

    status 201
    json({ book: book })
  else
    status 422
    json({ name: ["Can't be blank"] })
  end
end
```

Here, the server is reading the data from the HTTP request made by our fetch and checking to see whether the book title is just an empty string. If not, it adds the book to the database and sends the frontend a [status 201](https://http.cat/201) and the JSON data for the new book. If it is an empty string, the server sends the frontend a [status 422](https://http.cat/422) and some JSON containing an error message.

Once the fetch receives the response, it checks whether `response.ok` is true. If it received a `status 422` from our server, `response.ok` is false and it prepares and prints an error message to the console. If it received a `status 201` (meaning that `response.ok` is true), it adds the new book to the list of books currently in state. Finally, this change of state triggers the component to render again, displaying the new list of books.

## Using an External API

Similar to fetching data from an internal API written into your app, we can also fetch data from an API which is hosted by an external app. For example, if we wanted to display different books, we could reach out to the Goodreads API for data on many assorted books. This API endpoint will serve up a JSON with data in the same way our `books.json` file does, which can be retrieved using the Fetch API.

Most of the more established APIs will require that you register for a key, which works as a secret token to identify where the data request is coming from, and allow the API host some security controls and to track usage of their app. These APIs will also typically provide documentation, although it can sometimes be a bit tricky to navigate! Whenever utilizing an external API, just remember that each API host will provide their data and documentation in different manners, so you will want to take a look at these documents and the data being served up so you can more comfortably navigate through what the API endpoint is providing you with.

It is also important to note that some APIs may not allow for you to Fetch data from their server for security reasons. This is due to the fact that a **cross-origin HTTP request** is being made, which essentially means that our app, on our domain or port, is reaching out for data from an external, different domain or port. Browsers prevent these requests for security purposes, but due to requests from developers, the [**Cross-Origin Resource Sharing (CORS) mechanism**][mdn-cors] was created to allow for these requests to be made. Using this mechanism, each API host can choose to allow for secure cross-domain data transfers. However, if this has not been set up on the server side, you will not be able to Fetch data from those particular APIs.

### Summary

In this article, we have demonstrated how to utilize a back-end server to persist the data in your React application through the use of the Fetch API, as well as briefly reviewed how this would work when reaching out to an external API endpoint.

You will note that we used a `.json` file to store the data. While this serves our purposes for this particular app, this is not always ideal! Most of the time, our apps will have multiple users who are possibly using the app at the same time, and we will want the data from all users to be stored with our app. In the upcoming weeks, we will be discussing more scalable and reliable ways to store data, such as databases, which will allow for us to have the extended functionality needed for a variety of apps.

### External Resources

- [Promises Explained: The Promise of a Burger Party][promise-burgers]
- [Fetch API][mdn-fetch-api]
- [Using Fetch][mdn-using-fetch]
- [HTTP Access Control (CORS)][mdn-cors]
- [Why is my useEffect Hook executed in an endless loop?][endless-useEffect]

[endless-useEffect]: https://www.andreasreiterer.at/react-useeffect-hook-loop/
[promise-burgers]: https://fullstackjournal.wordpress.com/2018/07/06/the-promise-js-explained-i-burger-party/
[es6-promises-and-fetch-api-1]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-1.png
[es6-promises-and-fetch-api-2]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-2.png
[es6-promises-and-fetch-api-3]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-3.png
[es6-promises-and-fetch-api-4]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-4.png
[es6-promises-and-fetch-api-5]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-5.png
[es6-promises-and-fetch-api-6]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-6.png
[es6-promises-and-fetch-api-7]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-7.png
[es6-promises-and-fetch-api-8]: https://s3.amazonaws.com/horizon-production/images/Books-with-fetched-titles.png
[es6-promises-and-fetch-api-repository]: https://github.com/LaunchAcademy/es6-promises-and-fetch-api
[mdn-fetch-api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[mdn-using-fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[javascript-promise-api-article]: https://learn.launchacademy.com/lessons/javascript-promise-api
[es6-fetch-api-article]: https://learn.launchacademy.com/lessons/es6-fetch-api
[mdn-cors]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
