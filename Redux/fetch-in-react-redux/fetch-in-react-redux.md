With the help of `redux-thunk`, we have learned that we can change how state management is organized so that we can handle asynchronous functionality within a redux application. Equipped with this knowledge, we can apply `redux-thunk` in one of its most common use cases: asynchronous API requests. Further, we will be able to finally put together a full-stack web application that utilizes both react-redux and Rails.

## Learning Objectives

- Review the use of fetch in a simple react application.
- Implement fetch with a `redux-thunk`-based action creator
- Discuss how our redux state management changes when a backend API is being utilized
- Construct a full-stack react-redux application

## Getting Set Up

To get set up, run the following:

```sh
et get fetch-in-react-redux
cd fetch-in-react-redux
yarn install
bundle install
yarn start
```

In a second tab once this is done, you will need to run the following to start your Rails application:

```sh
bundle exec rake db:drop db:create db:migrate db:seed
rails s
```

## Re-familiarizing Ourself with the Rails Backend

A Rails backend has been provided for you. A Postgres database should have been created with a `groceries` table. A `Grocery` model must have a name, but otherwise does not have any attributes. Most relevant to what we'll discuss in this article, we have provided a a `Api::V1::GroceriesController`, which will serve as an endpoint that our react application can make requests to. Take a moment to poke around the Rails application and familiarize yourself with the codebase.

```ruby
class Api::V1::GroceriesController < ApplicationController
  def index
    render json: Grocery.all
  end

  def create
    grocery = Grocery.new(grocery_params)
    if grocery.save
      render json: grocery, status: :created
    else
      render json: { errors: grocery.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def grocery_params
    params.require(:grocery).permit(:name)
  end
end
```

Additionally, the entry point for our React application can be found at `app/javascript/packs/application.js` which will use the react files from our `app/javascript/src` folder.

When visiting `http://localhost:3000`, we should see our React Redux Grocery List application that we made in [Implementing Redux in React][implementing-redux-in-react]. If you had done the work in the Redux Thunk article, we will be putting that repository aside so that we can focus on implementing our full-stack CRUD application.

## Revisiting Our Application with Fetch

At the moment, our application's state is contained within our redux `store`, but once the user navigates away from our application, or refreshes the page, we will lose our list of groceries in state. It's time to hook up our react application with the backend so that user data can be persisted.

Let's focus first on rendering any groceries that are currently in our database. If you have followed the setup instructions, we should have four groceries in our database based on our `db/seeds.rb` file.

Normally, in order to retrieve these groceries from the `Api::V1::GroceriesController`, we would create a `fetch` request in the `componentDidMount` of the `GroceryListContainer`, like so:

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grocery from '../components/Grocery'

class GroceryListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      groceries: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/groceries.json')
    .then(response => response.json())
    .then(groceriesData => {
      this.setState({groceries: groceriesData})
    })
  }

  render() {
    let groceries = this.props.groceryList.map((grocery) => {
      let id = grocery.id
      let name = grocery.name

      return (
        <Grocery
          key={id}
          name={name}
        />
      )
    })

    return (
      <ul>
        {groceries}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // groceryList: state.groceries.groceryList
  }
}

export default connect(
  mapStateToProps,
  null
)(GroceryListContainer)
```

Note that in order to get this to work we would need to disconnect our `groceries` state from the Redux store, and add built-in react state to this component. This defeats the purpose of `redux` altogether, and we haven't even begun to account for adding new groceries. We should be maintaining the state of our React application in the redux store with `reducers`, which means that we will need to `dispatch` an `action` in the `.then` of our fetch request in order to implement this functionality correctly.

One way that we can consolidate our functionality is to move our fetch request into our `modules` folder, within one of the asynchronous action creators that was discussed when learning `redux-thunk`, which helps us manage our asynchronous code in the first place by allowing us to return functions from our action creators rather than action objects. From now on, we will dispatch an asynchronous action creator in `modules/groceries` to handle our fetch requests, in order to centralize our state. This is also better design and practice. It separates the logic (model) from the component (view).

Let's create a new thunk action creator called `getGroceries` in `modules/groceries`. We will also need to update our `groceries` `initialState` and reducer accordingly. We're going to need to add a piece of state called `isFetching` to let our application keep track of when it's in the process of running an asynchronous fetch call. We can update all of this as follows:

```js
const initialState = {
  groceryList: [],
  name: '',
  isFetching: false
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

      // set isFetching to true just before the fetch request is called
    case GET_GROCERIES_REQUEST:
      return {...state, isFetching: true }
      // update our state with our groceries and update state to say we are no longer fetching
    case GET_GROCERIES_REQUEST_SUCCESS:
      return {...state,
        groceryList: action.groceries,
        isFetching: false
      }
    default:
      return state
  }
}
...

