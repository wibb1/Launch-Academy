## Learning Objectives

- Learn how to use React components
- Understand how data is passed into and used within components via `props`

## Following Along - Code Example

To get quickly set up, run the following:

```no-highlight
et get react-components
cd react-components
yarn install
yarn run start
```

## React Components

Let's explore how components work in React by looking at the following two files:

```javascript
// src/main.js
import React from "react"
import ReactDOM from "react-dom"

import MessageComponent from "./components/MessageComponent"

ReactDOM.render(
  <MessageComponent />,
  document.getElementById('app')
);
```

```javascript
// src/components/MessagesComponent.js
import React from "react"

const MessageComponent = props => {
  return (
    <div>
      <h1>Component Message: Hi!</h1>
    </div>
  )
}

export default MessageComponent
```
This syntax should be familiar to you. We define a `MessageComponent`, which is a function that returns some JSX (syntax like HTML that creates React) in our `MessageComponent.js` file. We then import that component into `main.js`. `main.js` is the "start" of our app, in that our `MessageComponent` only gets rendered because it is called on in `ReactDOM.render`. Finally, the `MessageComponent` function, like most React functions, takes in an argument here which we call `props` by convention.

Booting up our Webpack Dev Server with `yarn start` and going to <http://localhost:8080> will display the following in the browser:

![React Stateless Components Photo 1][react-stateless-components-photo-1]

One important aspect of interactive User Interfaces (UIs) like this page rendered by React JS is the storage of data. With React Components, there are two main ways of storing data, with the first being through the use of static properties, also known as `props`.

## React Props

Properties, or `props`, can play two roles. The first is to give a JSX tag an HTML property, such as `id`, `className`, or define event handlers, or define other html properties. However, `props` can also be used for passing data *between* components as well. In the context of React, props are key-value pairs of information passed down to components. You are able to define the key and value yourself. In the example below, the `prop` of `message` has a value of `"Hello from main.js"`.

When we want to pass information about what our `MessageComponent` will say, we must start from the file which calls and utilizes an instance of the component (denoted by `<MessageComponent />`). Here is an example of passing data into a `MessageComponent`:

```javascript
// src/main.js
import React from "react"
import ReactDOM from "react-dom"

import MessageComponent from "./components/MessageComponent"

ReactDOM.render(
  <MessageComponent message="Hello from main.js" />,
  document.getElementById("app")
)
```

`<MessageComponent message="Hello from main.js" />` is calling an instance of a `MessageComponent` and passing the "prop" of `message="Hello from main.js"`. This,  as opposed to solely a props-less `MessageComponent` we had before with: `<MessageComponent />`.

Booting up our Webpack Dev Server and going to <http://localhost:8080> will display the following in the browser:

![React Stateless Components Photo 1][react-stateless-components-photo-1]

What gives? We have explicitly changed the message we want to show in `main.js`, but we haven't yet accessed that prop from within our `MessageComponent` component. Let's take a dive into the `MessageComponent` file and see how props can be accessed. Let's add a `debugger` above the `return` of our function:

```javascript
// src/components/MessageComponent.js
import React from "react"

const MessageComponent = props => {
  debugger

  return (
    <div>
      <h1>Component Message: Hi!</h1>
    </div>
  )
}

export default MessageComponent
```

Upon refreshing the page, you should hit the debugger. If we check what `props` is in the console, you should see the following result:

![React Stateless Components Photo 2][react-stateless-components-photo-2]

As you can see, the message property passed in from `main.js` is now available as a key value pair within `props`. `props.message` returns `Hello from main.js`.

This should simplify our understanding of `props` when we see it in our React code: `props` is an object (made of key/value pairs) representing any of the arguments we've passed to our component functions. If we were pass three "prop" arguments to our `<MessageComponent />` in `main.js`, then all three key/value pairs would be available for use *inside* the component via the `props` object.

We can now use a JSX expression to display the message from `props`, instead of hard-coding the message:

```javascript
// src/components/MessageComponent.js
import React from "react"

const MessageComponent = props => {
  return (
    <div>
      <h1>Component Message: {props.message}</h1>
    </div>
  )
}

export default MessageComponent
```

Here we are calling the `message` key from `props` to display the value as the component message. We should see the following changes updated in the browser:

![React Stateless Components Photo 3][react-stateless-components-photo-3]

