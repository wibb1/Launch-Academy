Now that we have walked through testing our vanilla action creators and our reducer, we can move forward with testing our more complicated thunk action creators! Just like our vanilla action creators and reducer, thunk action creators are simply functions that we can assert an expected output. They are special beasts, however, in that they have the added complexity of having asynchronous activity (such as a fetch call) inside of them.

## Learning Objectives

- Establish testing patterns for exercising thunk action creators
- Mock asynchronous calls with `thunk`, `fetch-mock`, and `redux-mock-store`
- Implement testing for Redux thunks

## Testing Thunk Action Creators

Because of the added complexity, there are some new tools we need to install in order to successfully test our thunks. Just like when testing React components that have a fetch call inside them, we can use the `fetch-mock` library to mock our fetch calls from our action creators. Additionally, we will want to use a library called [`redux-mock-store`][redux-mock-store] to set up a mock store whose actions we can track. The benefit of this library here is that it will allow us to call a function on that mock store, `store.getActions()`, which will allow us to see an array of the actions which have been dispatched by the thunk action creator. For example, we know that when we run our `getGroceries` thunk, as long as our fetch goes well, we dispatch both the initial `GET_GROCERIES_REQUEST` action, as well as our `GET_GROCERIES_REQUEST_SUCCESS` action. `redux-mock-store` will allow us to ensure those actions resemble what we expect.

### Getting Set Up

In this article, we will again use our Grocery List app, this time testing our thunk action creators. Like before, you can simply use the same code base as you did for the reducer tests article, or you can download a complete copy of that code by running the following:

```sh
et get redux-unit-testing-thunks
cd redux-unit-testing-thunks
bundle install
yarn install
```

When we run `yarn test`, we should see a passing test suite with our action creator tests which gives us the following feedback:

```sh
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
```

We're going to want to add to our existing `spec/javascript/actions/groceries.spec.js` file, since these are additional action creator tests. The first thing we need to do is set up our additional configuration, so go ahead and add the following to the top of your `actions/groceries.spec.js` file:

```js
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
```

Here, we are importing `thunk` so we can set up our middlewares just like in our application itself. We are then using `configureMockStore` from `redux-mock-store` to set up a mock store that can track any actions it receives, among other functionalities we will not be using here. In addition, we are importing `fetchMock` to use inside of our `it` blocks to fake our HTTP requests.

Now that we have the configuration set up, let's move on to writing some tests!

### Testing `getGroceries`

The first thunk action creator we will want to test is `getGroceries`, since this is the action creator that gets called upon page load. As stated before, we know that if `getGroceries` is called and our fetch is successful, two actions should be dispatched: a `GET_GROCERIES_REQUEST`, and a `GET_GROCERIES_REQUEST_SUCCESS` with the new groceries data.

The first thing we will want to do is set up our imports and exports. Let's go ahead and import everything we should need for successful calls of `getGroceries` and `postGrocery` at this time:

```js
// export in modules/groceries.js code file

export {
  clearForm,
  getGroceries,
  getGroceriesRequestSuccess,
  groceries,
  handleNameChange,
  initialState,
  postGrocery,
  postGroceryRequestSuccess,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  POST_GROCERY_REQUEST,
  POST_GROCERY_REQUEST_SUCCESS
}
```

```js
// import in actions/groceries.spec.js test file
import {
  clearForm,
  getGroceries,
  getGroceriesRequestSuccess,
  handleNameChange,
  postGrocery,
  postGroceryRequestSuccess,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  POST_GROCERY_REQUEST,
  POST_GROCERY_REQUEST_SUCCESS
} from '../../../app/javascript/src/modules/groceries';
```

Now that we have all the imports and exports we need, we can write our test for our "happy path" for `getGroceries`! Let's go ahead and add the following test to `actions/groceries.spec.js`:

```js
describe('getGroceries', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('calls the request and success actions if the fetch response was successful', done => {
    const newGroceries = [
      { "id": 1, "name": "bananas" },
      { "id": 2, "name": "oranges"}
    ]

    fetchMock.get('/api/v1/groceries.json', {
      status: 200,
      body: newGroceries
    })

    const expectedActions = [
      { type: GET_GROCERIES_REQUEST },
      { type: GET_GROCERIES_REQUEST_SUCCESS, groceries: newGroceries}
    ]
    const store = mockStore({
      groceryList: [],
      name: '',
      isFetching: false
    })

    store
      .dispatch(getGroceries())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
})
```