const GET_GROCERIES_REQUEST = 'GET_GROCERIES_REQUEST'

const getGroceriesRequest = () => {
  return {
    type: GET_GROCERIES_REQUEST
  }
}

const GET_GROCERIES_REQUEST_SUCCESS = 'GET_GROCERIES_REQUEST_SUCCESS'

const getGroceriesRequestSuccess = groceries => {
  return {
    type: GET_GROCERIES_REQUEST_SUCCESS,
    groceries
  }
}

const getGroceries = () => {
  // give us access to `dispatch` inside our fetch
  return (dispatch) => {
    // dispatch an action to update state and say that we are currently waiting for the fetch response
    dispatch(getGroceriesRequest())

    // return a fetch request that has access to dispatch in .then
    return fetch('/api/v1/groceries.json')
    .then(response => response.json())
    .then(groceries => {
      // update state with the groceries returned from the Api::V1::GroceriesController, and update state to say we are no longer fetching
      dispatch(getGroceriesRequestSuccess(groceries))
    })
  }
}

export {
  groceries,
  addNewGrocery,
  clearForm,
  getGroceries,
  handleNameChange
}
```

Let's examine our `getGroceries` method first. We return a `redux-thunk` function that has access to `dispatch`, so that we can use `dispatch` within our `fetch`. Within the `thunk`, we first dispatch `getGroceriesRequest`, so that we can record that we are currently awaiting a response from our fetch request. We won't actually have our React page reliant on this information, but one could implement a loading status on the page (such as a spinning wheel), or have other functionality reliant on the state of `isFetching` in future applications. We will then call `fetch` which returns a promise object to wait for. Once the response comes back, we can parse it, and then dispatch `getGroceriesRequestSuccess`, which will add it to our `groceries` state and set `isFetching` to `false`.

Now let's hook this up to our React app:

```js
// GroceryListContainer

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getGroceries } from '../modules/groceries'

import Grocery from '../components/Grocery'

class GroceryListContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getGroceries()
  }

  render() {
    let groceries = this.props.groceryList.map((grocery) => {
      let id = grocery.id
      let name = grocery.name

      return (
        <Grocery
          key={id}
          name={name}
        />
      )
    })

    return (
      <ul>
        {groceries}
      </ul>
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
    getGroceries: () => dispatch(getGroceries())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryListContainer)
```

Our `componentDidMount` now calls our asynchronous (thunk) action creator `getGroceries`, in order to retrieve the groceries from our database and set them in Redux state. We should now see our groceries from our database render on the page!

## Handle Errors with Fetch and Redux

As is sometimes the case when we make an external request to an API, things can go wrong. Our request could timeout, or a breaking 500 error could be received from our backend Rails server. Whatever the issue, we want to make sure that we capture the error and notify our user accordingly. (Notifying a user of a success is already done: the page loads as intended and the user sees the information they requested).

In order to accomplish this goal, we will likely want to render a small message at the top of the screen when an error occurs, and update our actions and reducers accordingly.

Let's begin with the actions and reducer. For this, we will want a separate reducer that will handle the state of whether or not we will show an alert message in `modules/alertMessage.js`.

```js
// modules/alertMessage.js

const initialState = {
  message: ""
}

const alertMessage = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ALERT_MESSAGE:
      return {
        ...state,
        message: action.alertMessage
      }
    case CLOSE_ALERT_MESSAGE:
      return initialState
    default:
      return state
  }
}

