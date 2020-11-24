So far, we have successfully implemented Redux into a simple HTML + JavaScript web application. However, we are React developers, so we will most definitely want to incorporate Redux into our React applications as well! To review how we can do so, we will be taking a look at our good old friend, the Grocery List app.

## Learning Objectives

- Install and configure a Redux store with React applications in mind
- Integrate the `<Provider>` component to share state with React Components
- Organize the different parts of our React and Redux code into a well-organized file structure

## Getting Set Up

To get set up, run the following:

```sh
et get adding-redux-to-react
cd adding-redux-to-react
yarn install
yarn start
```

When visiting `http://localhost:8080`, we should see a fully functional React Grocery List application which has a form that allows us to add to a grocery list, and delete buttons to remove items. You should not have any errors in your console.

In its initial state, the app does not include any Redux. We can actually already see where the benefits of Redux could come in thanks to our `GroceryIndexPageContainer`. Right now, this component is necessary, because we need a top-level component that keeps track of the grocery list so that BOTH our `GroceryListContainer` and `GroceryFormContainer` components can access it. We then have to take this state, as well as our `addNewGrocery` function, and pass them down as props to our other containers. As our application grows, we can see how this one top-level component being responsible for passing down more and more props could become an organizational nightmare, and this is exactly where Redux can benefit us. So let's go ahead and refactor our app to use it!

## Adding Redux to our React apps

The first thing we will need to do in order to add Redux to our React application is to install the `redux` and `react-redux` packages. `redux` is going to give us access to the functionality we've used so far, including `createStore`, `getState` and `subscribe`. `react-redux` is the official React package for Redux, which will allow us to connect our actions, reducers, and store to our React components.

We'll start by shutting down webpack and running the following commands (remember to `yarn start` again once you've run these successfully!):

```sh
yarn add redux@4.0.0
yarn add react-redux@5.0.7
```

Great! Now that we've installed the required packages, we can start to set up our Redux store in our application.

In this article, we're going to refine our approach to configuring Redux so that it can accommodate React applications of increasing complexity.

## Setting up a Redux store in React

The first step to getting Redux up and running is going to be to set up our store within our React app. Just like in our simpler applications, we're going to need to create an `initialState`, a reducer, and then use `createStore` to create a Redux store using that reducer.

However, we know that our React apps can become a good deal more complicated than our one-page vanilla JavaScript apps. In fact, as our React application grows, it's possible that we might want to have more than one reducer! This is going to be particularly important as we have more and more pages in React. We know that as good developers, we want to make sure we stick to the _Single Responsibility Principle_, and have each of the pieces of our app responsible for one core part of our functionality. For example, let's imagine we were building a band website and that we have a section of the site for recent news, concert tickets, and merchandise. With each section having their own functionalities (imagine all the different types of actions involved in selling merchandise!), we're not going to want one reducer to have to handle all of these functionalities. That would encompass far more than one _single responsibility_, and we would end up with one _massive_ switch case that would be incredibly difficult to both read and maintain!

Instead, we can organize our code into separate reducers, and `redux` gives us a wonderful function called `combineReducers` to combine them all into one large reducer. From there, we can proceed with setting up our store.

### Using `combineReducers`

Next, let's organize our file structure a bit. We currently have a `src` folder for all of our React, with a `components` and `containers` folder inside. Let's add a few additional subfolders in our `src` folder: one called `store` to hold all of the files for setting up our store, and one called `modules`, which will hold our file with our actions and reducer for each part of our app.

Once we have those folders created, the first thing we'll want to do (just like in our simple Redux apps!) is set up our initialState and our reducer. Let's create a new file in our `modules` folder called `groceries.js`.

Inside that file, we will first want to set up our initial state. We will actually refer to our current `GroceryPageContainer` and `GroceryFormContainer` components to see what that combined initial state should look like. Let's go ahead and add the following to `modules/groceries.js`:

```javascript
const initialState = {
  groceryList: [],
  name: ''
}
```

Then, we will want to set up the structure of our reducer itself. For now, let's just have the one default case:

```javascript
const groceries = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export {
  groceries: groceries
}
```

*A quick note on `export` here: when we only need to export one constant from our file, we can use `export default`. However, we will eventually want to export our action creators from this file as well, so we need to remove the `default` and export a JS object instead. Note that when we `import` this reducer, we will also need to use curly brackets, as shown in the `rootReducer` code provided below. We'll discuss this further as we work through this!*

Like we've done with previous reducers, we will put in a different `case` for each action type we end up creating, but let's not worry about that for now. Now that we have our reducer, we can move forward with setting up our store. Right now, we only have one reducer, but let's set up our app as if we may have additional reducers for other parts of our website in the future. The first thing we'll want to do is use the aforementioned `combineReducers` function to bring all of our reducers into one root reducer!

