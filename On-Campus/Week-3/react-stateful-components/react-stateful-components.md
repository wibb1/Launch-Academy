In this reading, we will use **state** to make a React component respond to user input.

## Learning Objectives

- Understand how state differs from props and why it's useful
- Learn how to add state to a function-based React component
- Use destructured assignment to concisely assign elements of an array to variables
- Understand the process by which a change in state (or props) leads to an update of the DOM

## Getting Started

Run the following commands and visit <http://localhost:8080> to see the current state of the application.

```no-highlight
et get react-stateful-components
cd react-stateful-components
yarn install
yarn run start
```

## State in React Components

Let's get familiar with the provided code. Looking at `main.js`, which component is our top-level component? What props is it receiving?

{% show_hint %}

In this case, `Message` is our top-level (and only!) component. We pass it a prop of `message` from `main.js`.

{% endshow_hint %}

Next, let's look at `Message`. This component is intended to display a message and how many times the component has been clicked.

```javascript
// src/components/Message.js
import React from "react"

const Message = props => {
  const clickCount = 0

  return (
    <div>
      <h1>Message: {props.message}</h1>
      <h1>Click Count: {clickCount}</h1>
    </div>
  )
}

export default Message
```

Looking at your browser, you'll see the message received as props as well as a click count of `0`. We want to track how many times the component has been clicked. We can do this by tracking this count in `state`, a form of data storage in React components that allows a component to dynamically track changes in response to user input or a server request. You can think of `state` as keeping track of the _status_ of certain properties of the component: in this case, the click count.

`state` itself is essentially a JavaScript object literal that has properties for whatever we'd like to track. To track the click count, we'll be creating state that looks like

```javascript
state: {
  clickCount: 0
}
```

at first. After one click, we'll want the state to update to

```javascript
state: {
  clickCount: 1
}
```

and so on.

Let's now modify our component to use state to track click counts. We'll implement this step-by-step, but if you get lost, check the bottom of this article for the final code.

```javascript
import React, { useState } from "react"

const Message = props => {
  const [clickCount, setClickCount] = useState(0)

  const incrementCount = event => {
    event.preventDefault()
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
  }

  return (
    <div onClick={incrementCount}>
      <h1>Message: {props.message}</h1>
      <h1>Click Count: {clickCount}</h1>
    </div>
  )
}

export default Message
```

After you make these changes and refresh the page in your browser, the displayed click count will increment after each click on the `<div>`!

Let's decompose what we've introduced.

### Importing and Using `useState`

First, we need to modify our `import` statement to include `useState`, a function provided by the React library that will help us access and modify the component's state.

```javascript
import React, { useState } from "react"
```

It's worth decomposing this line of code a bit further.

- `React` is the default export from the `react` `npm` library.
- `useState` is a function located inside the `react` library, so we use curly braces to load that function's definition.

_Note_: We could alternatively leave our our original `import React from 'react'` statement and make invocations to `React.useState`, but that requires a bit more typing and reduces the clarity of our code.

Now let's use `useState` to give us access to a piece of state we'll call `clickCount` and a function for changing it, which we'll call `setClickCount`.

```javascript
import React, { useState } from "react"

const Message = props => {
  const [clickCount, setClickCount] = useState(0) // this is new!

  return (
    // ...
  )
}

export default Message
```

Note that a component can contain many pieces of state -- we're not limited to just one. Under the hood, state is simply a JavaScript object that can contain any number of keys. We'll see an example later on!

Let's dive into the new line of code, starting with the right-hand side: the `useState` function. `useState` takes a single argument representing the initial value of the piece of state we're interested in. (We define which piece of state this is on the left-hand side, discussed in the next paragraph). When our component first renders, we want the click count to be zero because no one has clicked on our message yet. So, the initial value for this part of state should be `0`. `useState` creates state with that initial value and returns two things: the piece of state and a function that can be used to change that piece of state.