export { alertMessage }
```

Here, we say that our initial state will be an empty string, until such a time as we receive a `DISPLAY_ALERT_MESSAGE` action, wherein we will update our state with the custom message. We can also clear the message with `CLOSE_ALERT_MESSAGE`.

In the same file, let's create the actions and action creators necessary to update our `store`.

```js
// modules/alertMessage
const DISPLAY_ALERT_MESSAGE = 'DISPLAY_ALERT_MESSAGE'

const displayAlertMessage = alertMessage => {
  return {
    type: DISPLAY_ALERT_MESSAGE,
    alertMessage
  }
}
const CLOSE_ALERT_MESSAGE = 'CLOSE_ALERT_MESSAGE'

const closeAlertMessage = () => {
  return {
    type: CLOSE_ALERT_MESSAGE
  }
}

export {
  alertMessage,
  displayAlertMessage,
  closeAlertMessage
}

```

Do not forget to add our new reducer to our `combineReducers` function.

```js
import { combineReducers } from 'redux'

import { groceries } from '../modules/groceries'
import { alertMessage } from '../modules/alertMessage'

const rootReducer = combineReducers({
  groceries,
  alertMessage
})

export default rootReducer
```

Note that since this is a separate reducer from `groceries`, we will be able to invoke `alertMessage` whenever we wish to show a message on the page. If our app were to grow, we would be able to repurpose this functionality for other resources and features as well.

Finally, let's create an `AlertMessage` component, and conditionally render it at the top of our `GroceryList` application if we have set up an alert in state.

```js
// components/AlertMessage.js
import React from 'react'

const AlertMessage = props => {
  return(
    <div className={`alert-box`}>
      {props.message}
      <div onClick={props.closeAlertMessage} className='close'>&times;</div>
    </div>
  )
}

export default AlertMessage
```

```js
// GroceryPageContainer
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { closeAlertMessage } from '../modules/alertMessage'

import GroceryFormContainer from './GroceryFormContainer'
import GroceryListContainer from './GroceryListContainer'
import AlertMessage from '../components/AlertMessage'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let alertMessageDiv

    if (this.props.alertMessage){
      alertMessageDiv =
      <AlertMessage
        message={this.props.alertMessage}
        closeAlertMessage={this.props.closeAlertMessage}
      />
    }

    return(
      <div>
        {alertMessageDiv}
        <h1>Grocery List React</h1>
        <GroceryFormContainer />
        <GroceryListContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alertMessage: state.alertMessage.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeAlertMessage: () => dispatch(closeAlertMessage())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPageContainer)
```

Our message is ready to use, in addition to our action creators and reducer. In the `GroceryPageContainer`, we've set things up so that `AlertMessage` only renders to the screen if our state is updated to have an alert message. We've also allowed the user to close this message if they click on the close button of the `AlertMessage`, which is set to trigger its own action creator. But, we still need to dispatch `displayAlertMessage` if things go wrong in our fetch request.

If we head back to our async action creator in the `groceries` module, we can first import, and then put it to work there. Note that we don't want to use `.catch`, because that will also catch *any* error in the dispatch and resulting render. Instead, we'll check if the response is `ok`, and decide what we want to do from there.

```js
import { displayAlertMessage } from './alertMessage.js'

...

const getGroceries = () => {
  return dispatch => {
    dispatch(getGroceriesRequest())

    return fetch('/api/v1/groceries.json')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
       dispatch(displayAlertMessage("Something went wrong."))
       return { error: 'Something went wrong.' }
      }
    })
    .then(groceries => {
      if(!groceries.error) {
        dispatch(getGroceriesRequestSuccess(groceries))
      }
    })
  }
}
```

Now, if something goes wrong in our request, we can alert the user. After dispatching `displayAlertMessage`, we need to `return { error: 'Something went wrong.' }`. This is because no matter what, once the first `.then` resolves (whether the fetch was successful or not), it will move on to our next `.then`. Therefore, we need to be able to run a conditional to check whether this was successful or not (`if(!groceries.error)`).

We have one remaining issue however: `isFetching` in our `groceries` state is still set to `true`. We will want to add one additional action creator called `getGroceriesRequestFailure` in the `groceries` module to ensure that we update our `groceries` state in the event of a fetch request failure

```js
// modules/groceries

