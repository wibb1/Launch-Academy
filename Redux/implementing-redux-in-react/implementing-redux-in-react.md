## Learning Objectives

- Identify components in our existing React code that need to change to utilize Redux
- Compose our `mapStateToProps` and `mapDispatchToProps` functions to determine how our components access our Redux store
- Explain what the `connect` function is and how it links our components to our Redux store
- Assert the organizational benefits gained by refactoring with Redux

## Getting Set Up

In the previous article, we learned how to install Redux into our React application, and configure our store. However, while we have set up our store, we are still using local state in our components, and aren't actually accessing our store at all! We're going to continue to work on our Grocery List application in order to fully hook it up to Redux.

You can simply build on top of your code from "Adding Redux to React". To provide a starting point for this article, you can retrieve the desired code as of the end of that reading by running the following:

```sh
et get implementing-redux-in-react
cd implementing-redux-in-react
yarn install
yarn start
```

When visiting `http://localhost:8080`, as we did previously, we should see a fully functional React Grocery List application which has a form that allows us to add to a grocery list, with no errors in the console.

Now that we're ready to dive into the components themselves, let's first take a look at the code we have right now.

- Our `App` component is rendering the `GroceryPageContainer`, which has one thing in its state: our `groceryList` array which will keep track of all of our groceries. This container is responsible for adding new groceries to our list through a `addNewGrocery` method. Finally, this container renders our `GroceryListContainer` component, which in turn renders each `Grocery` to our page. It also renders our other container, a `GroceryFormContainer`.
- Our `GroceryFormContainer` also has one thing in its state: the `name` that our user is typing into the new grocery form. We have methods that calculate the id of our next grocery (`calculateNewId`), track the user's input in our form (`handleNameChange`), and a `handleFormSubmit` which prepares our new grocery object, hands it into `addNewGrocery` to add to our list in `GroceryPageContainer`, and clears the form. `GroceryFormContainer` renders the form on our page, using our `GroceryInputField` component for the input field.
- We can already see that our components are well-organized into `containers` (which either right now or once we refactor will need to hold state) and `components` (which are purely functional). Our next step will be connecting those `containers` with our store so they can stop storing state locally.

_A note on containers:_ We always want to be mindful of which React components need to be connected to our Redux store, and which do not. In general, we want each section or functionality of our application to have one "hook-up" point with Redux, to keep track of exactly where and how our store is being interacted with! It would be quite redundant to continue connecting our components with Redux if they are not responsible for storing or updating state. For the most part, as we will do in this app, we can follow the same guidelines that we already have for our stateful components. Our end goal, rather than having to pass the `groceryList` state down from `GroceryPageContainer` to two other separate containers, will be to give both `GroceryListContainer` and `GroceryFormContainer` direct access to this shared state without having to pass it as props.

## Building our Actions, Action Creators, and Reducers

Right now, our components are holding state locally and through React's state mechanism. In the Redux world, we know that we use actions, action creators, and our reducer to manipulate state. So as our first step, let's replace our local state and methods with a reducer and action creators!

### Moving `addNewGrocery` into an action creator

We're actively going to work in the direction of replacing `setState` and state initialization functions to make use of Redux.

Let's start by looking at our `GroceryListContainer`. It starts with an initial state of `{ groceryList: [] }`. Luckily, we have already set up our `groceries` reducer in `modules/groceries.js` to have this as a part of the `initialState`!

Since our `initialState` is already set up and being passed into our reducer, the next step will be setting up our action creator to be able to _update_ this state.

As we learned from our simple Redux apps, we'll need two things related to our action: a constant action type, and an action creator. Let's add those into our  `modules/groceries.js` file as follows:

```javascript
const ADD_GROCERY = 'ADD_GROCERY'

const addNewGrocery = grocery => {
  return {
    type: ADD_GROCERY,
    grocery
  }
}
```

Note that we are using ES6 shorthand here, by passing a `key:value` pair with a key of `grocery` and a value of our `grocery` parameter (in other words, `grocery: grocery`) as simply `grocery`.

