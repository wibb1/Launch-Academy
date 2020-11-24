## Learning Objectives

In order to explore how we can add the `fetch` API into our application, let's use a simple conspiracy theory app. Nothing too polemical, just our favorite goofy theories such as "Aliens really just want to take our flaming hot cheetos".

By the end of this lesson we should understand:
* How controlled components and react forms work when used `class` syntax
* What react lifecycle methods are, and where and when `render` and `componentDidMount` can be used in our react application
* How to properly use fetch `GET` and `POST` requests

## Getting Started

```no-highlight
et get lifecycle-methods-and-fetch-with-class-syntax
cd lifecycle-methods-and-fetch-with-class-syntax
yarn install
yarn run start
```

In a separate tab, launch your Sinatra server:

```no-highlight
bundle
ruby server.rb
```

On the page, you should be able to see a form for a "Theory Tracker", as well as track any particularly unique theories that you might have.

## Reviewing the React App We are Given

In the code provided, we should see that we have three primary components, which use a mix of class and functional component syntax. `App` renders our `TheoriesList` which uses `.map` to render any of the theories that we currently are tracking in the state of `App`. `App` also renders the `TheoryFormContainer` which tracks a user's new theory entry, and can then add that new theory to our list in `App` state thanks to the `trackNewTheory` function that it is passed down as in `props`.

If you have worked with React hooks in the past, you should be familiar with the standard one-way data binding found in our `TheoryFormContainer`, wherein we track a user's new entry into our form by listening to a `change` event on the input field, update state based on what the user typed, and then re-render the component with that state displayed. This is sometimes called "uni-directional flow". In this case, the input field we render in the form has a value dependent on state, but also helps us track changes that affect that state.

Here are some of the distinctions that you might note between the class syntax in this `TheoryFormContainer` compared to a similar form container that uses `useState` hooks and is a function.
* Once again, we have our component use `class` syntax and inherit from `Component`
* `state` is defined as a property of this class in our `constructor`
* `render()` is a built-in lifecycle method that renders our JSX when it is first mounted on the DOM. Any time state changes in this component, or when this component is passed new props, the `render` method will be called.
* Rather than define free floating arrow functions, we define our functions as methods on the `TheoryFormContainer` using es6 syntax, such as `handleNewTheoryChange`, `handleFormSubmit`, `handleClearForm`.
* Any methods we define on our component should be bound to the component in the constructor.
* When calling on props, we have to refer to props passed to the class component, and so must use `this.props`.
* When referring to our component's state, we must similarly call `this.state`.
* In order to change state, we must use the standard setter `this.setState`. and ideally use object destructuring as well.

## Lifecycle Methods and Fetch

This app is fine for temporarily tracking our latest goofy conspiracy theories, but we will have to use the `fetch` api in order to send our new theories to our Sinatra backend where they can be stored. We'll also have to retrieve our theories from the backend when we initially render the app on the DOM.

In React 16.8 and above, we have the very handy `useEffect` hook to trigger our initial asynchronous fetch request when the component is first mounted on the DOM. However, when using older versions of React, you will often see `componentDidMount` used. In fact, there are numerous lifecycle methods that exist in components that inherit from `Component` that we can use to run functionality at specific moments in the "lifecycle" of a component, but we won't be using them here.

The lifecycle of a component is usually divided into three stages.
* Mounting Phase: when the component is being placed on the DOM and renders it's JSX for the first time
* Updating Phase: when state changes in that component via `setState` or when the component receives new props
* Unmounting Phase: when the component is being removed from the DOM

The lifecycle methods that are available to us get run at specific moments in these phases, but for simplicity, we will only be referring to and using two of the lifecycle methods: `render` and `componentDidMount`. In fact, **you will be using these two lifecycle methods a grand majority of the time when working with class syntax**.

Note: these lifecycle methods get run automatically over the life and changes of a component. In fact, for a component that inherits from `Component`, many of these lifecycle methods are already defined and running behind the scenes. When you decide to use one, you are defining your own implementation of an method that React expects to have access to! As such, you also don't need to bind lifecycle methods.

We've already identified when the `render` method is called: when a component is first mounted on to the DOM (in the "Mounting Phase"), and when state or `props` change for this component (in the "Updating Phase"). But what about `componentDidMount`?

### componentDidMount and Initial "Get" Fetch Requests

In React 16.8 and above, `componentDidMount` was replaced by a combination of `useEffect` that is run with a callback function as a first argument and an empty array as a second argument.

If we were using React hooks, our code for retrieving the list of conspiracy theories we have on the backend might look something like this:

```javascript
useEffect(() => {
  fetch("/api/v1/theories")
  .then((response) => response.json())
  .then((persistedTheoriesResponse) => {
    setTheories(persistedTheoriesResponse)
  })
}, []);
```

However, when using class syntax, you'll often see `componentDidMount` instead, which is run in that first "Mounting Phase". Let's add the following code as a method on our `App` component.

```javascript
componentDidMount(){
  fetch("/api/v1/theories")
  .then((response) => response.json())
  .then((persistedTheoriesResponse) => {
    this.setState({theories: persistedTheoriesResponse})
  })
}
```
Thankfully, the difference is somewhat minimal. `componentDidMount` **is run right after the component is first rendered**. So, when rendering a component, our `constructor` is run and the component is made but not yet mounted, the `render()` method is called next and renders our JSX with default state. Finally, `componentDidMount` is called after `render` is complete. That's it! `componentDidMount` is only called during that first mounting phase.

You'll notice that beyond using `setState` to change state with the response, our syntax is pretty similar. You're app should now be rendered with a bunch of fun conspiracy theories that Launch Academy staff members have made.

### Making a POST Request

No lifecycle methods are needed for making a `POST` request, so the pattern we use here should be familiar to you.

Let's navigate to `App` and update the `trackNewTheory` method accordingly:
```javascript
trackNewTheory(theorySubmission) {
  fetch("/api/v1/theories", {
    method: "POST",
    body: JSON.stringify(theorySubmission)
  })
  .then((response) => response.json())
  .then((newlyPersistedTheory) => {
    let oldTheories = this.state.theories
    this.setState({theories: oldTheories.concat(newlyPersistedTheory)})
  })
}
```
Looks familiar right? Our fetch syntax is the same, and we are still using a custom function to make both the fetch request and subsequently set that fetch's response in state. The only difference is our use of `this.state.theories` to refer to the state that currently exists on our component, and then our use of `this.setState` to add the theory we had just sent to the backend to that list of theories. Our form should now both persist and render any new theories we add!

### Other Lifecycle Methods

Other lifecycle methods exist for class-syntax based react components, and you may find them valuable in your endeavors as a react developer, though you will likely use them less frequently. Ones of note are `componentDidUpdate()`, `componentWillUnmount()`. Other lifecycle methods will be invoked far more rarely, but if you would like to learn, check out the documentation on [React "Component"](https://reactjs.org/docs/react-component.html)

## Conclusion

We should now have a basic understanding of controlled components and forms when using class syntax, lifecycle methods such as `render` and `componentDidMount` that we use most often, and where we can add in our fetch requests, allowing us to create a truly full stack experience for our users.