This pairing (a thing and a function used to change that thing) is common in software development and is often referred to as a `getter` and a `setter`. Here, the piece of state that's returned is the `getter`, because we can use it to _get_ the value of that piece of state. Meanwhile, the function for changing that piece of state is its `setter`, because we can use it to _set_ the value of the piece of state.

Now let's turn to the left-hand side of this expression, which is where we're storing the getter and setter in memory as `clickCount` and `setClickCount`, respectively. This syntax may look a bit strange at first glance, so let's break it down. As we mentioned above, `useState` returns an _array_, where the first item is the getter for the newly created piece of state and the second item is its setter. We want to store both elements of that returned array as separate variables that we can use later. To do this in a concise, readable way, we can use [**destructuring** assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), a relatively new (and wonderful) JavaScript feature.

Read on to learn more about destructuring assignment or, if you've already encountered it, skip to the next section!

#### Deeper Dive: Destructured Assignment in JavaScript

To better understand destructuring assignment, let's imagine we want to represent rolling two dice and determining which die has the higher value.

```javascript
const maxRoll = 6
const letItRoll = () => {
  const firstRoll = Math.floor(Math.random() * Math.floor(maxRoll)) + 1
  const secondRoll = Math.floor(Math.random() * Math.floor(maxRoll)) + 1

  let whoWon
  if (firstRoll > secondRoll) {
    whoWon = "Die 1 wins!"
  } else if (firstRoll < secondRoll) {
    whoWon = "Die 2 wins!"
  } else {
    whoWon = "It's a tie!"
  }

  return [firstRoll, secondRoll, whoWon]
}

const results = letItRoll()
console.log(`You rolled a ${results[0]} and a ${results[1]}. ${results[2]}`)
```

In this code, `results` is an array, where `results[0]` gives us the first result, `results[1]` gives the second, and `results[2]` gives a string indicating which die "won".

Using destructured assignment, we can write the last two lines in a more readable way:

```javascript
const [firstResult, secondResult, whoWon] = letItRoll()
console.log(`You rolled a ${firstResult} and a ${secondResult}. ${whoWon}`)
```

We place the names of the variables to which we'd like to assign the results inside square brackets, which says "assign the first item in the array to `firstResult`, the second item in the array to `secondResult`, and the third item in the array to `whoWon`.

### Events that Change State

Now that we have our getter and setter, we can use them to affect change on our component. First, we have to fire an event when the `<div>` is clicked. Add an `onClick` to the `<div>` in the return and instruct it to fire an event handler called `incrementCount`:

```javascript
// ...
const [clickCount, setClickCount] = useState(0)

const incrementCount = event => {
  event.preventDefault()
  const newClickCount = clickCount + 1
  setClickCount(newClickCount)
}

return (
  <div onClick={incrementCount}>
    <h1>Message: {props.message}</h1>
    <h1>Click Count: {clickCount}</h1>
  </div>
)

// ...
```

This event handler uses both our getter and our setter for the `clickCount` state. We define how the click count needs to change by accessing `clickCount` and incrementing it by one. We then call `setClickCount` to change our `clickCount` state to this new value. Each time the event fires, state will change.

At this point, in your browser, the displayed click count should be updating whenever you click the component. This means that when the state changes, React must be updating the DOM -- otherwise, we wouldn't be seeing the updated `clickCount` on the page. Let's explore this process in greater detail; it will be very important to understand once we start using React to make requests for data from a server.

### Understanding the Rendering Lifecycle