In our next step, we know that we need to be able to run this action through our reducer and have something actually happen! So we want to update our reducer by adding this action type to our `switch` case.

Our end goal is to add the grocery that we've handed in as a parameter to the existing `groceryList` array in our store. In our `addNewGrocery` function, we're using `concat` to add to our current `groceryList` state, and then setting state to our new array. We can do the same thing within our `groceries` reducer as follows:

```javascript
const groceries = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROCERY:
      const newGroceries = state.groceryList.concat(action.grocery)
      return Object.assign({}, state, {
        groceryList: newGroceries
      })
    default:
      return state
  }
}
```

Wait, why didn't we just use `push` here? Recall that in Redux, we want reducers to be pure functions. Using `concat` creates a new array instance, where a `push` invocation would mutate the existing array.

Finally, let's update our export statement:

```js
export {
  addNewGrocery,
  groceries
}
```

#### An Aside: Another ES6 Shorthand: The Object Spread Operator

So far in our reducers, we've used `Object.assign` in order to update our state without mutating the existing state. Another option, rather than using `Object.assign`, is to use the _object spread syntax_, which uses a spread operator (`...`) to create a new copy of state which includes the old state plus our new information. Using the spread operator, we can fill in our `state` object with everything *currently* in state, plus whatever new `key:value` pair(s) we need. We refer to the existing state as `...state`. This would allow us to rewrite our current reducer cases as follows:

 ```javascript
case ADD_GROCERY:
  const newGroceries = state.groceryList.concat(action.grocery)
  return {...state, groceryList: newGroceries }
```

We can see that this is a little easier to read already. It may not seem like a huge change now, but as we start making more complicated updates to our state, using the spread operator dramatically improves the expressiveness of our code!

If you do choose to use the spread operator, note that since it is still in the proposal stage for ECMAScript, you will need to use a transpiler (like Babel) to use it in your application. This is why we can use it here in the context of our React application. We were intentional in not using it in our vanilla Redux applications without React. We've included the `babel-plugin-transform-object-rest-spread` package in `package.json` and set up our `.babelrc` file to include this functionality for you.

### The `connect()` function

You'll notice that we keep saying we're going to "connect" to our Redux store, and there's a good reason for that! We're going to give our components direct access to particular parts of our store using a function given to us by `react-redux` called `connect`. `connect` is a pretty fancy function that might make our brains hurt for a while as we get comfortable using it - and that's okay! We'll walk through it here, and it will become more and more comfortable the more you use it.

We use `connect()` from the `react-redux` library to:

- Read the state from our store and give our React components access to it
- Allow our React components to access our action creators so they can call them as functions

Let's start simply: `connect()` is just a function. It is provided by `react-redux`, and it accepts two required and two optional parameters. For now, we will focus on calling `connect()` with the two required arguments.

In order for it to do its work, the `connect()` function will take advantage of React component `props`. The first argument of `connect()` will map Redux state to React component properties, while the second argument will make our Redux action creators available through `props`. The structure of the `connect()` function is as follows:

```javascript
connect(mapStateToProps, mapDispatchToProps)([ComponentClass])
```

In the end, `connect` is going to invoke our `mapStateToProps` and `mapDispatchToProps` functions and create a new copy of our container component which has additional `props`. Let's study each mapping function separately.

### mapStateToProps

`mapStateToProps` is the function that will give our container access to the state held in our store. In other words, this is where our container gets `subscribed` to our store. When the state changes, the connected container's `prop` value will change. As a reminder from our earlier articles, we can think of this as a subscription to a newsletter: anytime a new copy of the newsletter goes out, we get a copy to read. Similarly, any time our store gets updated, `mapStateToProps` will be called with the new state from our store.

Our container will gain access to the state held in store just like the function name `mapStateToProps` specifies: through React properties!

Before we get started, let's add the following `import` statements to the top of `GroceryPageContainer`, which is where we'll be starting:

```javascript
import { connect } from 'react-redux'
import { addNewGrocery } from '../modules/groceries'
```

We can now add the below code into `GroceryPageContainer.js` at the very bottom of the file, just *above* our `export default` statement:

```javascript
const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}
```

Here, we have declared a fairly standard `mapStateToProps` function. It takes one parameter: our current Redux state. This is given to us as a functionality of `mapStateToProps` through `connect`. `mapStateToProps` can take in our state, and then add a sequence of `key:value` pairs to translate that state into relevant container props. Here, `mapStateToProps` is returning an object: `{ groceryList: state.groceries.groceryList }`. So in our defined `mapStateToProps` function, we are saying that we want to read the current state from our store, and add `this.props.groceryList` to our container's props with the array found in the Redux store.

Since we know that we'll be getting this list from our `store`'s state moving forward, we can stop tracking it locally via React state. In other words, we can **remove** the following state from our `GroceryPageContainer`:

```javascript
this.state = {
  groceryList: []
}
```

Generally, we can assume that a Redux connected container will not reference `this.state` or `this.setState`, because our objective is to centralize all of that state management with Redux.

Next, we can update the `render` invocation to use props instead of React state.

```javascript
render() {
  return(
    <div>
      <h1>Grocery List React</h1>
      <GroceryFormContainer
        addNewGrocery={this.addNewGrocery}
        groceryList={this.props.groceryList}
      />
      <GroceryListContainer
        groceries={this.props.groceryList}
      />
    </div>
  )
}
```

### mapDispatchToProps

So, we can read state through `mapStateToProps`, but what about firing action creators? `mapDispatchToProps`, is the function that will give our container access to any of our action creator functions so that our container can dispatch Redux actions. `mapDispatchToProps` expects that each of the functions passed in are action creators, so that is the only type of object we can pass in.

In our current component, we have one function remaining that are now trying to update a non-existent local state: `this.addNewGrocery`. In the process above, we already wrote an action creator to handle this action, so let's connect our `GroceryPageContainer` to use this action creator instead!

Add the following code *below* your `mapStateToProps` and *above* your `export default` statement:

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
    addNewGrocery: (grocery) => dispatch(addNewGrocery(grocery))
  }
}
```

Similar to `mapStateToProps`, this tells `connect()` that we want to add a new prop to our `GroceryPageContainer`: `this.props.addNewGrocery`. This time, we're adding a function to our props rather than an array of data. When we call `this.props.addNewGrocery` inside our component and give it a `grocery` object as a parameter, we want it to `dispatch` our `addNewGrocery` action creator with Redux. You'll notice that in the same way we passed `state` in to `mapStateToProps`, we are passing `dispatch` in to `mapDispatchToProps` so it can actually dispatch those actions to our reducer.

Now that we've centralized this functionality with Redux, we can remove the following local function from inside our `GroceryPageContainer` component:

```javascript
addNewGrocery(grocery) {
  const newGroceries = this.state.groceryList.concat(grocery)

  this.setState({
    groceryList: newGroceries
  })
}
```

Don't forget to also remove the `bind`ing of this function from our constructor!

We will also want to update the place using this function by updating our render as follows:

```javascript
render() {
  return(
    <div>
      <h1>Grocery List React</h1>
      <GroceryFormContainer
        addNewGrocery={this.props.addNewGrocery}
        groceryList={this.props.groceryList}
      />
      <GroceryListContainer
        groceries={this.props.groceryList}
      />
    </div>
  )
}
```

Fun fact: if for some reason we choose not to supply `connect()` with our own `mapDispatchToProps` function, it will default to just providing us with `dispatch` through the container's props (so that we could call `this.props.dispatch` inside our container component).

#### A `connect()` Caveat

We will always need to give `connect()` a parameter for `mapStateToProps` and `mapDispatchToProps`. In most cases, we will be passing in some function that we have defined in our container file. If for some reason you don't need `mapStateToProps` or `mapDispatchToProps`, you need to pass in `null` as follows:

```javascript
export default connect(
null,
mapDispatchToProps
)(GroceryListContainer)
```

### `connect`ing to our Component

Our container component has been refactored to *use* the state and action creators through props, but doesn't yet have access to them. Now that we have set up our `mapStateToProps` and `mapDispatchToProps` functions, we need to actually use `connect()` to, well, connect those Redux functionalities with our React container component!

As we mentioned earlier, `connect()` is a bit of a tricky function to understand. To reiterate, `connect()` is a function given to us by `react-redux` which expects two parameters, `mapStateToProps` and `mapDispatchToProps`. Once it executes, the `connect()` function is going to `return` another function, which will then expect our container component as an parameter. This function will then create a *totally new component* which has everything we defined in our container *plus* access to certain pieces of our Redux code.

That's a lot to process, so let's look at some code to help us. Add the following code in at the bottom of our `GroceryPageContainer.js` file, **replacing** our original `export default GroceryPageContainer` line.

```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPageContainer)
```

This is all the code that we need in order to connect our `GroceryPageContainer` with our Redux code. This is going to export a new, connected component that is still called `GroceryPageContainer` from our file.

While dividing this into multiple lines can improve readability in the long run, what would this look like all on one line?

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(GroceryPageContainer)
```