As mentioned previously, we know that we need to use `fetchMock` to make sure our fetch call doesn't actually happen and our test can run in isolation from any API calls. Here, we set up an `afterEach` block to clear out our mocks inside of our `getGroceries` `describe` block.

Next, we start an `it` block to explain what we expect if a fetch call is successful. Inside that, we set up dummy response data (`newGroceries`), and use `fetchMock.get()` to mock the API call with a return status of 200 and body of our `newGroceries` array.

The next block is additional setup. We need to create a variable `expectedActions` that will lay out the actions that we expect to get dispatched throughout this action creator call. Here, we can see that, as discussed, we expect two actions to be dispatched: one with type `GET_GROCERIES_REQUEST` and no further data, and a second with type `GET_GROCERIES_REQUEST_SUCCESS` and our `newGroceries` data included. We also set up a variable `store`, which uses our `mockStore` functionality to create a store with an `initialState` that matches our `groceries` reducer's `initialState`.

Finally, we actually dispatch our `getGroceries` action creator and make assertions as to what will happen. We can see that `redux-mock-store` allows us to call `dispatch` on our mock store to first dispatch `getGroceries()`. After which, we call `.then` (since we know our thunk action creator is asynchronous), and then expect the output of `store.getActions()`. This will give us an array of all actions dispatched to the store, to equal the `expectedActions` array we already set up.

One last note on these asynchronous tests. Similar to testing our React components, we need to use the `done` keyword to allow our asynchronous tests to know *when* to expect certain outcomes. Here, we can see that we pass `done` in as an argument to our `it` block, just like we do in our React Component tests, so that we can call `done()` at the very inner part of our test blocks.

If we run `yarn test` at this point, we should see an additional passing test:

```no-highlight
Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
```

### What about the Sad Path?

We've now tested what happens with `getGroceries` if our fetch call goes successfully, but as we know, sometimes API calls may not be so reliable! So we always want to be sure to test our thunk action creator for its unsuccessful outcome as well.

Let's take a look at our `getGroceries` action creator code as a refresher:

```js
// modules/groceries.js

const getGroceries = () => {
  return dispatch => {
    dispatch(getGroceriesRequest())

    return fetch('/api/v1/groceries.json')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
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

Based on the above code, we know that any kind of error status code will trigger the same flow of events: after dispatching a `GET_GROCERIES_REQUEST` action, it will dispatch a `GET_GROCERIES_REQUEST_FAILURE` action in order to set `isFetching` back to `false`, and then dispatch `displayAlertMessage` with the error "Something went wrong." so that this error appears on the page. Finally, we return an error since we need to be able to run a conditional in our next `.then` to figure out if we should dispatch a success or not.

Just like in our happy path test, we will want to mock our fetch call, prepare an array of the actions we *expect* to be dispatched, and then invoke our `getGroceries` function to check that those actions do actually get dispatched.

First, we'll want to export and import our `GET_GROCERIES_REQUEST_FAILURE` action type, as well as our `DISPLAY_ALERT_MESSAGE` action type:

```js
// export in modules/groceries.js code file

export {
  ...
  GET_GROCERIES_REQUEST_FAILURE
}
```

```js
// export in modules/alertMessage.js code file

