Redux allows us the ability to have clear-cut, modular pieces of our code, from our actions and action creators to our reducers, but it has a lot of pieces that all have to interact in a specific way in order for everything to work together as expected! We need to test each of these pieces individually to make sure they are functioning on their own, in order to trust that they will work well together.

Luckily, as we know, one of the fundamental concepts behind Redux is that it is built upon pure functions and predictable behavior. To our advantage, this makes our code *very* easy to test.

### Learning Objectives

- Integrate patterns for unit testing our Redux code
- Construct unit tests with Jest and Enzyme to test our vanilla Redux action creators

### What do we Test?

When thinking through how to thoroughly test our application, our first question should always be: what do we need to test to cover all of our bases? In our Redux applications, we know that:

- We declare constant *action types*
- Define functions called *action creators* that will pass an *action* (just an object!) into our *reducer*
- Define reducers that will return some *state*.

As such, we have two types of *functions* that are moving all of the pieces around: our **action creators** and our **reducers**. If we test that those two things always work as we expect, we will be able to assert that the Redux part of our application should be running smoothly.

_**Before getting started: A Note on Jest**_

In this curriculum, we are using Jest as our framework for testing our JavaScript code. If this is not the framework you are familiar with (if, for example, you've used Karma instead), do not worry at all! We are continuing to use Enzyme as our library for most of our testing syntax, so the actual syntax used for writing our tests will stay largely, if not entirely, the same. You may encounter a few small differences in the way the tests look in your terminal or the names of your test files, but we will guide you through those! For those of you interested in learning Jest, we have configured it for you in this assignment.

*Why Jest?* - over time, we have found the combination of Karma, Jasmine, and Enzyme to be cumbersome in configuration. Jest is a consolidated package, and works well with Enzyme. Launch Academy has also found debugging and resolving test failures to be dramatically easier with the Jest framework.

## Testing Action Creators

In this article, we will focus on our vanilla, synchronous action creators. Vanilla action creators are the more simple functions we will run across in our JavaScript code.

They may or may not take in some contextual data required to update our store. They are then responsible for returning, or creating, an object: our `action`. We will probably have a number of different action creators within our app: one for each necessary action type. In our fetching Grocery List application, for example, we have four vanilla action creators *other* than the ones that simply update our `isFetching` state: `postGroceryRequestSuccess`, `clearForm`, `getGroceriesRequestSuccess`, and `handleNameChange`. For each of those functions, we know that, given they are action creators, their return value is an action. Therefore, we want to test that, given some data, they return the action we expect, with both the correct type, and any contextual data along with it.

To get started with our very simple Redux in React on Rails Grocery List application, go ahead and run the following commands:

```sh
et get redux-unit-testing-action-creators
cd redux-unit-testing-action-creators
yarn install
bundle install
yarn start
```

And in a second tab:

```sh
bundle exec rake db:drop db:create db:migrate db:seed
rails s
```

If you'd like to see the application, you can navigate to `http://localhost:3000`. However, we will be focusing on testing our application instead.

### Setting up our Action Creator Tests

Our first step will, of course, be creating our test file and importing the required action types and action creators. Let's start with our `postGroceryRequestSuccess` action creator.

Inside our `spec/javascript` folder, make a new folder called `actions`, and create a new file in that folder: `groceries.spec.js`. Moving forward, we'll follow this convention of creating a `.spec.js` for the correlating `.js` files under test. Keeping the filesystem organized in this way will serve us as our application grows.

Inside our new file, we can import the necessary information by adding the below:

```javascript
import {
  POST_GROCERY_REQUEST_SUCCESS,
  postGroceryRequestSuccess
} from '../../../app/javascript/src/modules/groceries'
```

You'll notice that we're importing not just our action creator, but also our constant action type! This is important, as we'll want to use this constant to assert that our `postGroceryRequestSuccess` action creator makes an action of the correct type. However, this is the first time we're requiring the constant outside of that file, so let's update `app/javascript/src/modules/groceries.js` to export this action type. In fact, we can go ahead and export all of our action types for our future tests, making our updated `export` statement look like this:

```javascript
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
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  POST_GROCERY_REQUEST_SUCCESS
}
```

Recall the promise of Test Driven Development (TDD). We want to write code that asserts our implementation functions the way we expect it to. So, with our action creators, we test that given certain arguments, the expected action is returned. Because of Redux's pure, functional nature, testing Redux functionality can be very gratifying.

Back in our `actions/groceries.spec.js` file, let's think about what we need to do to fully test our `postGroceryRequestSuccess` action. We know that `postGroceryRequestSuccess` looks like this:

```javascript
const postGroceryRequestSuccess = grocery => {
  return {
    type: POST_GROCERY_REQUEST_SUCCESS,
    grocery
  }
}
```

So, we will want to create some "dummy" grocery data, run our `postGroceryRequestSuccess` action creator function, and test that the return value is an action with type `POST_GROCERY_REQUEST_SUCCESS` and our grocery data included!

We can do so by copying the below test into our `actions/groceries.spec.js` file:

```javascript
describe('postGroceryRequestSuccess action', () => {
  it('should create an ADD_NEW_GROCERY action', () => {
    const grocery = { id: 1, name: 'bananas' }
    const action = postGroceryRequestSuccess(grocery)
    expect(action).toEqual({
      type: POST_GROCERY_REQUEST_SUCCESS,
      grocery
    })
  })
})
```

We can see that first, we're creating a grocery, and then we're declaring a variable `action` that is equal to whatever `postGroceryRequestSuccess(grocery)` returns. Because we have that variable at our disposal, we can then assert that `action` equals the exact action that we want to get back from `postGroceryRequestSuccess`!

At this point, we can run our tests. Run `yarn test` to see our test run. We should get feedback that shows a passing test with the below text included:

```no-highlight
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

Woohoo! We have passed our first Redux unit test.

### Testing our other Action Creators

We of course also want to test our other action creators as well: `clearForm`, `getGroceriesRequestSuccess`, and `handleNameChange`. Let's first update our `import` statement in `actions/groceries.spec.js` to import everything we will need:

```javascript
import {
  POST_GROCERY_REQUEST_SUCCESS,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  postGroceryRequestSuccess,
  clearForm,
  getGroceriesRequestSuccess,
  handleNameChange
} from '../../../app/javascript/src/modules/groceries'
```

Then, we can get started on testing our other action creators. For each of them, we'll use the same steps as we did for `postGroceryRequestSuccess`: we will first create whatever "dummy" data we need (when necessary), and then make sure we get back the action we expect.

For `clearForm`, we know that we don't need to actually pass any data in, since our `clearForm` action doesn't require data:

```javascript
const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}
```

As such, we can write our test to simply create the action and assert its structure as follows, in its own unique `describe` block inside our `actions/groceries.spec.js` file:

```javascript
describe('clearForm action', () => {
  it('should create an CLEAR_FORM action', () => {
    const action = clearForm()
    expect(action).toEqual({
      type: CLEAR_FORM
    })
  })
})
```

For `getGroceriesRequestSuccess`, we want to hand in an array of the existing groceries (theoretically from our database, but here we will simply create dummy data) and expect an action with type `GET_GROCERIES_REQUEST_SUCCESS` and that grocery array included:

```javascript
describe('getGroceriesRequestSuccess action', () => {
  it('should create an GET_GROCERIES_REQUEST_SUCCESS action', () => {
    const newGroceries = [{ id: 1, name: 'bananas' }, { id: 2, name: 'oranges' }]
    const action = getGroceriesRequestSuccess(newGroceries)
    expect(action).toEqual({
      type: GET_GROCERIES_REQUEST_SUCCESS,
      groceries: newGroceries
    })
  })
})
```

And finally, for `handleNameChange`, we want to hand in some new event (a la an `onChange` event) created by the typing of our user, so that our `handleNameChange` function can access the value typed by the user and return an action with type `HANDLE_NAME_CHANGE` and that input value. This is a little trickier than our past data, but we can just think of what we *need* inside that event in order to format our data. Specifically, our `handleNameChange` function wants to access `event.target.value`, so we can create an object that gives it the necessary `key:value` pairs:

```javascript
describe('handleNameChange action', () => {
  it('should create an HANDLE_NAME_CHANGE action', () => {
    const event = { target: { value: 'orange' } }
    const action = handleNameChange(event)
    expect(action).toEqual({
      type: HANDLE_NAME_CHANGE,
      newName: event.target.value
    })
  })
})
```

Now that our `actions/groceries.spec.js` file has all of our tests in it, we can re-run our test suite with `yarn test` and see a green test suite:

```no-highlight
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

Great work!

## Wrapping Up

Note that while our examples seem a bit trivial, it's important to have automation in place that asserts that action creators perform as expected. As we make changes, our tests will maintain our confidence around the overall system's responsibility. Having this confidence allows us to produce software more rapidly, and with a diminished need to manually test that our software works the way in which we expect.

We have successfully tested our action creators to make sure they're returning actions formatted in the way we expect, with the correct type and, when applicable, the correct data. We can now assert that so long as we use the tested action creators in our components, our reducer will receive the actions that we expect! The next step will be confirming that our reducer consumes those actions in the way we want them to, so let's move along to testing our reducer in a separate article.