We can see that there are two sets of parameters being passed, and therefore, two functions being invoked. As we stated initially, `connect()` is returning a second function. So we can think of breaking this down as follows:

```javascript
const reduxFunction = connect(mapStateToProps, mapDispatchToProps)
export default reduxFunction(GroceryPageContainer)
```

So `connect()` gives us a new function, which then gets run with our `GroceryPageContainer` as its parameter. On a technical note, we should know that this second function does not actually change our written class, it creates a new one that wraps around our existing container component!

Now that we have used our `connect()` function to hook our container component up with Redux, we should be able to navigate back to our page and see that it is once again functional. Hooray!

Our final code should be as follows:

```javascript
// modules/groceries.js

const initialState = {
  groceryList: [],
  name: ''
}

const groceries = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROCERY:
      const newGroceries = state.groceryList.concat(action.grocery)
      return {...state, groceryList: newGroceries }
    default:
      return state
  }
}

const ADD_GROCERY = 'ADD_GROCERY'

const addNewGrocery = grocery => {
  return {
    type: ADD_GROCERY,
    grocery
  }
}

export {
  addNewGrocery,
  groceries
}
```

```javascript
// containers/GroceryPageContainer.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewGrocery } from '../modules/groceries'

import GroceryFormContainer from './GroceryFormContainer'
import GroceryListContainer from './GroceryListContainer'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer
          addNewGrocery={this.props.addNewGrocery}
          groceryList={this.props.groceryList}
        />
        <GroceryListContainer
          groceries={this.props.groceryList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewGrocery: (grocery) => dispatch(addNewGrocery(grocery))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPageContainer)
```

### Wrapping Up our `GroceryPageContainer`

We have successfully refactored our `GroceryPageContainer` to utilize Redux with the following steps:

- Replaced our component's local `state` with our reducer's `initialState` in `modules/groceries.js`
- Replaced our component's class functions with action creators in `modules/groceries.js`
- Built out our reducer to update our state based on the actions dispatched by our action creators
- Defined `mapStateToProps` to give our `GroceryPageContainer` access to the `groceryList` in state
- Defined `mapDispatchToProps` to give our `GroceryPageContainer` access to our `addNewGrocery` action creator
- Used `connect()` to connect our `GroceryPageContainer` with `mapStateToProps` and `mapDispatchToProps`

We have fully refactored our `GroceryPageContainer`, and can navigate back to our page to see it fully functioning again. Great job! To really see the benefits of centralized state with Redux, however, we'll need to fully Redux-ify our application. So, let's move on to our `GroceryFormContainer` to hook that up to Redux as well.

## Refactoring our `GroceryFormContainer`