export {
  ...
  DISPLAY_ALERT_MESSAGE
}
```

```js
// import in actions/groceries.spec.js test file
import {
  ...
  DISPLAY_ALERT_MESSAGE,
  GET_GROCERIES_REQUEST_FAILURE
} from '../../../app/javascript/src/modules/groceries';
```

Now, we can test our sad path by adding the below test inside of our same `describe` block as the happy path:

```js
  it('calls the failure action if the fetch response was unsuccessful', done => {
    fetchMock.get('/api/v1/groceries.json', {
      status: 422
    })

    const expectedActions = [
      { type: GET_GROCERIES_REQUEST },
      { type: GET_GROCERIES_REQUEST_FAILURE },
      { type: DISPLAY_ALERT_MESSAGE, alertMessage: "Something went wrong." }
    ]
    const store = mockStore({
      groceryList: [],
      name: '',
      isFetching: false
    })

    store
      .dispatch(getGroceries())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
```

This time, when we mock our fetch call, instead of returning a `200` status and a list of groceries, we simply return a `422` status. This forces our test to run the sad path. We can expect, based on our run through a moment ago, to receive three actions: a `GET_GROCERIES_REQUEST` action, a `GET_GROCERIES_REQUEST_FAILURE` action, and a `DISPLAY_ALERT_MESSAGE` action with the `alertMessage` of "Something went wrong."

If we run `yarn test` now, we should see the below output:

```no-highlight
Test Suites: 2 passed, 2 total
Tests:       11 passed, 11 total
```

### Testing `postGrocery`

Testing our `postGrocery` thunk is going to look very similar to how we tested our `getGroceries` thunk. We will want to set up a `describe` block, and then prepare whatever data we need to, mock our fetch, and then set up and test our expected actions.

For our `postGrocery` function, we have the following code:

```js
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
```

Here, we can see that assuming all goes well, two actions will be dispatched: a `POST_GROCERY_REQUEST` action, and a `POST_GROCERY_REQUEST_SUCCESS` action with the grocery included.

Just like when testing our `getGroceries` thunk, we can test `postGrocery` as follows:

```js
describe('postGrocery', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('calls the success action if the fetch response was successful', done => {
    const grocery = {
      "id": 1,
      "name": "bananas"
    }

    fetchMock.post('/api/v1/groceries.json', {
      status: 202,
      body: grocery
    })

    const expectedActions = [
      { type: POST_GROCERY_REQUEST },
      { type: POST_GROCERY_REQUEST_SUCCESS, grocery }
    ]
    const store = mockStore({
      groceryList: [],
      name: '',
      isFetching: false
    })

    store
      .dispatch(postGrocery())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
})
```

If we run `yarn test` at this point, we can expect to see the following:

```no-highlight
Test Suites: 2 passed, 2 total
Tests:       12 passed, 12 total
```

We have successfully tested the happy path for both of the thunks in our application, as well as the sad path for `getGroceries`. If you would like some more practice with sad path testing, definitely give testing the failure case for `postGrocery` as well!

### A note on testing Redux-connected Components

At this point, we have discussed how to unit test each part of our Redux code: our vanilla action creators, reducers, and thunk action creators. However, Redux can also impact the way we need to test our React components.

For any container components which are connected to Redux using the `connect` function, we need to be mindful about what is being exported from those files. For example, in our `GroceryListContainer`, we have the following code for our file export:

```js
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryListContainer)
```

We have already discussed how `connect` actually returns to us a brand new component which is connected to Redux. This means that when we set up a test file for this component and `import GroceryListContainer from ...`, the `GroceryListContainer` that we are importing is actually our connected, or "decorated", component, rather than our vanilla, non-connected component. This is great for integration testing: it is good practice to test our connected component to make sure it's connecting to Redux in the way we expect. We can do this by creating a mock store just like we did in the tests above, and then when mounting `GroceryListContainer` in our test file, wrap it in a `<Provider>` component that uses the mock store as follows:

```js
wrapper = mount(<Provider store={store}> <GroceryListContainer /> </Provider>)
```

However, there may also be times when we want to unit test this one component in isolation, without considering its interactions with Redux. In this case, we can actually export the undecorated component (the one we initially define without connect) as well. We can do this by simply adding the following statement to the same file:

```js
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryListContainer)

export {
  GroceryListContainer
}
```

Then, when we import it into our test file, we will want to do so with curly brackets as follows:

```js
import { GroceryListContainer } from ...
```

This will import the component itself without any complications regarding Redux!

## Wrapping it Up

Thanks to the fact that Redux is largely made up of pure functions that each have their own responsibilities, we can easily unit test our Redux code to make sure each of our action creators and reducers are correctly functioning as we expect. Using libraries like `redux-mock-store` and `fetch-mock`, we can also unit test our thunk action creators to make sure they are dispatching the actions we expect. These unit tests will be crucial to making sure each of the cogs in our Redux wheel are running smoothly!

### External Resources

- [Redux Testing Docs](https://redux.js.org/recipes/writingtests)
- [Importing Connected Components](https://github.com/reduxjs/redux/blob/master/docs/recipes/WritingTests.md#connected-components)
- [Unit Testing Redux Connected Components](https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c)

[redux-mock-store]: https://github.com/dmitry-zaets/redux-mock-store