When React executes a functional component, it performs whatever calculations are specified within that component and then uses the `return` value to determine what HTML should be on the DOM. React then renders the component, meaning that it updates the DOM with these new values. (Actually, React gets a lot of its efficiency from the use of a virtual DOM, which it updates first, compares with the real DOM, and then updates the real DOM as needed based on the results of that comparison. [Click here for a deeper dive.](https://programmingwithmosh.com/react/react-virtual-dom-explained/))

Crucially, React will re-render a component whenever that component's state or props change. **Thus, a change in state or props will update the HTML displayed on the webpage.** This helps us to create interactive front-end experiences, without all of the overhead of managing the DOM.

To understand this important process, let’s add a `debugger` to the beginning of our `increment()` function and above the return of our `Message` component and go through the component’s initial rendering and the re-rendering whenever it is clicked.

```javascript
import React, { useState } from "react"

const Message = props => {
  const [clickCount, setClickCount] = useState(0)

  const incrementCount = event => {
    debugger
    event.preventDefault()
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
  }

  debugger
  return (
    <div onClick={incrementCount}>
      <h1>Message: {props.message}</h1>
      <h1>Click Count: {clickCount}</h1>
    </div>
  )
}

export default Message
```

After making these changes, our server will automatically refresh the page, and we will enter step 1 of the process below.

#### Step 1 - Component Loads onto DOM

There is nothing on the page because the `Message` still in the middle of being called, and has not returned the initial representation of the component.

Advance this debugger to go to step 2. Notice that we don't immediately hit another debugger.

#### Step 2 - Component Undergoes Initial Render

This page is displaying the message received as props and the initial value of the `clickCount` piece of state. Click on the component to advance to step 3.

#### Step 3 - State-Changing Event Begins

Here, we are determining what the new value for state should be, storing as `newClickCount`, and then passing it into `setClickCount()` to update the state and re-render the component.

Advancing this debugger will take us to step 4.

#### Step 4 - Component Re-Renders

The change in state resulting from the `setClickCount` invocation triggers a re-render. At this point in time, the component has the newly incremented state. However, the page has not been updated because the component needs to be re-rendered.

Advancing this debugger will take us to step 5.

#### Step 5. Component is in New State

Once the re-rendering is complete, the page reflects the updated click count of 1, and all of our event handling is complete.

If we were to click on the component again, steps 3-5 would be repeated.

## Multiple Pieces of State

If we want to store multiple pieces of state, we can simply use `useState` again. Let's also count how many times a user has pressed a key while in our app. Above the `return` of your component, add the following:

```javascript
const [keyPressCount, setKeyPressCount] = useState(0)

const incrementKeyPressCount = event => {
  event.preventDefault()
  const newKeyPressCount = keyPressCount + 1
  setKeyPressCount(newKeyPressCount)
}
```

and then modify the `<div>` tag as follows:

```jsx
<div onClick={incrementCount} onKeyPress={incrementKeyPressCount}>
```

In your browser, you should now see both the mouse clicks and the mouse movements reported. The initial state of our app now looks like

```javascript
state: {
  clickCount: 0,
  keyPressCount: 0
}
```

### Final Code

{% show_hint %}

```javascript
import React, { useState } from "react"

const Message = props => {
  const [clickCount, setClickCount] = useState(0)

  const incrementCount = event => {
    event.preventDefault()
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
  }

  const [keyPressCount, setKeyPressCount] = useState(0)

  const incrementKeyPressCount = event => {
    event.preventDefault()
    const newKeyPressCount = keyPressCount + 1
    setKeyPressCount(newKeyPressCount)
  }

  return (
    <div onClick={incrementCount} onKeyPress={incrementKeyPressCount}>
      <h1>Message: {props.message}</h1>
      <h1>Click Count: {clickCount}</h1>
      <h1>Key Press Count: {keyPressCount}</h1>
    </div>
  )
}

export default Message
```

{% endshow_hint %}

## Conclusion

We can make our components stateful and interactive through the `useState` function. State provides our component with a way to keep track of the status of different things: in this article we tracked a value called `clickCount`, but components can have multiple pieces of state.

We can then make the JSX that our component returns dependent on the values of our state. Every time a component's state or props changes, React re-renders the component. In this way, we can use state to build a dynamic React application that responds to user events.