Looking at our `GroceryFormContainer`, we can see that it has an initial local state that includes `name`, which we have already added into our reducer's `initialState`. So let's go ahead and connect our `GroceryFormContainer` with the store so it can access the store's `name`.

We'll start by writing our `mapStateToProps` function above the `export default GroceryFormContainer` statement:

```javascript
const mapStateToProps = (state) => {
  return {
    name: state.groceries.name
  }
}
```

We can see that we have four functions defined in our `GroceryFormContainer`: `calculateNewId`, `handleSubmit`, `handleNameChange`, and `clearForm`. We can disregard `calculateNewId` as we will be keeping it right where it is: this function is simply calculating the id of the next grocery, since we're not persisting our data to a database that would do this automatically for us. `handleSubmit`, `handleNameChange`, and `clearForm`, however, we will want to update to use Redux!

Let's add a `handleNameChange` action and action creator first. In our `modules/groceries.js`, add the following code:

```javascript
const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'

const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}
```

Then, in our `groceries` reducer, add the following additional `case` right below the others but above our `default`, so our reducer knows what to do when it receives that type of action. Note that any time we use the ellipses `...` on their own line, we're referring to code we left out for brevity:

```javascript
const groceries = (state = initialState, action) => {
  switch(action.type) {
    ...
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    default:
      return state
  }
}
```

The above will update the state's `name` to our new name. Finally, let's get started on our `mapDispatchToProps` to give our container access to this Redux action creator. Add the following right above your `export default GroceryFormContainer` statement:

```javascript
const mapDispatchToProps = (dispatch) => {
  handleNameChange: (event) => { dispatch(handleNameChange(event)) }
}
```

As we can see, we're actively handing our `event` *through* our `mapDispatchToProps` to our `handleNameChange` action creator. It's because we're doing this that we'll be able to call on `event.target.value` inside of our action creator!

Let's do the same with our `clearForm` function. Add the following action type and action creator into `modules/groceries.js`:

```javascript
const CLEAR_FORM = 'CLEAR_FORM'

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}
```

And the following `switch` `case` into our reducer, to update our state's `name` to be empty again when we clear our form:

```javascript
const groceries = (state = initialState, action) => {
  switch(action.type) {
    ...
    case CLEAR_FORM:
      return {...state, name: ''}
    default:
      return state
  }
}
```

And finally, add this action creator into our `mapDispatchToProps` as well. This one won't need any extra information to update state, so it won't need any arguments:

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    clearForm: () => dispatch(clearForm())
  }
}
```

Look back to be sure you've removed the following local state from our `GroceryFormContainer`:  

```javascript
this.state ={
  name: ''
}
```  

We have now moved any necessary functions from our `GroceryFormContainer` into our `modules/groceries.js`, so let's refactor our `GroceryFormContainer` to use those new action creators.

### Connecting `GroceryFormContainer` with Redux

First, let's import and export everything we need to. At the bottom of `modules/groceries.js`, ensure your full `export` statement looks like this:

```javascript
export {
  addNewGrocery,
  clearForm,
  groceries,
  handleNameChange
}
```

And your `import` at the top of `GroceryFormContainer.js` should look like this:

```javascript
import { connect } from 'react-redux'
import { clearForm, handleNameChange } from '../modules/groceries'
```

Next, let's `connect` our component by replacing `export default GroceryFormContainer` with the below:

```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryFormContainer)
```

Now that we've done that, we can use these functions instead the event handlers that deal with React's built-in state! Let's delete `clearForm` and `handleNameChange` from our container component, and also remove their bindings in our constructor. Finally, we have a few updates to make to use our new Redux pieces:

1. We should update our `handleFormSubmit` to use our new `clearForm` function and `name` from the store:

```javascript
handleFormSubmit(event) {
    event.preventDefault()
    const newId = this.calculateNewId()

    const newGrocery = {
      id: newId,
      name: this.props.name
    }

    this.props.addNewGrocery(newGrocery)

    this.props.clearForm()
}
```

2. We should update our handler function and state that's being passed into `GroceryInputField` in our render:

```javascript
...
<GroceryInputField
    handleChange={this.props.handleNameChange}
    name={this.props.name}
