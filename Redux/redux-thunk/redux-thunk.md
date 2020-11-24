At this point, you should have implemented your first `react-redux` application, which is itself a great feat. `react-redux` gives us amazing tools for state management in our front end applications, allowing for more organized development with larger applications.

However, our `react-redux` apps often do not exist in a vacuum, and many applications have to implement functions that interact with APIs asynchronously. This behavior in turn adds a degree of complexity to our react applications. Luckily for us, `react-redux` was developed with asynchronous functionality in mind, and we can use their `redux-thunk` middleware to manage this complexity.

## Learning Objectives**

- Review the unique nature of asynchronous JavaScript
- Define a `thunk` and assert how it can help us with development of react-redux applications.
- Integrate thunk middleware

## Getting Set Up

To get set up, run the following:

```sh
et get redux-thunk
cd redux-thunk
yarn install
yarn start
```

When visiting `http://localhost:8080`, we should continue to see our reduxified version of our React Grocery List application that we made in [Implementing Redux in React][implementing-redux-in-react]. You should also see a new "Set Reminder for Kale" button as well.

We shouldn't see any errors in our console, and the app should allow us to add new groceries via the `GroceryFormContainer` and list those groceries on the page.

## Adding Asynchronous Code to Our React Redux Application

Recall that in asynchronous JavaScript programs, we can schedule code to be run in the future. For instance, we could set a simple 30 second timer on our webpage. While the timer is running, we still want to be able to click around our page before the expires.

```js
console.log("Starting timer.")
// Say "Timer is done" three seconds from now.
setTimeout(function() {
  console.log("Timer is done!")
}, 3000)
// Say a message that is called after the setTimeout is invoked, but completes before the asynchronous function is done.
console.log("This message should log while the timer is running.")
```

`setTimeout` sets a timer which executes a function or specified piece of code after the timer expires.

This is a pretty standard example of asynchronous JavaScript, but what if we want to implement similar functionality in a more complex React application?

We will want to manage the *state* of the async process in our `store` so that we can implement this type of functionality. Most commonly, for instance, while our `setTimeout` timer is "ticking", we may wish to have a loading icon displayed. This would let the user know that the asynchronous process is still being performed, like the one below.

![redux-loading-image][redux-loading-image]

In order to make this happen, we will need to manage our state accordingly:

1. Dispatch an action to update state indicating that our timer has started. This should render our loading icon.
1. Start the timer (no action is dispatched)
1. Once the timer is complete, dispatch an action to say that our time finished successfully, and update the store with any data returned from our callback.
1. With our new state, we should alert the user to get some kale, and remove the loading icon from the page.

Now that we have a plan, let's first start with a simpler implementation of these asynchronous action creators. We will also configure the related reducer.

## Setting Up Our Synchronous Actions and Reducers

If we consider our GroceryList application, as a user, we may want to set a reminder so that we don't forget to grab some delicious kale. We'll house the React logic for our timer in a new `GroceryReminderContainer`

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

class GroceryReminderContainer extends Component {
  constructor(props) {
    super(props)

    this.reminderClick = this.reminderClick.bind(this)
  }

  reminderClick() {
    // the method that will start the timer and update state accordingly
  }

  render() {
    let reminderStatus
    // Show that the timer is running once the reminder button has been clicked
    if (this.props.isRunning) {
      reminderStatus = <img src="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif" alt="loading-icon" height="42" width="42"></img>
    }
    // When state has been updated correctly, will give an alert to the user.
    if (this.props.sendAlert) {
      alert("Don't forget to get some kale!")
    }

    return(
      <div id="reminder-group">
        <div>
          {reminderStatus}
        </div>

        <button onClick={this.reminderClick}>
          Set Reminder for Kale
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // we'll need to listen for the timer completing, so that we can alert the user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // the action creator we use in `reminderClick()` will need to be defined here.
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryReminderContainer)
```

Great! The bones of our react app are in. Right now, our `mapStateToProps` and `mapDispatchToProps` (which help us manage and subscribe to the state of our store) simple return empty objects, which is fine to begin. On to the actions we wish to dispatch, and the associated reducer.

```js
// initial state
const initialState = {
  isRunning: false,
  sendAlert: false
}

// REDUCER
const timer = (state = initialState, action) => {
  switch(action.type) {
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
        sendAlert: false
      }
    case END_TIMER_SUCCESSFULLY:
      return {
        ...state,
        isRunning: false,
        sendAlert: true
      }
    default:
      return state
  }
}

// ACTIONS
// tells us that the the timer has begun and is running
const START_TIMER = 'START_TIMER'

const startTimer = () => {
  return {
    type: START_TIMER
  }
}

// tells us that the timer has completed successfully
const END_TIMER_SUCCESSFULLY = 'END_TIMER_SUCCESSFULLY'

​const endTimerSuccessfully = () => {
  return {
    type: END_TIMER_SUCCESSFULLY,
  }
}

// export in order to have access in our components
export {
  timer,
  startTimer,
  endTimerSuccessfully
}
```

*Note that we changed the spacing style of the returns in our reducer to accommodate objects with more than one property.*

The `timer` reducer has also been added to your `rootReducer` file for you.

Great! We are ready to start making this work...or are we? If we consider how our actions will be dispatched, we run into an issue. We can dispatch the `startTimer` action creator, which will update our state to say that `state.timer.isRunning` is true. But, when do we dispatch `endTimerSuccessfully`? It has to be dependent on the completion of the `setTimeout`, which means we will need `dispatch` within the scope of a `setTimeout` function.

It sounds like we will need to dispatch an action creator that has a `setTimeout` in it, but we run into another issue: our action creators should be returning simple action objects. But only once our asynchronous behavior resolves can we return the action. The action creator should essentially run when the time defined in `setTimeout` has elapsed. Vanilla Redux is simply not setup to handle this efficiently out of the box.

But let's see how we might set this up initially given our current understanding. Let's create a function that would help us with this in our `timer.js` file. This function is an action creator that will in turn, invoke other action creators:

```js
const startTimerWithTimeout = () => {
  return dispatch => {
    dispatch(startTimer())

    return setTimeout(() => {
      dispatch(endTimerSuccessfully())
    }, 3000)
  }
}
```

This is a start, but Redux expects `startTimerWithTimeout` to return an action, and we can't do that until the timer has elapsed. We have to wait for our timer to resolve before we have the correct data to send across to my Dispatch method. Redux best practices prescribe that we use "middleware" to help us change the rules of Redux to implement the intended functionality. Enter `redux-thunk`.

## Redux-Thunk Middleware

Middleware can be a nebulous term, with its meaning changing from context to context. In the case of Redux, middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. `redux-thunk` middleware will allow our action creators to return a function (rather than an action) that has access to `dispatch` (which in turn gives us the ability to view state or dispatch actions).

But **what's a thunk?**. The `redux-thunk` [docs][redux-thunk-docs] have a great example:

A **thunk** is a function that wraps an expression to delay its evaluation.

```js
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2
```

Knowing this, your `redux-thunk` middleware allows our action creators to return a function that can access the all-important `dispatch` function, and where and when we invoke `dispatch` can be left up to us! Let's walk through this example together to clarify this point.

`redux-thunk` has been added to your `package.json` for you, but you can also add it in your own applications by running `yarn add redux-thunk`.

Let's add it to our Redux store in the `configureStore` file. We'll need to make sure to import `applymiddleware` from `redux`, and `thunkMiddleware` from `redux-thunk`.

```js
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './rootReducer'

let configureStore = () => {
  let store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )
  return store
}

