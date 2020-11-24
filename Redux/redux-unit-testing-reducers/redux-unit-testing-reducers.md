We have already covered how to test our action creators to make sure they are returning properly formatted actions to be dispatched to our reducer. In this article, we will focus on how to test our reducers, to make sure that once they receive that action, they update our store in the proper way!

## Learning Objectives

- Establish ideal testing patterns to fully exercise our Redux reducer
- Use Jest and Enzyme to write tests for the reducer

## Testing Reducers

Our reducer, just like our vanilla action creators, is a pure function. As such, similar to testing our action creators, we will want to assert that given certain parameters, it returns the expected value. More specifically, we'll want to check that given actions of a certain type, it updates our store based on that action. For example, if we give our reducer an action of type `POST_GROCERY_REQUEST_SUCCESS` with a grocery included, we want to make sure that grocery gets added into Redux state.

Similar to the last article, we will be focusing on those action types that do something *other* than simply resetting `isFetching`. Given that we have 5 different action types that we already tested which are processed by our `groceries` reducer, we are going to have 5 situations to test for our reducer: one for each of those action type, as well as one for our `default` case which should return an unaltered state.

### Getting Set Up

In this article, we are going to move on to testing our reducer in our Grocery List application. You can simply use the same code base as you did for the action creator tests article, but you can download a complete copy of that code by running the following:

```sh
et get redux-unit-testing-reducers
cd redux-unit-testing-reducers
bundle install
yarn install
```

When we run `yarn test`, we should see a passing test suite with our action creator tests which gives us the following feedback:

```sh
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

Once again, we can start by creating our test file and importing all necessary items. Inside our `spec/javascript` folder, make a new subfolder called `reducers`, and create a new file in that folder: `groceries.spec.js`.

Inside that file, we can import the necessary information by adding the below:

```javascript
import {
  groceries,
  initialState,
  POST_GROCERY_REQUEST_SUCCESS,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE
} from '../../../app/javascript/src/modules/groceries'
```

We're importing our reducer, our `initialState`, and once again, we're also importing all of our constant action types, so that we can use them to test how our reducer reacts when we give it an action with each of these types.

Before we start writing tests for each `switch` `case`, let's set up the structure of our test. We know that when we defined our `groceries` reducer, we also defined an `initialState` to be our default state upon initial loading of our app.

Add the following `describe` block into your `reducers/groceries.spec.js` file so we can add our `it` blocks as we go:

```javascript
describe('groceries reducer', () => {
})
```

### Testing our `default` case

The first thing we will want to test is that our reducer defaults to our defined initial state when no other state or action type is provided. Since our `initialState` is already defined in the module, we can use this variable to check on the default initial state.

Let's add the following `it` block inside the `describe`:

```javascript
describe('groceries reducer', () => {
  ...

  it('should set an initial state', () => {
    const newState = groceries(undefined, {})
    expect(newState).toEqual(initialState)
  })
})
```

Here, we set a variable `newState` equal to whatever our `groceries` reducer returns to us, and hand it empty arguments: an undefined state, and an empty action. Our reducer is then able to resort to its default state, which we can test to make sure it equals the `initialState`. If we run `yarn test` now, we should see a passing test suite with the below feedback included:

```no-highlight
Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
```

#### Testing our Specific Action Types

Now that we have tested our default initial state, we want to test each of our action types and how our reducer uses them to update our state: specifically, `POST_GROCERY_REQUEST_SUCCESS`, `CLEAR_FORM`, `GET_GROCERIES_REQUEST_SUCCESS`, and `HANDLE_NAME_CHANGE`. We will test these in the same way we tested our default case: by first preparing any "dummy" data and the action we want to pass in, and then setting a `newState` variable equal to whatever our reducer returns when given those arguments. We'll then make specific assertions about that `newState`.

`POST_GROCERY_REQUEST_SUCCESS`, `GET_GROCERIES_REQUEST_SUCCESS`, and `HANDLE_NAME_CHANGE` are going to be the simpler action types to test, since they can be tested with an empty starting state. We will start with adding an `it` block for our `POST_GROCERY_REQUEST_SUCCESS` action type, to check that our reducer will update our grocery list when it processes an `POST_GROCERY_REQUEST_SUCCESS` action type:

```javascript
describe('groceries reducer', () => {
  ...

  it('updates the grocery list when POST_GROCERY_REQUEST_SUCCESS action type is received', () => {

  })
})
```

We know that in order to give our reducer everything it needs, we need to create an action that has a type of `POST_GROCERY_REQUEST_SUCCESS`, as well as some grocery data. We can update our `it` block to include these as follows:

```javascript
describe('groceries reducer', () => {
  ...

  it('updates the grocery list when POST_GROCERY_REQUEST_SUCCESS action type is received', () => {
    const grocery = { id: 1, name: 'bananas' }
    const action = { type: POST_GROCERY_REQUEST_SUCCESS, grocery }
  })
})
```

Finally, we want to take a look at the state that our reducer returns to make sure it updated the `groceryList` to include our new "bananas" grocery. We can add our `newState` variable and test it by completing our `it` block as follows:

```javascript
describe('groceries reducer', () => {
  ...

  it('updates the grocery list when POST_GROCERY_REQUEST_SUCCESS action type is received', () => {
    const grocery = { id: 1, name: 'bananas' }
    const action = { type: POST_GROCERY_REQUEST_SUCCESS, grocery }
    const newState = groceries(initialState, action)

    expect(newState.groceryList).toEqual([grocery])
  })
})
```

We have now created a new grocery object, as well as an action with type `POST_GROCERY_REQUEST_SUCCESS` and that grocery object data, and passed it into our reducer. We are asserting that the `groceryList` state (an array) has been updated to include our new grocery.

If we run `yarn test` in our terminal, we should see updated passing output as follows:

```no-highlight
Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
```

We can fairly easily put together an additional test for our `GET_GROCERIES_REQUEST_SUCCESS` action type. For `GET_GROCERIES_REQUEST_SUCCESS`, we want to give our `groceries` reducer an action with type `GET_GROCERIES_REQUEST_SUCCESS` and a list of groceries to add to our `groceryList` in our store. We can add the following test for this functionality:

```javascript
describe('groceries reducer', () => {
  ...

  it('updates the grocery list when GET_GROCERIES_REQUEST_SUCCESS action type is received', () => {
    const newGroceries = [{ id: 1, name: 'bananas' }, {id: 2, name: 'oranges'}]
    const action = { type: GET_GROCERIES_REQUEST_SUCCESS, groceries: newGroceries }
    const newState = groceries(initialState, action)

    expect(newState.groceryList).toEqual(newGroceries)
  })
})
```

Finally, we can test our `HANDLE_NAME_CHANGE` action type in the same way. For `HANDLE_NAME_CHANGE`, we know that if we give our `groceries` reducer an action with type `HANDLE_NAME_CHANGE` and some new grocery name to update our store with, our reducer should return the existing state with an update `name`. We can assert this with the following test:

```javascript
describe('groceries reducer', () => {
  ...

  it('updates the name when HANDLE_NAME_CHANGE action type is received', () => {
    const newName = 'orange'

    const action = { type: HANDLE_NAME_CHANGE, newName }
    const newState = groceries(initialState, action)

    expect(newState.name).toEqual(newName)
  })
})
```

Fantastic. We have now tested our three action types that can be tested with our simple `initialState`.

Our `CLEAR_FORM` action type, on the other hand, requires a little more setup! We can't test if our `name` has been cleared unless it starts as something other than an empty string!

Luckily, this is fairly easy to solve. When testing this action type, we will just need to create some starting state to use other than our `initialState`. We can test our `CLEAR_FORM` action as follows:

```javascript
describe('groceries reducer', () => {
  ...

  it('should clear the name when CLEAR_FORM action type is received', () => {
    const stateWithName = {
      groceryList: [],
      name: 'bread',
      isFetching: false
    }

  })
})
```

Above, we are declaring a variable called `stateWithName` that will act as our starting state. We can see that the `name` in this state is `'bread'`, and we want to test that if we try to run a `CLEAR_FORM` action through our reducer, it should return that `name` to an empty string.

Let's finalize that test with the following code:

```javascript
describe('groceries reducer', () => {
  ...

  it('should clear the name when CLEAR_FORM action type is received', () => {
      const stateWithName = {
        groceryList: [],
        name: 'bread',
        isFetching: false
      }

      const action = { type: CLEAR_FORM }
      const newState = groceries(stateWithName, action)

      expect(newState.name).toEqual('')
    })
  })
})
```

Great! We created an action with type `CLEAR_FORM`, and called on our `groceries` reducer with our `stateWithName` and `CLEAR_FORM` action. Finally, we asserted that our new state's `name` was set to an empty string.

```no-highlight
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
```

## Wrapping Up

We have officially unit tested the pure functions in our Redux application. First, we tested our vanilla, synchronous action creators, and now we've exercised our reducer. For any reducer, we will want to test each `switch` `case` individually, including the default `initialState` as well as the `case` related to each of our action types, to thoroughly test each possible outcome from our reducer.
