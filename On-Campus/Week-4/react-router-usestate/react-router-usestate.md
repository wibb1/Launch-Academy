## Learning Objectives

- Understand how URLs work within a web application
- Learn how to create links and nested routes for rendering React components

## Following Along

From your challenges directory, run the following:

```no-highlight
et get react-router-usestate
cd react-router-usestate
bundle install
ruby server.rb
```

In another terminal tab, run:

```no-highlight
yarn install
```

Now, install React Router by running

```no-highlight
yarn add react-router-dom@5.0.0
```

```no-highlight
yarn run start
```

Now navigate to `http://localhost:4567/`. You should see a list of cereals on top of a lovely cereal wallpaper with no errors displayed in the console.

We are in the middle of building a React and Sinatra app for our favorite breakfast cereals, and we need your help! Here are our requirements:

- The homepage will show an index (i.e., a list) of cereals.
- Clicking on a cereal should update the URL from `/` to `/cereals/:id` and display a show page (i.e., information on a specific item) for a particular cereal.
- A nav bar should be present on every page.

Let's get started! But first...

## What is React Router, anyway?

React Router is a library built on top of React that allows you to quickly add multiple pages and flows of information and to keep the browser in touch with what's being displayed on the page. At a lower level, Router is really just a _component_ that loads other components based on the URL.

There are many reasons why Router is great, including the ability to:

- create links to other parts of your React app,
- nest routes, and
- use JavaScript to update the URL without making an HTTP request.

React Router also lets you use _dynamic routing_, rather than manually coding the links in your app, while also giving your React app access to `params`. For example, you can create a route of `/pets/:id` and gain access to a param of `id: 5` when your user navigates to `/pets/5`.

Going a step further, creating distinct URLs for different "pages" in your web application also means that you can link directly to a specific page _section_ when sending out links to others. For instance, if you wanted to link to a _particular_ cereal page, you could do so easily. This is otherwise very difficult to do in React because you are often only serving up a single page from the server that contains all the JavaScript code.

## Creating a Router to Map URLs to Components

Let's take a look at `src/App.js`

```js
// App.js

import React from "react"
import CerealsIndexPage from "./components/CerealsIndexPage"

const App = props => {
  return (
    <div>
      <CerealsIndexPage />
    </div>
  )
}

export default App
```

Now, instead of just choosing which component `App` renders, we're going to use Router to _conditionally_ render components based on the browser's current URL. You do this by having your `App` component render a `BrowserRouter` component imported from `react-router-dom`. After updating the code in our `App` file, the top of our file should look like:

```js
import React from "react"
import { BrowserRouter } from "react-router-dom"
```

We're not done yet! Our router needs to contain the various routes that we will be defining for our app -- namely, which URLs should cause which React components to render on the page. So let's import `Route` as well.

```js
import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
```

Okay, let's refactor `App.js` to convert it into a router. Specifically, when a user visits the root path (`/`), we want to display `CerealsIndexPage`:

```js
// App.js

import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import CerealsIndexPage from "./components/CerealsIndexPage"

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={CerealsIndexPage} />
    </BrowserRouter>
  )
}

export default App
```

If you refresh the page in your browser, you should now see exactly the same content as before: a list of cereals on a really jarring cerealy background!

### Using `<Switch>` to Define Multiple Routes

Let's make things more interesting. What if we want to display `MilksIndexPage` at `/milks`?

To add another route to our router, we need to import `Switch` and wrap it around our list of routes, so that React Router knows that it should stop looking as soon as it finds a match (otherwise, Router might find multiple matching routes and throw an error):

```js
// App.js

import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CerealsIndexPage from "./components/CerealsIndexPage"
import MilksIndexPage from "./components/MilksIndexPage"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={CerealsIndexPage} />
        <Route path="/milks" component={MilksIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
```

Navigate to `http://localhost:4567/milks` and prepare to be surprised. Instead of our `MilksIndexPage`, our `CerealsIndexPage` is rendering! Why? A hint: when the router is trying to match a URL to a route, it is matching the _beginning_ of the URL with the path specified for the route. Therefore, `/milks` would match both the `/` and `/milks` routes (it would also match routes for `/milk` or `/milks/5`, but not `/cereal` or `/cereals/5/milks`). Furthermore, React Router starts its search at the top of the file, and (thanks to `Switch`) will stop looking after the first match it finds. So, it encounters `/` before `/milks`, registers it as a match, serves up `CerealsIndexPage`, and doesn't even look at any routes below `/`. You can test this out by moving the line with the `/milks` route above the line with the `/` route and refreshing the page -- React Router will now match `/milks`, serve up `MilksIndexPage`, and go along its merry way.

### Using `exact` for Exact Matches

There's a better way to to ensure that Router matches the `/milks` path in the URL with the `/milks` route you've created, rather than the `/` route: the `exact` prop. Add this to your root route like so:

```js
// App.js
const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CerealsIndexPage} />
        <Route path="/milks" component={MilksIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}
```

If you navigate to `/milks` now, the `MilksIndexPage` will be displayed because Router is looking for an _exact_ match to `/`, and `/milks` does not exactly match `/`. As a best practice, add `exact` to all your routes unless you have a compelling reason not to!

## Adding Links