const groceries = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROCERY:
      const newGroceries = state.groceryList.concat(action.grocery)
      return {...state, groceryList: newGroceries }
    case CLEAR_FORM:
      return {...state, name: ''}
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    // set isFetching to true just before the fetch request is called
    case GET_GROCERIES_REQUEST:
      return {...state, isFetching: true }
    // update our state with our groceries and update state to say we are no longer fetching
    case GET_GROCERIES_REQUEST_SUCCESS:
      return {...state,
        groceryList: action.groceries,
        isFetching: false
      }
    // if the fetch request fails, set isFetching to false
    case GET_GROCERIES_REQUEST_FAILURE:
      return {...state, isFetching: false }
    default:
      return state
  }
}

...

// update groceries reducer upon fetch failure
const GET_GROCERIES_REQUEST_FAILURE = 'GET_GROCERIES_REQUEST_FAILURE'

const getGroceriesRequestFailure = () => {
  return {
    type: GET_GROCERIES_REQUEST_FAILURE
  }
}

...

const getGroceries = () => {
  return dispatch => {
    dispatch(getGroceriesRequest())

    return fetch('/api/v1/groceries.json')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        // dispatch additional action creator upon error
        dispatch(getGroceriesRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Something went wrong.' }
      }
    })
    .then(groceries => {
      if(!groceries.error) {
        dispatch(getGroceriesRequestSuccess(groceries))
      }
    })
  }
}
```

We've come quite far, and our app fully handles the retrieval of groceries for our react-redux application.

> Note: you can test out your application's reaction to a 500 error by adding the word `raise` on its own line at the top of an API controller action! To test this error handling, we could add `raise` to throw an error after line 2 of our `Api::V1::GroceriesController`. Just don't forget to remove it once you've tested the error!

## Creating new groceries with POST

We've updated our app to handle a GET fetch request, so now let's build out a POST. We'll need to return to our `GroceryFormContainer`, where the input of a new grocery happens, in order to update the submission of our form to trigger a fetch request.

First, we'll create a thunk action creator called `postGrocery` which will handle our post fetch, and then we'll refactor our existing action creator to add it to our state!

We will want to follow the same steps we did when setting up `getGroceries`, namely:

- Define a `thunk` action creator that has access to `dispatch`.
- Dispatch an action to signal that we are fetching.
- Make our fetch request.
- Dispatch an action to update our list of groceries if our fetch was successful.
- Dispatch two actions if unsuccessful: one to signal that we are no longer fetching, the other to display a message on the screen.
- Add the `thunk` to our exports.

Let's create our necessary action creators and update our reducer as needed:

```js
// modules/groceries
const groceries = (state = initialState, action) => {
  switch(action.type) {
    // added in case we wish to have behavior occur while the fetch request is being run
    case POST_GROCERY_REQUEST:
      return {...state, isFetching: true }
    // replaces "ADD_NEW_GROCERY", to update our grocery list state upon successful persistence via POST
    case POST_GROCERY_REQUEST_SUCCESS:
      const newGroceries = state.groceryList.concat(action.grocery)
      return {...state,
        groceryList: newGroceries,
        isFetching: false
      }
    case POST_GROCERY_REQUEST_FAILURE:
      return {...state, isFetching: false }
    //  ......
    default:
      return state
  }
}

const POST_GROCERY_REQUEST = 'POST_GROCERY_REQUEST'

const postGroceryRequest = () => {
  return {
    type: POST_GROCERY_REQUEST  
  }
}

// replaces ADD_GROCERY action type
const POST_GROCERY_REQUEST_SUCCESS = 'POST_GROCERY_REQUEST_SUCCESS'

