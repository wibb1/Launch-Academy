### Learning Goals

Learn how the `Redirect` function provided by React Router can be used to redirect users to different paths within a React application

### Getting Started

```no-highlight
et get react-router-redirects
cd react-router-redirects
bundle exec bundle install
ruby server.rb
```

In a second tab:

```no-highlight
yarn install
yarn start
```

Visit <http://localhost:4567/movies>; you should see a list of several good movies.

## Redirecting

Sometimes we want to redirect a user to another location in our React app -- for example, after a form submits successfully, we might want to send them to an index page. We can do this using the `Redirect` component provided to us by React Router.

In this article, we'll add this functionality to a simple app consisting of an index (at `/movies`) listing some movies and a form (at `/new`) that allows a user to add a movie to this list. After a user adds a movie, we want our app to redirect to the index page.

Let's start by taking a look at the provided code. Reviewing the `NewMovieForm`, we can see that pressing **Submit** initiates a POST request to the backend, with a body containing the movie title data in state. A success message is then printed to the console and the state is reset to its initial value.

We want to modify this code so that, after a successful POST, the user is redirected to `/movies`. To do this, we're first going to import the `Redirect` function from the React Router library:

```javascript
// NewMovieForm.js
import { Redirect } from "react-router-dom"
```

We can now use `<Redirect to="/movies" />`. If our `NewMovieForm` component returns `<Redirect to="/movies" />` at any point, the router will redirect the user to "/movies".

Our next step is to find a way to _conditionally_ return either the form or the `<Redirect />`, depending on whether the POST was successful or not. Let's create a piece of state to indicate whether the component should redirect instead of displaying the form:

```javascript
// NewMovieForm.js
const [shouldRedirect, setShouldRedirect] = useState(false)
```

We're setting the initial value to false because we don't want to redirect on the initial render. Now let's add a conditional to our component such that, if `shouldRedirect` is true, this component returns our `<Redirect />` instead of the form:

```javascript
import React, { useState } from "react"
import { Redirect } from 'react-router-dom'

const NewMovieForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [movieTitle, setMovieTitle] = useState("")

  const onTitleChange = event => {
    // ...
  }

  const postNewMovie = event => {
    // ...
  }

  if (shouldRedirect) { // this is new!
    return <Redirect to='/movies' />
  }

  return (
    <form onSubmit={postNewMovie}>
      ...
    </form>
  )
}
```

Remember that this code is executed from the top down and that a `return` exits out of its parent function. Therefore, if `shouldRedirect` is true, we hit `return <Redirect to='/movies' />`, which will end execution of our `NewMovieForm` function before the `return` containing the `<form>` is reached. If you'd like to test this, you can change the default value of `shouldRedirect` from `false` to `true` -- you should be redirected to `/movies` upon loading the page if this default value has been changed. _Just don't forget to change it back!_

The final step is to toggle the value of `shouldRedirect` when the POST has been successful. Let's replace the `console.log` and `setMovieTitle` in the fetch with `setShouldRedirect(true)` IF our "POST" request is successful.

Final code:

```javascript
import React, { useState } from "react"
import { Redirect } from 'react-router-dom'

const NewMovieForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [movieTitle, setMovieTitle] = useState(false)

  const onTitleChange = event => {
    setMovieTitle(event.target.value)
  }

  const postNewMovie = event => {
    event.preventDefault()
    fetch("/api/v1/movies", {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({title: movieTitle})
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setShouldRedirect(true) // this is new!
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`)
  })

  if (shouldRedirect) {
    return <Redirect to='/movies' />
  }

  return (
    <form onSubmit={postNewMovie}>
      <label> New Movie
        <input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={movieTitle}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
```

Note that our logic here assumes that any response with an `ok` status has successfully added a new movie to our database. If we were performing back-end validations and potentially sending back error messages, that part of our fetch might look something like

```javascript
// NewMovieForm.js
.then(body => {
  if (body.errors) {
    // perhaps update a piece of state you've defined for errors, then use that to display the errors on the form
  } else {
    setShouldRedirect(true)
  }
})
```

### A Note About `history.push()`

There are other ways to implement redirection, including using `props.history.push()`. However, only components directly wrapped in a `<Route>` have access to the `history` prop, requiring a workaround if you want to implement a redirect in a deeper component. Moreover, **fundamental React philosophy is based on relying on state changes to update the display.** This is why the implementation we've described above, in which we use state to conditionally return a `<Redirect />`, is arguably the best practice.

### In Summary

The `Redirect` component from the React Router library can be used to redirect users to a different path. Here, we've used this functionality to return users to an index page after they've added a new movie on a form page. We've also done this using best practices by making our feature composable i.e. a user event takes place (form submission), state changes (shouldRedirect), and finally a re-render takes place.