Start by creating a new file: `store/rootReducer.js`. Let's fill this file in as follows:

```javascript
import { combineReducers } from 'redux'

import { groceries } from '../modules/groceries'

const rootReducer = combineReducers({
  groceries: groceries
})

export default rootReducer
```

Here, we are importing the `combineReducers` function from `redux`, as well as our `groceries` reducer. Then, we are defining a new `rootReducer` as our one combined reducer, and setting it equal to the combination of any and all reducers in our application! Note that `combineReducers` expects an object of `key: value` pairs, with a key that sets up how we'll access the state maintained by this reducer, and a value of the reducer's name. In this code, we are saying that our grocery list state will be nested under a key of `groceries`, and that we want it to use the `groceries` reducer to maintain that state. As our app grows, we can add additional reducers while also compartmentalizing the logic.

This effectively namespaces our state so that it's split into separate parts for different sections of our app. In order to access any of this state, such as our `name`, we would call `state.groceries.name`.

### An Aside: ES6 shorthands

#### A shorthand for `key: value` pairs

As we can see in both our `rootReducer` and in our export statement for our `groceries` reducer, we are creating an object that has a key and a value that are the same: `{ groceries: groceries }`. This is a little redundant, so ES6 syntax gives us a shortcut to DRY up our code! We are able to simply include the word once, instead of as an explicit `key:value` pair.

This shortcut is available to us only when we declare object literals. In other words, whenever we simply create an object by defining it as `a = {}` rather than `a = new Object()`.

This is **not** specific to React or Redux! This is something that is given to us by ES6, and can be used in any of our JavaScript applications that use any version of JS that is ES6 or newer.

Let's update our code to use this shorthand. Go ahead and update your `rootReducer` to be the following:

```javascript
const rootReducer = combineReducers({
  groceries
})
```

Let's also update our `export` statement in our `modules/groceries.js` file:

```javascript
export {
  groceries
}
```

#### Object Destructuring

Along with this syntax for `DRY`-ing up our object declarations, we also have a syntax to interact with already existing objects called `object destructuring`. Object destructuring allows us to take an entire object worth of data, and have a variable to access each individual piece of data. For example, let's say we pass in the following props to a `magicalCreatureTile` component:

```javascript
const props = {
  firstName: 'Jeffrey',
  lastName: 'Unicorn',
  education: {
    highSchool: 'Rainbow High',
    college: 'Magical U',
    bootcamp: 'Launch Academy'
  }
}
```

We could, of course, access Jeffrey's first name by calling `props.firstName`, and access his bootcamp education by calling `props.education.bootcamp`. However, it would be nice if we didn't have to chain so many keys together! This is where object destructuring comes in. It allows us to set a number of different variables to their values in `props` all at once, as so:

```javascript
const { firstName, lastName } = props
```

Now, we will be able to call on the simple variables `firstName` and `lastName` and access the related values:

```javascript
const magicalCreatureTile = props => {
  const { firstName, lastName } = props
  console.log(firstName) // 'Jeffrey'
  console.log(lastName) // 'Unicorn'
}
```

We can even use this syntax to access nested `key:value` pairs:

```javascript
const { firstName, lastName, education: { bootcamp } } = props
```

```javascript
const magicalCreature = props => {
  const { firstName, lastName, education: { bootcamp } } = props
  console.log(bootcamp) // 'Launch Academy'
}
```

This can come in handy when we're dealing with heavily nested objects with a lot of `key:value` pairs within our components. However, we are also conveniently using it in our `import` statements. For example, let's look at the following code from the top of our `rootReducer` file:

```javascript
import { combineReducers } from 'redux'
import { groceries } from '../modules/groceries'
```

What we're actually doing here is using object destructuring to import only the things that we need from one library or file into another! For example, we don't need the *entirety* of the Redux library in our `rootReducer` file, we only need the one `combineReducers` function, so we use object destructuring to selectively access that one function. Likewise, we know that we're exporting our `groceries` reducer from our `modules/groceries.js` file via an object `{ groceries: groceries }`. So when we import that reducer exclusively into our `rootReducer` file, we want to set up a variable named `groceries` to access that reducer. We do so using object destructuring to grab the specific `groceries` reducer. This will become even more apparent and helpful as we begin to export more things from this file, such as our action creators.

### Creating our Store with `createStore`

