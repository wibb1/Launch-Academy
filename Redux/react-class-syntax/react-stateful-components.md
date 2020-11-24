In this reading, we use classic `class` syntax in order to build a simple react app.

*Note: This article assumes a working knowledge of React with `useState` hooks i.e. v16.8 or above.*

## Learning Objectives

- Understand the what setup is required to use class syntax
- Learn essentials of class syntax, such as differences in calling on props, function binding and the `this` keyword
- Manage state as an object, and determine the best way to update that state
- Use the `render` lifecycle method, and understand how and when it is called

## Getting Started

Run the following commands and visit <http://localhost:8080> to see the current state of the application.

```no-highlight
et get react-class-syntax
cd react-class-syntax
yarn install
yarn run start
```

## State in React Components

Let's use a simple and perhaps familiar app setup up, which begins as most React apps do with one primary entry point to our react component tree.

Looking at `main.js`, we can see that we are specifically rendering a `Message` component. We pass it a prop of `message` from `main.js`.

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

As you can see, standard "components-as-functions" works perfectly fine in newer versions of React. However, components that are defined as functions are classically used more often as presentational components. In otherwords, functional components historically do not have state.

At the moment, we want to track how many times the component has been clicked. We can do this by tracking this count in react `state`. If you have worked with react hooks, this is very similar, however we will be define state and its properties as an object in a class constructor, rather than using a more pure state hook.

To track the click count, we'll be creating state that looks like:

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

Let's now modify our component to use state to track click counts. We'll implement this step-by-step, but if you get lost, check the bottom of this article for the final code.

```javascript
// src/components/Message.js
import React from "react"

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = this.props.message
    const clickCount = 0

    return(
      <div>
        <h1>Component Message: {message}</h1>
        <h1>Component Click Count: {clickCount}</h1>
      </div>
    )
  }
}

export default Message
```

After you make these changes and refresh the page in your browser, the displayed click count will increment after each click on the `<div>`!

Let's break down what has been introduced in this new code set.

### Understanding the Basics of Class Syntax

```
import React, { Component } from "react"

class Message extends Component {
  constructor(props) {
    super(props)
  }
```

* First, we import React as normal, however we also important `Component` from "react" so that we can have our custom class inherit React component properties (of which there are many!)

* We define the component with the `class` keywork, and have this new component be a child of the imported `Component` class.

* This class will be used to generate a JS object, and so should have a `constructor` method to determine what should be declared or exposed on creation.

* We call `super(props)` here so that we can have access to the `this` keyword in our constructor method. As of yet, we aren't using the `this` keyword. We'll come back to this when we define state and use `props`.

#### The `render` lifecycle method

When using class syntax, the `render` method is the method that actually renders our JSX code on to the screen, complete with any expressions or event listeners we might choose to add to our JSX. `render` is what is known as a lifecycle method: a method that gets called at a certain point in a component's lifecycle of being mounted, re-rendered or unmounted from the DOM. We won't dig too deeply into lifecycle methods just yet, but know this: **the `render` method gets called when our componenent is first added to the DOM, as well as whenever the state on that component is changed**. As such, this component will automatically render the JSX we have here without prompt.

*Note: In React 16.8, lifecycle methods such as `render` were replaced with the `useEffect` hook.*

#### The `this` keyword in class components.

If class components, if we want to refer to refer to properties of the object we are working with (that is, the object that is being generated from the class blueprint we are defining), then the `this` keyword needs to be used.

As a refresher, `this` in JS *usually* refers to the context that a function belongs to. By default, the `this` keyword retrieves and returns the object that the `this` keyword is being called in. So, if we had a `bark` function defined in a `Dog` component, `this` would point to the `Dog` component.

However, just *which* object the `this` keyword can change depending on where `this` is called. We'll touch on this more when discussing about componenents methods in react class syntax.