The React router library also includes a `Link` module, which provides us with a nifty helper for creating links in our app. At the moment, our `CerealsIndexPage` and `MilksIndexPage` each have anchor elements (`<a>`) linking to one another. These do the trick, but they're not React -- each time you click on one of these links, your browser is making an HTTP request to your server, ultimately causing a page reload. This is very un-React.

This is where `<Link>` comes into play -- it avoids the browser's default behavior and redirects us where we want to go, without reloading the page or making an HTTP request. Let's import this module and refactor out the anchor tags like so:

```js
// MilksIndexPage.js
// ...
import { Link } from 'react-router-dom';

// ...
    return (
      <div className="center-bg">
        <h3 className="so-great">Milks Are Also Great</h3>
        <Link to="/">But so are cereals</Link>
        {milkTiles}
      </div>
    )
  }
```

```js
// CerealsIndexPage.js

  // ...
import { Link } from 'react-router-dom';

    // ...

    return (
      <div className="center-bg">
        <h3 className="so-great">Cereals Are Great</h3>
        <Link to="/milks">So are milks!</Link>
        {cerealTiles}
      </div>
    )
  }
```

Clicking these links will now immediately render the desired component, with no page reload -- try it out!

## Nested Routes

The next step in perfecting our awesome cereal app is to implement a nav (_navigation_) bar. We want this bar to appear on every page. Thinking about React as boxes-within-boxes, our nav bar component will be the outermost box, rendering other components (like `CerealsIndexPage`) inside of it. To accomplish this, we're going to add a route to the `NavBar` component into `App.js` and move the routes for `CerealIndexPage` and `MilksIndexPage` into the `NavBar` component.

`App.js` becomes simply:

```js
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from "./components/NavBar"

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={NavBar} />
    </BrowserRouter>
  )
}

export default App
```

(You can keep `<Switch>` if you prefer, but it's unnecessary for a single route.)

Next, we're going to add the routes to `MilksIndexPage` and `CerealsIndexPage` into `NavBar.js`:

```js
import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import CerealsIndexPage from "../components/CerealsIndexPage"
import MilksIndexPage from "../components/MilksIndexPage"

const NavBar = props => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/">All Cereals</Link>
      </div>
      <div className="navbar">
        <Link to="/milks">All Milks</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Cereals</h1>
      </div>
      <Switch>
        <Route exact path="/" component={CerealsIndexPage} />
        <Route exact path="/milks" component={MilksIndexPage} />
      </Switch>
      <div className="navbar">
        <p>I am a footer!</p>
      </div>
    </div>
  )
}

export default NavBar
```

That's right, we move our routing components right into the middle of the JSX that our NavBar provides. In this way, if a user navigates to any path beginning with `/` (which would be all routes), then React will begin rendering all of the elements of the page designated by the `NavBar` JSX. Once it gets to our `Switch` statement, it will look at the current path and render all of the JSX associated with appropriate component. For instance, if we navigate to `/milks`, then React will render all of the JSX in `NavBar` and render our `MilksIndexPage` in the middle of the `NavBar` JSX. It's just a matter of the right nesting.

## Dynamic Links

Finally, let's set up our app to handle _dynamic links_ so that we can route for cereal show pages. Remember, dynamic linking lets us make templates for our routes: for example, we can set up a route for `/cereals/:id` and then access the value of `:id` in the current URL within our React code. This is important, because we will need that `id` value in order to make the correct fetch request to get information for that cereal!

First, in `CerealTile`, replace the `<h2>` in the return with
```
<Link to={`/cereals/${id}`}>{name}</Link>
```
so that our list of cereals now contains links to each cereal's show page. Those React links are our dynamic routes.

Now, in NavBar (remember that this is our outermost "box"), import and add a route for `CerealShowPage`:

```js
<Route exact path="/" component={CerealsIndexPage} />
<Route exact path="/cereals/:id" component={CerealShowPage} />
<Route exact path="/milks" component={MilksIndexPage} />
```

(Naturally, you'll need to add the relevant import for `CerealShowPage` to the top of `NavBar`)

Now our react page is set up to render `CerealShowPage`, should someone navigate to that path.

If you look at `CerealShowPage`, you'll see that we need the `id` from the URL in order to determine which cereal's data we should fetch. Router provides us with that `id` via `props.match.params`. Just like any other params, we can call on `props.match.params` in our React component. If we update `CerealShowPage` such that the `useEffect` includes the following:

```js
//...
useEffect(() => {
  let cerealId = props.match.params.id
  fetch(`/api/v1/cereals/${cerealId}`)
  ...
})
//...
```

and click on one of the links to a cereal, the information from that cereal should now appear on the page.

## Summary

The ubiquitousness of React is driven in part by people want to create exceptional user experiences with transitions and changes in UI elements that is are both not disruptive and easy to implement. React Router allows us to create a layer of routing that prevents the long disruptive load times of of normal HTTP requests and instead replaces it with a relatively intuitive system for the conditional rendering components, allowing us to then make asynchronous requests for data with an API like Fetch. Once we set up our base routes, use the proper nesting and syntax in our paths and links, and make use of the new props our components are given, we can create frontend experiences that have no page refresh at all. It's all managed by React!

### External Resources

- [ReactTraining/React Router](https://github.com/ReactTraining/react-router)