export default configureStore
```

Fortunately, our `createStore` method allows us to pass in an enhancer, such as our `thunkMiddleware` which will give us our `thunk` functionality.

## Updating Our App with Asynchronous Action Creators

Now that we have `redux-thunk` built into our application, let's use utilize it in our `timer.js` file.

```js
const initialState = {
  isRunning: false,
  sendAlert: false
}

// REDUCER
const timer = (state = initialState, action) => {
  switch(action.type) {
    case START_TIMER:
      return { ...state,
           isRunning: true,
           sendAlert: false

      }
    case END_TIMER_SUCCESSFULLY:
      return { ...state,
           isRunning: false,
           sendAlert: true
      }
    default:
      return state
  }
}

// ACTIONS
const START_TIMER = 'START_TIMER'

const startTimer = () => {
  return {
    type: START_TIMER
  }
}

const END_TIMER_SUCCESSFULLY = 'END_TIMER_SUCCESSFULLY'

const endTimerSuccessfully = () => {
  return {
    type: END_TIMER_SUCCESSFULLY
  }
}

// Asynchronous action creator
const startTimerWithTimeout = () => {
  return dispatch => {
    dispatch(startTimer())

    return setTimeout(() => {
      dispatch(endTimerSuccessfully())
    }, 3000)
  }
}

export {
  timer,
  startTimerWithTimeout
}
```

With `redux-thunk`, `startTimerWithTimeout` now returns a function that has access to dispatch, so that we can dispatch once our asynchronous code has completed. `redux-thunk` knows how to turn thunk async actions into regular actions when all is completed, and our thunks can make multiple calls to `dispatch` allowing us more control over our code. In this case, our thunk dispatches an action for starting the timer, and then schedules the dispatching of an action when the timer completes. So, as a result of calling `startTimerWithTimeout`, we will actually fire two actions over time.

We are also only exporting `startTimerWithTimeout` because it will in turn dispatch our two other synchronous actions, rather than calling on them directly from our container. Those action creators do not need to be exposed to the outside world.

Finally, let's hook this up to our React app.

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startTimerWithTimeout } from '../modules/groceries'

class GroceryReminderContainer extends Component {
  constructor(props) {
    super(props)

    this.reminderClick = this.reminderClick.bind(this)
  }

  reminderClick() {
    this.props.startTimerWithTimeout()
  }


  render() {
    let reminderStatus

    if (this.props.isRunning) {
      reminderStatus = <img src="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif" alt="loading-icon" height="42" width="42"></img>
    }

    if (this.props.sendAlert) {
      alert("Don't forget to get some kale!")
    }

    return(
      <div id="reminder-group">
        <div>
          {reminderStatus}
        </div>

        <button onClick={this.reminderClick}>
          Set Reminder for Kale
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRunning: state.timer.isRunning,
    sendAlert: state.timer.sendAlert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimerWithTimeout: () => dispatch(startTimerWithTimeout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryReminderContainer)
```

Our react-redux application should now allow us to set a reminder to grab some kale while at the grocery store!

## Wrapping Up

To recap, we have now:

- Explored asynchronous action creators with `redux-thunk`
- Applied `redux-thunk` to our redux middleware
- Implemented an asynchronous action creator in our react application.

This is just the beginning of our use of `redux-thunk`. By exploring it in smaller example with `setTimeout`, we're set up to utilize it in the place where it is often applied the most. Later, we'll study how do handle asynchronous HTTP requests with thunks and `fetch`.

[implementing-redux-in-react]:https://learn.launchacademy.com/lessons/implementing-redux-in-react
[redux-loading-image]:https://s3.amazonaws.com/horizon-production/images/redux/redux-loading-image-small.png
[redux-thunk-docs]:https://github.com/reduxjs/redux-thunk