For now, just know that **if you want to access the `props` object from within a component, you must call it as `this.props`**. This is because you are trying to access the `props` of this component, and this component is an object.

 * It may be helpful to look back at our original exploration of JS classes back in Ignition, which can be found in the [Javascript Classes article](https://learn.launchacademy.com/lessons/javascript-classes). There is also a helpful video on the meaning of `this`, which can be found [here](https://learn.launchacademy.com/lessons/javascript-this-keyword).

The rest of the syntax should largely be familiar to you. Variables can be defined inside of the `render` method, and then used in our JSX. It's very common for us to use flow control (`if...else`), define closures, and perform operations like `map`ing over data in the top of our `render` method as well.


### Adding `state` to class syntax components

Class syntax components can be defined without state with nearly no performance cost, but there is not much reason to use class syntax without state and methods that change that state. We'll defer to adding state via class constructor.

```javascript
class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clickCount: 0,
      message: this.props.message
    }
  }

  render() {

    return(
      <div>
        <h1>Component Message: {this.state.message}</h1>
        <h1>Component Click Count: {this.state.clickCount}</h1>
      </div>
    )
  }
}
```

Here, we've defined a new property on our component called `state`. In order for lifecycle methods like `render` to work correctly, this property need to be called `state`. Within this `state` objects, we can define more properties that we would like to track and update overtime.

*Note: It is normally poor practice to define other non-state properties on your class components e.g. `this.name = "Zander"`*

In this case, we have defined `clickCount` to start at zero for any new component, to reflect the number of times the component has been clicked. We also define `message`, which defaults to a message we have passed down in props. This simply reflects that we can still set default state to some prop passed from a parent.

Finally, in order to refer our `state` properties in our methods or in our JSX, we must prepend the property name with `this.state.` first, in order to retrieve the state object defined on this component.

#### Component Methods and Binding

Updating state requires us to use a standard setter method called `setState` rather than a custom setter method for a piece state that one might define in a hooks-based component. In order to trigger this for a given user event, we should also define a custom method called `incrementCount` that helps us perform this state update. We'll conclude by making this method a callback to an `onClick` event listener.

```javascript
class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clickCount: 0,
      message: this.props.message
    }

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount(event){
    event.preventDefault()

    const newClickCount = this.state.clickCount + 1
    this.setState({clickCount: newClickCount})
  }

  render() {
    return(
      <div onClick={this.incrementCount}>
        <h1>Component Message: {this.state.message}</h1>
        <h1>Component Click Count: {this.state.clickCount}</h1>
      </div>
    )
  }
}
```
A lot of new items here, so let's break things down.

Let's begin with the `incrementCount()` method. Using es6 syntax, we define this function on the message component. Because it will be assigned as a callback to the `onClick` event listener in the return of our `render` method, we also allow it to receive `event` as an argument should we need to prevent default behavior.  Inside of this method, we define the new version of state that we want to persist: the old clickCount via `this.state.clickCount` plus one. Then, to make the change, we call a newly inherited `setState` method with the `this` keyword.

`this.setState` is our standard setter for changing a component's state. Notice how when we invoke `setState` that we pass in an object, and then designate the property and new value?

```javascript
const newClickCount = this.state.clickCount + 1
this.setState({
  clickCount: newClickCount
})
```
In order to only change the value of `clickCount` and not the value of `message`, we use object destructuring to assign this new clickCount value. So don't forget to use curly braces!

*Note: You should never try to update a property of state without `this.setState`. Updating a property of state without `setState` can cause issues such as your lifecycle methods not firing correctly.*

##### A word about `.bind`

Our component should now show the clickCount on the screen based on how many times we have clicked on the component. However, we had to do one more thing in order to get our `incrementCount` method to work, and that is that we had to *bind* it.

```
class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clickCount: 0,
      message: this.props.message
    }

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount(event){
    event.preventDefault()

    const newClickCount = this.state.clickCount + 1
    this.setState({clickCount: newClickCount})
  }
```

For any method that uses the `this` keyword, you will need to bind that method inside of your constructor in order for the `this` keyword to point to the right object (in this case, the component itself).
```
this.incrementCount = this.incrementCount.bind(this);
```
In simpler terms, this line of code retrieves the `incrementCount` method we have defined and locks any mention of the word `this` to the context of this that exists in the constructor. In this case, this ties `this` to that object. This is especially important when passing functions down as `props`. If we did not bind a function, then the method's `this` keyword could begin to point to the child component in which is was invoked!

*Note: You can skipping this binding process by defining the `incrementCount()` method as an arrow function instead! However, older versions of React will not allow you to do this without some work, so we opt to show you the more explicit method instead.**

### Understanding the Rendering Lifecycle

When React executes a class component, it performs whatever calculations are specified within that component and then uses the `return` value to determine what HTML should be on the DOM. React then renders the component, meaning that it updates the DOM with these new values.

Crucially, React will re-render a component whenever that component's state or props change. **Thus, a change in state or props will update the HTML displayed on the webpage.**

## Conclusion

We can make our components stateful and interactive through the `useState` function. State provides our component with a way to keep track of the status of different things: in this article we tracked a value called `clickCount`, but components can have multiple pieces of state.

We can then make the JSX that our component returns dependent on the values of our state. Every time a component's state or props changes, React re-renders the component. In this way, we can use state to build a dynamic React application that responds to user events.