`props` are considered to be static; they cannot be changed. You cannot and should not change any of the key/value pairs in `props` from within the child component (`MessageComponent` in this case). If you want to change props, you need to change them in the parent file that is handing it down (in the `main.js` file here). When the data in our application changes, how can we update a component to show the latest information? Luckily, there is a second form of data storage on React Components known as `state`. We will be covering state later on in React week, so do not worry about it for now.

Components without state, that only have data being passed down through `props` like the `MessageComponent` above are sometimes called **Stateless Components**.

## Rendering Multiple Components

Let's say I have more messages that I wish to display on the screen. `ReactDOM.render` can only take one top-level React element as an argument, so the following would not work:

```javascript
// src/main.js
// ...

ReactDOM.render(
  <MessageComponent message="Hello from main.js" />,
  <MessageComponent message="Do you perchance have any brussels sprouts?" />,
  <MessageComponent message="The lack of cruciferous vegetables displeases me." />,
  document.getElementById("app")
)

// ...
```

However, we can temporarily wrap our MessageComponents in a surrounding `div` for simplicity.


```javascript
// src/main.js
// ...

ReactDOM.render(
  <div>
    <MessageComponent message="Hello from main.js" />

    <MessageComponent message="Do you perchance have any brussels sprouts?" />

    <MessageComponent message="The lack of cruciferous vegetables displeases me." />
  </div>
  document.getElementById("app")
)

// ...
```
This...works, but looks rather inelegant. `main.js` renders this div, which itself is a parent to three instances of our `MessageComponent`. Because we have made our `MessageComponent` dynamic, it can take different message values in as props, which results in three different messages on our screen.

Our div is actually acting as something of a component itself. It is a React element whose primary responsibility is to render other components. Let's continue to separate out our concerns by defining one more component in a separate file `MessageList.js`

```javascript
// src/components/MessageList.js
import React from "react"

import MessageComponent from "./MessageComponent"

const MessageList = props => {
  return (
    <div>
      <MessageComponent message="Hello from main.js" />

      <MessageComponent message="Do you perchance have any brussels sprouts?" />

      <MessageComponent message="The lack of cruciferous vegetables displeases me." />
    </div>
  )
}

export default MessageList
```
Our code is nearly the same as how it appeared earlier in `main.js` except we have moved it into it's own component. We also need to make sure import `MessageComponent` here, because we call on it directly in our `MessageList`. You only need to import a component if you use it in a given file.

Next, we need to update `main.js` to use our new `MessageList` component.

```javascript
// src/main.js
import React from "react"
import ReactDOM from "react-dom"

import MessageList from "./components/MessageList"

ReactDOM.render(
  <MessageList />,
  document.getElementById("app")
)
```

Refreshing our browser at `localhost:8080` should now show us all three of our messages once again.

In this final implementation of our app, our React code begins with `main.js`. `main.js` designates that it will render `MessageList` inside of whatever html element that has an id of "app". The `MessageList` component, which is itself a function, returns `MessageComponent`s in one top-level react element (the div). Those same `MessageComponent`s get called, and return the final JSX that contains our messages. The content of our messages were passed as key/value pairs from `MessageList` as props down to each `MessageComponent`.

We can visualize this in a tree-like hierarchical structure.

```no-highlight
.
├── main.js
│   └── MessageList
│       └── MesssageComponent
│       └── MesssageComponent
│       └── MesssageComponent
```

It's often a good idea to write out these structures as our React apps grow, in order to maintain a good sense of the hierarchy between all of our components.

## Summary

Components help us delineate different sections of our UI (our webpage in this case). We can pass information into a component as key/value pairs knowns as "props". We can then access those props via the `(props)` object to pass messages dynamically. We can then use our components in different ways in order to render different information efficiently. Components can also render other components, which in turn creates a tree structure that begins with the top-most component call in the `ReactDOM.render` of `main.js`.

### External Resources

- [React Docs: Thinking In React][react-docs-thinking-in-react]

[react-docs-thinking-in-react]: https://facebook.github.io/react/docs/thinking-in-react.html
[react-stateless-components-photo-1]: https://s3.amazonaws.com/horizon-production/images/react-stateless-components-photo-1.png
[react-stateless-components-photo-2]: https://s3.amazonaws.com/horizon-production/images/react-stateless-components-photo-2.png
[react-stateless-components-photo-3]: https://s3.amazonaws.com/horizon-production/images/react-stateless-components-photo-3.png
