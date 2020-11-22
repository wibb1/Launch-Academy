## Learning Objectives

- Learn what React is and why you should use it.
- Be able to set up a React application.
- Know how to create a React element and insert it into the DOM using JSX syntax
- Define and create your first React Component

## What is React?

[React][react-home] is a JavaScript library for building user interfaces. React allows us to tie the standard DOM manipulation logic we are used to more closely to the UI itself. Once we have learned React sufficiently, we will be able to write React JS code that itself both creates elements on our webpage, and makes them interactive.

React was developed by [Facebook][facebook] and [Instagram][instagram], and it has gained popularity as a front-end library for many reasons, including, but not limited to:

- It is a lightweight library that is easy to set up and use.
- Its API is simple and intuitive.
- It efficiently updates the user interface when needed, making your app run at a much faster pace.
- It scales well in large applications.

Now that we know we have an idea of what React is and why we should use it, let's go ahead and set it up in one of our applications!

### Getting Started

```no-highlight
et get introduction-to-react
cd introduction-to-react
yarn install
```

## Introduction

We will add React to an existing application, which has Webpack. Webpack is a powerful tool that is doing a lot of the heavy lifting for our project. Webpack helps us manage and use our new dependencies (such `'react'` itself!) and link all of our project's files together. In fact, when we start up webpack in our terminal, webpack will generate a `bundle.js` that consolidates all of our dependencies and custom React code together which allows our work to be easily served up in our web applications. Webpack also comes with "webpack-dev-server", which allows for things like: serving up our React project's to localhost:8080 (by automatically returning `index.html` and including our `bundle.js`), reloads the page and the `bundle.js` when we make changes to our JavaScript files, and much more.

 Babel is another key player in our project. Babel will transpile your ES6 and React code to be compatible with all browsers. Transpilers take code in one language and convert it to another.

 From this point on, you will need to run `yarn install` **every** time you begin a React project, and then `yarn start` in order to load up `webpack-dev-server` and visit the latest version of your app.

### Understanding the React File Structure

React projects can have varying file structures, but will largely be comprised of the following:

```no-highlight
.
├── build
│   ├── bundle.js (hidden from view by default)
│   └── index.html
│
├── node_modules
│ 
├── src
│   ├── components
│   │   └── App.js
│   │
│   └── main.js
│
├── .babelrc
├── package.json
└── webpack.config.js
```

The `.babelrc`, `package.json`, and `webpack.config.js` files are used to configure our application. This allows us to transpile our React code in the `src` folder into a single `build/bundle.js` file, and dish that out in the rendered `index.html` document. You will see this `bundle.js` file included in the `<script>` tag of the `index.html` file (we will be adding this into this project momentarily).

There are quite a few files and folders required for the setup of a React application, but the majority of our focus will be on the `src` folder. This is where we will be writing the majority of our code.

If you are interested, here's a more detailed rundown of this project's file and folder structure:

- The **build** folder will contain two important files. The `bundle.js` file is a transpiled/compiled version of all your React code from multiple ES6 files into a single ES5 file that can be sourced to your index page. This is created when you start your server, which we will do in a moment.
- The second file in the **build** folder is the `index.html`, which is the html file viewed by the user. This file will include the `bundle.js` file, allowing for all your beautiful React code to run on the webpage. Your React code only gets run because our HTML document runs our `bundle.js` file.
- The **src** folder is where we will write all our React code. You'll spend a majority of your time writing JavaScript here. We will take a deeper dive into the meat of our React applications later on in the reading.
- The **.babelrc** file specifies our Babel configuration in our project's root folder. Babel is the transpiler converting our ES6 code to ES5, which is defined in the configuration. We need this to maintain compatibility in the browser for all of our awesome ES6 features since different browsers implement ES6 at different levels.
- The **package.json** file is where all our dependencies will be declared for this application. Anytime we run `yarn install`, it downloads and installs the dependencies specified in this file. You need to run this **every** time you begin a React project. This will allow any user to install `webpack`, `babel`, and any React modules necessary to work on a React project at the execution of a single command. We also define `yarn run start` as a script to run `webpack-dev-server`, and set the "hot" flag, a feature of Webpack that enables the browser to automatically fetch newly compiled code any time you make changes to a file and save them. This allows us to run `yarn run start` to start up a simple server to serve our html and react code, and to have our page update with our changes without having to restart said server.
- The **webpack.config.js** is the configuration for `webpack`, the compiler that takes all our JS files and compiles them into the `bundle.js` file. This file specifies a couple of loaders, babel and sass. With this we are telling Webpack that we want to compile our code using babel, and that we want any Sass that we include to be compiled to CSS.

