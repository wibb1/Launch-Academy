## Learning Objectives

- Identify key testable aspects of React presentational components
- Learn how mock functions can aid test-writing
- Properly handle testing components that include React Router features
- Learn several strategies for debugging Enzyme tests

## Getting Started

To get started:

```no-highlight
et get testing-react-presentational-components-jest
cd testing-react-presentational-components-jest
yarn install
yarn test
```

At this point, you should have one passing test. Note that you may also have some warnings in your console -- as long as they're not errors, this is ok.

Finally, in another tab, start the server,

```no-highlight
yarn start
```

and visit [http://localhost:8080](http://localhost:8080).

## Elephants!

We've been gifted a nifty app to help us marvel at elephants. In the browser, we can see an image of an adult elephant, and clicking it toggles between the adult elephant and a baby elephant. We want to write some **unit** tests to ensure that the components responsible for this functionality, `ElephantContainer` and `Elephant`, are working correctly.

Note: We'll be writing _unit_ tests to ensure that each component is behaving as expected, but we won't actually write _feature_ tests, which ensure that the application is behaving as expected. It is possible, but more difficult and resource-expensive, to write feature tests using Enzyme, but we won't cover that here.

`ElephantContainer`'s responsibilities are to

- contain state for `babyElephant` (initially set to `false`)
- pass down a handleClick function to toggle the `babyElephant` state between `true` and `false`
- return an `Elephant` with different `image` and `text` props depending on the value of `babyElephant`

Meanwhile, `Elephant`'s responsibilities are to

- render an image and text based on the props received from `ElephantContainer`
- return JSX with an event listener on the top-level `<div>` that triggers the `handleClick` function passed down as props from `ElephantContainer`

We can use this information to determine what kind of tests we should write for each of these components. In this article, we'll focus on ensuring that the `Elephant` presentational component is adequately tested. We'll write tests for the `ElephantContainer` container component in a future article.

### What to Test for React Presentational Components

A presentational component is generally a stateless React component whose main purpose is to display information -- it is unlikely to store state or extensively manipulate data. In our case, the `Elephant` component

- receives props from its parent
- displays an `img` based on those props
- displays an `h1` based on those props
- runs an `onClick` function received from props when the component is clicked, via an event listener

Based on this list of responsibilities, to provide sufficient test coverage for `Elephant`, we should ensure that it

- renders the expected HTML when given some arbitrary props
- when clicked, triggers the `onClick` function

And that's it! We don't need to test that the `onClick` function actually changes the displayed image -- that is the responsibility of `ElephantContainer` instead. _Single-responsibility principle for the win!_

### Testing Displayed HTML

Let's start by writing some tests to ensure that `Elephant` returns an `<h1>` containing the `text` prop and an `<img>` that references the link we pass down as `image`.

Open the provided `Elephant.test.js` test file. Above the trivial `it` block, we'll define `wrapper` so that we have access to it in all other tests in this file. Before each test, we will use the `mount` function (from Enzyme) to mount our `Elephant` component on the DOM. This function takes in the React component to be mounted and then returns the mounted component. We want to save that mounted component as `wrapper` so that we can make assertions about it later.

```javascript
describe("Elephant", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Elephant image="http://fakeurl.com/elephant" text="I am an Elephant!" />
    )
  })
})
```

_Note that we handed our `Elephant` some sample props -- feel free to substitute any strings you'd like._

Let's start by testing that the wrapper (that is, the mounted React component) contains an `h1` node (element). We can call `.find()` on the wrapper and pass it in the element we're looking for, then use the `toBeDefined` matcher to assert that the node is, well, present:

```javascript
  describe("Elephant", () => {
    let image, text, wrapper

    beforeEach(() => {
      ...
    })

    it('should render an h1 element', () => {
      expect(wrapper.find('h1')).toBeDefined();
    });
  })
```

Rerun `yarn test` -- you should have a new passing test! Keep rerunning `yarn test` after every new test in this article to ensure that everything's good to go.

Let's make this test a bit more powerful by modifying its description and assertion to check that the `h1` includes the text we expect:

```javascript
it("should render an h1 element containing the text received via props", () => {
  expect(wrapper.find("h1").text()).toBe("I am an Elephant!")
})
```

We can also test that the props of the `<img>` rendered by `Elephant` are what we'd expect considering props we gave the component. We'll use the [`props` function][enzyme-docs-full-rendering-api-props], which returns the `props` of the JSX element it's called on (e.g., the `src` prop of an `<img>` JSX element).

```javascript
it("should render an img tag with the specific props", () => {
  expect(wrapper.find("img").props()).toEqual({
    src: "http://fakeurl.com/elephant",
    height: "400",
    width: "600"
  })
})
```

The test above requires us to list every prop in the `toEqual` statement. If we only cared about testing one prop, we could use

```javascript
it("should render an img tag with the specific props", () => {
  expect(wrapper.find("img").props()["src"]).toBe("http://fakeurl.com/elephant")
})
```

(Note that `toBe` is equivalent to a `===` conditional, whereas `toEqual` is equivalent to a `==` conditional. We can use `toBe` when comparing strings, but we need `toEqual` when comparing objects because the two objects aren't the same _in memory_. See [here](https://stackoverflow.com/questions/22413009/jasmine-javascript-testing-tobe-vs-toequal) for a good explanation of this difference.)

### Testing `onClick`

Now that we've tested the HTML on the page, we can test the user's interactions with the page by testing that the `onClick` property is invoked when the component is clicked. We can simulate events on React elements using the [`simulate` function][enzyme-docs-shallow-rendering-api-simulate] -- we'll call it on the `wrapper` and then pass in the action we want to simulate, namely, a click. We also need to set up a **mock function** using [`jest.fn()`][jest-fn] so we can assert that the function is called when the `wrapper` is clicked. We'll discuss this mock in greater detail in the next section!

To implement this test, you'll need to update your code:

```javascript
describe("Elephant", () => {
  let wrapper, onClickMock //<-- this is new

  beforeEach(() => {
    onClickMock = jest.fn() //<-- this is new
    wrapper = mount(
      <Elephant
        image="http://fakeurl.com/elephant"
        text="I am an Elephant!"
        onClick={onClickMock} //<-- this is new
      />
    );
  })

...

//  new test
  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled()
  })
});
```

This test clicks on the component and then checks that our mock function was called. Here we're clicking anywhere on the wrapper, which works because the `onClick` is on the top level of our wrapper (the `<div>`). If it were on a `<button>` within the wrapper, we might use something like `wrapper.find("button").simulate("click")`.

#### Don't Mock Me

Recall that our `ElephantContainer` component passes the `Elephant` component a function, `handleClick`, as the `onClick` prop. However, this test is only mounting `Elephant` -- it doesn't have access to `handleClick` or `ElephantContainer` at all. This is intentional -- we want to test `Elephant` in isolation, per the single-responsibility principle. Instead, we need a way to check that _some function_ was called when the wrapper was clicked on.

Mocks to the rescue! In software testing, _mocks_ are functions that you can use in place of another function.

Mocks are quite powerful! They allow us to keep track of how many times a function has been called, what arguments it has been called with, and more. Here, we're using a mock because we want to confirm that the `onClick` function is called when we simulate a click on the `Elephant` component. That's all we care about -- we'll make sure that `handleClick` behaves correctly when we test `ElephantContainer`.

### Testing React Router Features

Open `src/components/Elephant.js` and modify the `return` as follows:

```javascript
<div onClick={props.onClick} className="center">
  <img src={props.image} height="400" width="600" />
  <h1>{props.text}</h1>
  <hr />
  <Link to="/facts">Check out some elephant facts!</Link>
</div>
```

You'll also need to import the `<Link>` component from `react-router-dom`

```javascript
import { Link } from "react-router-dom"
```

Your tests should now fail with the following error message:

```no-highlight
Invariant failed: You should not use <Link> outside a <Router>
```

What's happening here? Remember that we set up our test by mounting the `Elephant` component. What we _didn't_ do was mount `ElephantContainer` or `App`. This is intentional -- we want to minimize the our test's resource consumption and keep it focused on `Elephant`. However, because we didn't mount `App`, we didn't mount its `<BrowserRouter>`, and `Link` can't function properly if it's not in a router.

To fix this, when we mount `Elephant` in our `beforeEach()`, let's wrap it in a `<BrowserRouter>` like so (remember to import `<BrowserRouter>` first!):

```javascript
wrapper = mount(
  <BrowserRouter>
    <Elephant
      image="http://fakeurl.com/elephant"
      onClick={onClickMock}
      text="I am an Elephant!"
    />
  </BrowserRouter>
)
```

Your tests should be back to passing! Let's now test that the `Link` we've added has the correct destination:

```javascript
it("should render a link to /facts", () => {
  expect(wrapper.find("Link").props()["to"]).toBe("/facts")
})
```

## Final Files

We are now done testing our `Elephant` component!

For convenience, here is the final test file for `Elephant`:

{% show_hint %}

```javascript
import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import Elephant from "./Elephant"
import { BrowserRouter } from "react-router-dom"

describe("Elephant", () => {
  let wrapper, onClickMock

  beforeEach(() => {
    onClickMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <Elephant
          image="http://fakeurl.com/elephant"
          text="I am an Elephant!"
          onClick={onClickMock}
        />
      </BrowserRouter>
    )
  })

  it("should render an h1 element containing the text received via props", () => {
    expect(wrapper.find("h1").text()).toBe("I am an Elephant!")
  })

  it("should render an img tag with the specific props", () => {
    expect(wrapper.find("img").props()).toEqual({
      src: "http://fakeurl.com/elephant",
      height: "400",
      width: "600"
    })
  })

  it("should render an img tag with the specific props", () => {
    expect(wrapper.find("img").props()["src"]).toBe(
      "http://fakeurl.com/elephant"
    )
  })

  it("should invoke the onClick function from props when clicked", () => {
    wrapper.simulate("click")
    expect(onClickMock).toHaveBeenCalled()
  })

  it("should render a link to /facts", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/facts")
  })
})
```

{% endshow_hint %}

## Summary

We unit-tested a React _presentational_ component by identifying the component's major functionalities and then implementing Enzyme to test them. We also saw how spies can give us information about when/how a given function is called during our test.

### External Resources

- [Enzyme Docs][enzyme-docs]
- [Enzyme Docs: Shallow Rendering API][enzyme-docs-shallow-rendering-api]
- [Enzyme Docs: Full Rendering API][enzyme-docs-full-rendering-api]

[enzyme-docs]: https://github.com/airbnb/enzyme
[enzyme-docs-full-rendering-api]: https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
[enzyme-docs-shallow-rendering-api]: https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
[enzyme-docs-shallow-rendering-api-simulate]: https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/simulate.md
[enzyme-docs-full-rendering-api-props]: http://airbnb.io/enzyme/docs/api/ReactWrapper/props.html
[enzyme-docs-full-rendering-api-setstate]: http://airbnb.io/enzyme/docs/api/ReactWrapper/setState.html
[enzyme-docs-full-rendering-api-state]: http://airbnb.io/enzyme/docs/api/ReactWrapper/state.html
[testing-react-components-1]: https://s3.amazonaws.com/horizon-production/images/testing-react-components-big-elephant.png
[testing-react-components-2]: https://s3.amazonaws.com/horizon-production/images/testing-react-components-baby-elephant.png
[jest-fn]: https://jestjs.io/docs/en/jest-object#jestfnimplementation