Now that we have our `rootReducer` set up, as well as our `groceries` reducer with initial state, we can move on to actually running our `createStore` function like we did in our simplified Redux apps! Just like in our other apps, we will need to import `createStore` from Redux. However, rather than directly calling `createStore` like we did in our simpler apps, we will want to wrap it in a larger function called `configureStore`. At this point in our Redux app, our `configureStore` function is going to be incredibly simple, and it will not be immediately apparent _why_ we want to separate this into its own function. Don't worry, we are structuring our configuration so that it can handle more complex applications. Later, we'll use this `configureStore` function to assist us with integrating asynchronous functionality, such as those that need to rely on fetch calls, in the future.

It is best practice to have the logic to set up or create our store in its own file instead of in `main.js` to help organize our code. Let's add a new file in our `store` folder called `configureStore.js`:

```javascript
import { createStore } from 'redux'
import rootReducer from './rootReducer'

let configureStore = () => {
  let store = createStore(rootReducer)
  return store
}

export default configureStore
```

Here, we are creating a new function `configureStore` which, at this point, simply creates our store using `createStore` with our combined `rootReducer`. In the future, we will be adding additional configuration here.

Now that our store is set up, let's go ahead and hook it up with our React application!

## Giving our React App Access to our Store

At this point, we have successfully configured our application so that it can have multiple reducers that all get combined into our `rootReducer`, and have built a function `configureStore` that will create and configure our store for us. Our next step is to actually initialize that store and pass it on to our React application!

### Updating `main.js` to Create our Store

As usual, we have a `main.js` file that will target a div on our page to render our React app, which currently looks like this:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import './main.scss'
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
```

We want to update this file to create our store, and pass it in as a prop to our `App` component. We will need to import our `configureStore` function in order to do this. Let's do so by adding the below into a new `/src/main.js` file:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/configureStore'
import './main.scss'
import App from './components/App'

const store = configureStore()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)
```

### The Provider Component: Giving Each Component Access to the Store

Now that our `App` component has access to the store, all of our child component files can be given access to the store as well. We could do this manually by passing our store down through our entire component tree via props, but that would partially defeat the purpose of using Redux: why didn't we just have one top-level state that we passed through all of our components? We know that there has to be a better way to provide all of our components with access to our store.

Luckily, `react-redux` gives us a special React component called `Provider`, which will automatically make our store accessible by all containers in our application without explicitly passing it down as props. We can import `Provider` from `react-redux` and wrap it around any children of our `App` component as follows:

```javascript
import React from 'react'
import { Provider } from 'react-redux'

import GroceryPageContainer from '../containers/GroceryPageContainer'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <GroceryPageContainer />
    </Provider>
  )
}

export default App
```

As we can see, our `Provider` component is wrapped _around_ our child `GroceryPageContainer` component. It is also receiving our `store` through props. We need to be sure to give our `Provider` component the `store` prop so that it can make it accessible to all child components! Note that we _need_ to call this prop `store` in order for `Provider` to function properly.

While this syntax is a bit different than how we typically render child components, you've seen something like it before, like when we utilized `react-router`! Take a look at this code:

```javascript
const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path="/groceries" component={GroceryListContainer} />
      <Route path="/groceries/:id" component={GroceryShowContainer} />
    </Router>
  )
}
```

Just like we have to wrap all of our `Route` components in a top-level `Router` component in order for them to function as one cohesive router and have access to things like `browserHistory` and the prop `params`, we're implementing a similar functionality here with `Provider` so that the children can have access to our `store`.

Adding this `Provider` container will give each of our child components access to our `store`, which will then allow each component to `connect` to our store when needed - which we will be going over in the next article.

As a note, if we _were_ using Router in our Redux app, we would want to wrap `Provider` _around_ our router as follows (don't update your current code, this is just an example):

```javascript
const App = props => {
  return(
    <Provider store={props.store}>
      <Router history={browserHistory}>
        <Route path="/groceries" component={GroceryListContainer} />
        <Route path="/groceries/:id" component={GroceryShowContainer} />
      </Router>
    </Provider>
  )
}
```

## Wrapping Up

To recap, we have now:

- Installed the `redux` and `react-redux` packages into our app
- Created one root reducer to combine all of our separate reducers and `initialState` using `combineReducers`
- Created a function `configureStore` to configure our store which uses `createStore`
- Created our store and passed it to our `App` component through `main.js`'s `ReactDOM.render`
- Passed our store to our entire component tree by using the `Provider` component

We now have access to our Redux store throughout our application. While we aren't yet _utilizing_ this store within our application quite yet, we should still see that we have a fully functional application with no errors in our console. This means that Redux is flowing through our app without error, even if we aren't using it yet. Next up, we will work to actually access and update that store through our React components!

### Resources

- [WesBos: Destructuring Objects](https://wesbos.com/destructuring-objects/)