/>
...
```

Phew! We have now fully refactored our `GroceryFormContainer` to use Redux as well! *Our app should once again be functional* and final code files should look like the below:

```javascript
// containers/GroceryFormContainer.js

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clearForm, handleNameChange } from '../modules/groceries'

import GroceryInputField from '../components/GroceryInputField'

class GroceryFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  calculateNewId() {
    if (this.props.groceryList.length === 0) {
      return 1
    } else {
      const groceryIds = this.props.groceryList.map(grocery => grocery.id)
      return Math.max(...groceryIds) + 1
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const newId = this.calculateNewId()

    const newGrocery = {
      id: newId,
      name: this.props.name
    }

    this.props.addNewGrocery(newGrocery)

    this.props.clearForm()
  }


  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <GroceryInputField
          handleChange={this.props.handleNameChange}
          name={this.props.name}
        />
        <input type="submit" value="Add To List" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.groceries.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    clearForm: () => dispatch(clearForm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryFormContainer)
```

```javascript
// modules/groceries.js

const initialState = {
  groceryList: [],
  name: ''
}

const groceries = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROCERY:
      const newGroceries = state.groceryList.concat(action.grocery)
      return {...state, groceryList: newGroceries }
    case CLEAR_FORM:
      return {...state, name: ''}
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    default:
      return state
  }
}

const ADD_GROCERY = 'ADD_GROCERY'

const addNewGrocery = grocery => {
  return {
    type: ADD_GROCERY,
    grocery
  }
}

const CLEAR_FORM = 'CLEAR_FORM'

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'

const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

export {
  addNewGrocery,
  clearForm,
  groceries,
  handleNameChange
}
```

## The benefits of Redux

Okay, so we've fully transferred our app to use Redux. That's great....but it doesn't look much different yet in terms of organization or data flow! So far, we've updated both of our containers to use Redux, but we're not seeing why it's any better than what we had before. We're still having to pass just as much information through props from our `GroceryPageContainer` to our `GroceryListContainer` and `GroceryFormContainer` as we had to before. So let's update this even more to actually use Redux to minimize the passing of props between our components!

Right now, we are still passing both `addNewGrocery` and `groceryList` as `props` from our `GroceryPageContainer` to our `GroceryFormContainer`. Before, this was necessary, since `GroceryPageContainer` needed to be aware of any and all updates to our grocery list. Sure, with only three containers, this isn't a huge deal. But what if we were building a much larger app? This would get really unwieldy, and *quickly*.

Alternatively, it would be nice to not have to pass this function and data through `props` at all. Rather than pass them down from `GroceryPageContainer`, let's connect them with our `GroceryFormContainer` directly!

Let's delete the props that we're passing down to `GroceryFormContainer` inside of our `GroceryPageContainer`'s `render` method. We can also delete the `addNewGrocery` action creator from our `mapDispatchToProps`. We'll notice that this means our `mapDispatchToProps` for our `GroceryPageContainer` is now empty! We talked earlier about the fact that when we don't need either `mapStateToProps` or `mapDispatchToProps`, we can leave them out of our file, but we need to pass `null` in to our `connect` function. We will do that below. Let's finalize our updates to the `GroceryPageContainer` by making sure it matches the following code:

Here's what it should look like:

```javascript
// containers/GroceryPageContainer.js
...
  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer />
        <GroceryListContainer
          groceries={this.props.groceryList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}

// removed mapDispatchToProps altogether

export default connect(
  mapStateToProps,
  null
)(GroceryPageContainer)
```

Then, let's connect our `GroceryFormContainer` to this data and action creator directly so it still has access to these things. Update our `import` statement, `mapStateToProps`, and `mapDispatchToProps` in `GroceryFormContainer` as follows:

```javascript
// containers/GroceryFormContainer.js
...

import { clearForm, handleNameChange, addNewGrocery } from '../modules/groceries'