### Setting Up React

First, let's add the `react` and `react-dom` npm packages to our project (specifying a particular version to ensure they interact well with our other packages):

```no-highlight
yarn add react@16.8.6 react-dom@16.8.6
```

Next, we're going to update `build/index.html` file to include an HTML element with the id `app`. This will be the `<div>` that gets replaced with your React code. Replace the `<body>` provided in that file with the following:

```html
...
<body>
  <div id="app">
    This text will be replaced by ReactDOM
  </div>
  <script src="/bundle.js"></script>
</body>
```

### Configuring JSX

[JSX][jsx-specification] is an XML-like syntax extension to ECMAScript (**ES**). We'll be using it heavily in React to specify what each of our React components should output (more on this later!).

To begin setting up JSX for our application, download the preset npm package via:

```no-highlight
yarn add --dev @babel/preset-react@^7.0.0
```

Since JSX is not part of the ES standard implemented in browsers, we must transpile JSX code to valid ES code. To accomplish this, we need to add an additional preset to our Babel setup. Modify the `presets` attribute in `.babelrc` as follows:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Then, start the webpack server by running

```no-highlight
yarn run start
```

and visit <http://localhost:8080>. You should see the text "This text will be replaced by ReactDOM" on the page, with no errors in the console.

**Important Note**: Similar to starting your server with `ruby server.rb`, you need to run `yarn run start` **every** time you start working on your React project! Otherwise, your browser will not reflect any changes in your code. As noted above, `yarn run start` is an alias for `webpack-dev-server`. This is defined in the `scripts` section of `package.json`. Starting our application with `yarn run start` ensures that we are running the `webpack-dev-server` version installed by `yarn` into the `node_modules` folder and specified by our development dependencies in `package.json`.

## Writing React

We can now begin writing our JavaScript code using JSX syntax to implement React. Find the `main.js` file in the `src` folder and add the following:

```javascript
// src/main.js
import React from "react"
import ReactDOM from "react-dom"

const headerElement = <h1>I am a React element! Hear me roar!</h1>

ReactDOM.render(
  headerElement,
  document.getElementById("app")
)
```

Importing the `react` and `react-dom` modules on the first two lines provides: a) the ability to use syntax like JSX and b) the `ReactDOM` object, which helps us take our react elements and render them on our webpage!

The `headerElement` is a variable whose value is JSX! When writing in React, our JSX code is represented *almost* identically to standard HTML, with slightly differences that we will continue to explore. This `<h1>...</h1>` tag is not HTML, but instead a React element (HTML information stored in the form of a JavaScript object) that might eventually be used to render an h1 tag on our DOM. The full list of tags supported by the React Framework can be found [here][react-supported-html-elements], though nearly all HTML tags you are likely familiar with are supported by React.

The ReactDOM `render` method takes two arguments: a React element that we wish to render, and an existing DOM element that will become parent to said React element. `headerElement` has already been defined, and we can see that it will help us place an `h1` on the screen once rendered. `document.getElementById("app")` will find our `div` with an id of `'app'` in our `index.html` and replace the children of that element with the React element.

To see this in action, navigate to <http://localhost:8080> and hit refresh (`Command+Option+J` on Macbooks). You will briefly see the text "This text will be replaced by ReactDOM", and then the text will disappear. If you open your Chrome Developer Tools (`Command+Option+J`) and inspect the HTML, you will see that the contents of the `div` tag with the `id` value of `app` have been replaced like so:

```html
...
<div id="app">
  <h1 data-reactroot>I am a React element! Hear me roar!</h1>
</div>
...
```

The behavior that you see every time the browser is refreshed can be explained as follows:

1. The original `index.html` is served. The `index.html` contains a `div` with an `id` attribute value set to `app`. This `div` element has a child text node with the text "This text will be replaced by ReactDOM".

2. Once the `div` has rendered in our browser, the `script` tag included in your `index.html` is rendered serving our JavaScript code which then executes on the page.

3. Then our JavaScript code in `src/main.js` creates an `h1` JSX element.

4. Then we call `ReactDOM.render` from `src/main.js`. This method takes in two arguments. The **first** argument is the JSX variable we want to render, and the **second** argument is _where_ to render it, i.e. the location (or DOM element) on `index.html`.

`ReactDOM.render` will replace whatever HTML is present before our render function runs, with the output of our JSX variable. In this case, our `header` variable will replace the child text node in our `div` with an `id` of `app`.

**Note:** You can disregard the addition of the `data-reactroot` attribute. This attribute is used by `ReactDOM`.

## Setting Attributes on JSX Elements with Props

One important aspect of JSX elements is that we can change them by passing in custom properties, known as `props`. These are very similar to the attributes used for normal HTML tags.

```javascript
// src/main.js
...

const headerElement =
//                    props
//    ┌─────────────────┴──────────────────┐
  <h1 id="special-header" className="header">
    I am a React element! Hear me roar!
  </h1>;
...
```

For a property in the `props` object, if the property name is the same as the name of a supported HTML attribute (e.g. `className` or `id`), then it will update the HTML attribute in the DOM. So, the property `id` works just as it would in an HTML tag. All DOM properties and attributes should be camelCased.

Typically, the property name will match the HTML attribute. However, there are some caveats:

- **Use `className` instead of `class`**. `class` is a JavaScript keyword.
- **Use `htmlFor` instead of `for`**. `for` is a JavaScript keyword.

A list of all the HTML attributes supported by React can be found, [here][react-supported-html-attributes].

We can also add event listeners via `props`. These are very similar to the event listeners we can define with vanilla JavaScript e.g.

```JavaScript
document.getElementById("myBtn").addEventListener("click", displayDate);
```

However, instead of the above chaining, we can define event listeners and designate their callback functions directly on the React element in JSX. A list of all the supported events can be found [here][react-supported-events]. We will explore this more in the future.

```javascript
// src/main.js
...
const roarAtMe = () => {
  alert('Roar!')
}

const headerElement = (
  <h1  id="special-header" className="header" onClick={roarAtMe}>
    I am a React element! Hear me roar!
  </h1>
);
...
```

If we click on the rendered `h1` element in our browser now, a pop-up will appear with the text 'Roar!'.

## JSX Expressions

If you wish to use a JavaScript expression (a.k.a. JavaScript code) to set a property value, you can place the expression inside curly brackets (`{}`). These curly brackets tell React to execute the code inside of them, as long as they are an expression. Here is an example of using a JSX expression with the variable `text`:

```javascript
// ...

const text = "I am a React element! Hear me roar!"

// ...

const headerElement = (
  <h1 id="special-header" className="header" onClick={roarAtMe}>
    {text}
  </h1>
)

// ...
```

Now, we can define JavaScript variables and insert them into JSX. Notice how JSX evaluates the value of the variable text and displays that on the DOM.

Note that **you should not** use [JavaScript statements and declarations][mdn-statements-and-declarations] _inside_ the curly brackets when setting property values. That is not valid JavaScript syntax. Define them outside of JSX brackets as in the example.

### Incorrect

```javascript
/// ...

const headerElement = (
  <h1 id="special-header" className="header" onClick={roarAtMe}>
    { const text = "I am a React element! Hear me roar!" }
  </h1>
);

/// ...
```