// replaces addNewGrocery action creator
const postGroceryRequestSuccess = grocery => {
  return {
    type: POST_GROCERY_REQUEST_SUCCESS,
    grocery
  }
}

const POST_GROCERY_REQUEST_FAILURE = 'POST_GROCERY_REQUEST_FAILURE'

const postGroceryRequestFailure = () => {
  return {
    type: POST_GROCERY_REQUEST_FAILURE
  }
}
```

**Note:** Be sure to remove your `ADD_GROCERY` and `addNewGrocery` items as noted in the code comments above!

Let's now define the new `postGrocery` thunk which will use these action creators.

```js
// modules/groceries
const postGrocery = groceryData => {
  return dispatch => {
    dispatch(postGroceryRequest())

    return fetch(`/api/v1/groceries.json`,
      {
        method: 'POST',
        body: JSON.stringify(groceryData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(postGroceryRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
       return { error: 'Something went wrong.' }
      }
    })
    .then(grocery => {
      if(!grocery.error) {
        dispatch(postGroceryRequestSuccess(grocery))
      }
    })
  }
}

export {
  // ....
  // replaces addNewGrocery
  postGrocery
}
```

The above should be easier to follow at this point, but we still need to make sure to understand how each of our action creators are used. `postGroceryRequest` is going to be dispatched before our `POST` fetch is called, to notify state that we are fetching. Once the `POST` fetch to the `create` action in our `GroceriesController` completes, we will accept the newly persisted grocery data and dispatch `postGroceryRequestSuccess` (which replaces our old `addNewGrocery` function) to ensure that it is passed to our groceries state to be rendered on the page. As before, because `GroceryListContainer` is subscribed to our groceries in state, the newly added grocery should render on the page.

The workings of the thunk method should be somewhat familiar from our last thunk we developed. We dispatch `postGroceryRequest` to notify state that we are beginning a fetch request. We then have different action creators for request failures and success: `postGroceryRequestSuccess` and `postGroceryRequestFailure` respectively. And finally, we dispatch our `displayAlertMessage` to notify the user if the request errors.

We also notify our Rails backend that we wish to send user credentials with `credentials: 'same-origin'` and that this request contains JSON data. In addition, we ensure that the data we send is JSON data before passing it to `body`.

Our final step will be to trigger these action creators in our `GroceryFormContainer`:

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import GroceryInputField from '../components/GroceryInputField'
import { clearForm, handleNameChange, postGrocery } from '../modules/groceries'

class GroceryFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const newGroceryData = {
      grocery: {
        name: this.props.name
      }
    }

    this.props.postGrocery(newGroceryData)

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
    clearForm: () => dispatch(clearForm()),
    postGrocery: (groceryData) => dispatch(postGrocery(groceryData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryFormContainer)
```

A few things have changed:

- The new `id` of our grocery will be generated by ActiveRecord on our backend, so we have removed our `calculateNewId` method, as well as our `groceryList` from `mapStateToProps`
- We have replaced `addNewGrocery` with the new async action creator `postGrocery`, that will help us handle our fetch request.
- We have changed the import statements accordingly.

## Wrapping Up

Fully `redux`-ifying our React application has been a long journey, but with the help of some great tools and consistent design patterns, we should begin to notice patterns that continue to increase the speed of our front end development. Further, while we have increased the scope of our application with `redux`, we've vastly improved the organization of our application, which will serve us well as we begin to scale. Now that we have also integrated our external requests with `fetch`, we've solidified our understanding of basic `react-redux` applications.

To recap, we have:

- Incorporated `redux-thunk` with our fetch requests to handle state when working with asynchronous javascript code.
- Contructed a mechanism for showing the errors of asynchronous requests with our `AlertMessage`.
- Updated our state to reflect the beginning of an asynchronous fetch request, the successful completion of a request, and the possible failure of our requests.
- Implemented `GET` and `POST` fetch requests, which follow similar patterns in terms of manage `redux` state.

[implementing-redux-in-react]: https://learn.launchacademy.com/lessons/implementing-redux-in-react