...

const mapStateToProps = (state) => {
  return {
    name: state.groceries.name,
    groceryList: state.groceries.groceryList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewGrocery: (grocery) => dispatch(addNewGrocery(grocery)),
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    clearForm: () => dispatch(clearForm())
  }
}
...
```

Here, we added the `groceryList` into our `mapStateToProps`. Then, we simply moved the `addNewGrocery` action creator to the `mapDispatchToProps` of `GroceryListContainer` instead of `GroceryFormContainer`! This is the promise of Redux: no more passing data and functions through multiple layers of React components!

Conveniently, because we access these Redux items through `props`, and since we've been consistent with our naming, we don't have to make any updates to the way we are calling on them in our container component.

### Refactoring our `GroceryListContainer`

We can see in our `GroceryPageContainer` that we're no longer passing props down to `GroceryFormContainer`, but we're still passing them down to our `GroceryListContainer`. We now know that we can instead connect our `GroceryListContainer` directly to our store, so let's go ahead and do that!

The prop that we're handing down to our `GroceryListContainer` from `GroceryPageContainer` is `this.props.groceryList`, as shown below:

```js
<GroceryListContainer
  groceries={this.props.groceryList}
/>
```

Let's instead give our `GroceryListContainer` *direct* access to that `groceryList` the same way we originally set up `GroceryPageContainer`.

We know that our `GroceryPageContainer` is accessing the `groceryList` through `mapStateToProps`:

```js
const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}
```

So let's add that same code in to the bottom of our `GroceryListContainer` (above our `export` statement as usual). We will need to also change our `render` to reference this new prop name:

```js
render() {
  let groceries = this.props.groceryList.map(grocery => {
    ...
  })
  ...
}
```

We can now think about our `GroceryListContainer`'s `mapDispatchToProps`. Our first thought can be the following: are we passing any functions down as props from `GroceryPageContainer` to `GroceryListContainer`? The answer is, **no**: so we actually don't have a use for `mapDispatchToProps` in this component!

Just like before, when we passed in `null` in place of `mapDispatchToProps` in our `GroceryPageContainer`, we can do the same here. Let's finalize our updates to the `GroceryListContainer` by making sure it matches the following code:

```js
// containers/GroceryListContainer.js
...

import { connect } from 'react-redux'

...

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}

export default connect(
  mapStateToProps,
  null
)(GroceryListContainer)
```

And finally, we can remove the props that we were handing down through our `GroceryPageContainer`:

```js
// containers/GroceryPageContainer.js
...
  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer />
        <GroceryListContainer />
      </div>
    )
  }
}
```

Now that we do this, however, we notice that we no longer need access to `state.groceries.groceryList` inside of our `GroceryPageContainer`! This component is only responsible for rendering various other components on the page, and doesn't need to access any action creators or data from state directly. So at this point, now that we have directly connected both `GroceryListContainer` and `GroceryFormContainer` as needed, we can *disconnect* `GroceryPageContainer` by making the entire file match the below:

```js
// containers/GroceryPageContainer.js

import React, { Component } from 'react'

import GroceryListContainer from './GroceryListContainer'
import GroceryFormContainer from './GroceryFormContainer'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer />
        <GroceryListContainer />
      </div>
    )
  }
};

export default GroceryPageContainer
```

### Wrapping Up

Not only have we implemented Redux in both our `GroceryListContainer` and `GroceryFormContainer`, but we have been able to prevent passing of unnecessary props by connecting the proper container components with our Redux code. This will only become more beneficial as our application expands to include many different containers. We're now ready to start building our own apps with React and Redux!

### Resources

- [Redux Docs: Using Object Spread Operator](https://redux.js.org/recipes/using-object-spread-operator)
- [React-redux API Docs](https://github.com/reduxjs/react-redux/blob/master/docs/api.md)
- [Redux's Mysterious Connect Function](https://medium.com/mofed/reduxs-mysterious-connect-function-526efe1122e4)
- [React-redux "connect" explained](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)