### Correct

```javascript
// ...

const text = "I am a React element! Hear me roar!"

const headerElement = (
  <h1 id="special-header" className="header" onClick={roarAtMe}>
    {text}
  </h1>
)
// ...
```

**Note:** If you ever want to create a JSX element with no children, you can use a self-closing element, like so:

```javascript
<div />
```

## React Components

Using JSX syntax, we could write all our html in our `main.js` file. But we should utilize the **single responsibility principle** and separate our concerns. We want to break out our application into small, understandable pieces. In React, these pieces are called components.

We do want to keep all of our React code in one directory, so we're going to organize all of our React code within our `src` directory. Let's define a component in a `src/components` subfolder. Whenever you define a component, note you will have to import the React library at the top, just like in the example below.

```javascript
// src/components/Header.js
import React from "react"

const Header = (props) => {
  const text = "I am a React element! Hear me roar!"
  const roarAtMe = () => {
    alert("Roar!")
  }

  return (
    <h1 id="special-header" className="header" onClick={roarAtMe}>
      {text}
    </h1>
  )
}

export default Header
```

We have defined a `Header` component here. **A component is simply a function representing a segment of our UI, that returns JSX**. Look closely at the declaration of the component: `const Header = (props) => {`. We've declared a variable using `const` called `Header`. This variable holds a function `(props) => {..`, whose only argument is called `props` (don't worry about `props` for now). This function is an anonymous arrow function `() => {}`, and this arrow function uses the keyword `return` to denote that the component's responsibility is to return JSX for an h1 tag.

*Note: there are components that are not functions, but objects. But we will be focusing on components as functions*.

Now, let's import the component in `main.js`.

```javascript
// src/main.js
import "./main.scss"
import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header"

ReactDOM.render(
  <Header />,
  document.getElementById("app")
)
```
We call on a component by adding in open and closing carrots `< />`. In this way, its as if we wrote all of the code from our `Header.js` file right there in `ReactDOM.render`.

Thanks to Babel and ES6, the JSX code transpiles to the same code that we had before, but we have now separated our concerns into a single, _reusable_, component. As our application grows, we can define more React components for single use or multiple use cases.

## Summary

React is a popular JavaScript library that makes it easy for us to create user interfaces.

We can use JSX and React to write code that is easy to read and clearly defines the user interface of our Web applications. JSX creates `ReactElement` objects, which represent DOM elements. The `ReactDOM.render` takes these JSX objects and inserts them into the browser DOM.

We can define React Components that utilize JavaScript ES6 modules and inherit from the React Library to keep our React code modular.

### External Resources

- [React Documentation][react-documentation]
- [Supported HTML elements][react-supported-html-elements]
- [Supported HTML attributes][react-supported-html-attributes]
- [Supported events][react-supported-events]
- [`ReactDOM.render`][react-dom-render]
- [JSX in Depth][react-jsx-in-depth]
- [React Linting with Atom](http://aramzs.github.io/react,/jshint/2016/01/18/jshint-how-to-work-with-jsx-in-atom.html)
- [Babel Documentation](https://atom.io/packages/language-babel)

[babel-repl]: http://babeljs.io/repl/
[facebook]: https://www.facebook.com/
[instagram]: https://www.instagram.com/
[jsx-specification]: https://facebook.github.io/jsx/
[mdn-statements-and-declarations]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
[react-home]: https://facebook.github.io/react/
[react-documentation]: https://facebook.github.io/react/docs/getting-started.html
[react-dom-render]: https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
[react-jsx-in-depth]: https://facebook.github.io/react/docs/jsx-in-depth.html
[react-supported-events]: https://facebook.github.io/react/docs/events.html#supported-events
[react-supported-html-attributes]: https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
[react-supported-html-elements]: https://facebook.github.io/react/docs/tags-and-attributes.html#html-elements
[react-synthetic-event]: https://facebook.github.io/react/docs/events.html#syntheticevent
