## Learning Objectives

We've learned how to use React to render a page; now it's time to talk about the structure of our React applications. We're going to apply the same guiding principles that we've seen up to this point - the Single Responsibility Principle, DRY, etc, to the organization of our components and the behavior each one is responsible for. We'll go over how to break down apps into well-organized pieces, and how to effectively re-use those pieces. Finally, we'll talk about why our components are stateless.

- Learn how to use nested React components
- Learn how to design a React component hierarchy
- Learn about creating an organized array of React components
- Know how to use `const` syntax to create **stateless React components**

## Following Along

In this lesson, we will be working from a pre-built application.

Perform the following steps to get started:

```no-highlight
et get react-nested-components
cd react-nested-components
yarn install
yarn run start
```

## Project Description

The new cohort of Launch Academy students are trying to figure out what they need to submit. They think our icons aren't clear enough, so we're going to help them out by creating an icon guide for them! Here are the wireframes provided for this feature:

![Icon Guide React Design][icon-guide-react-design]

Additionally, when a user clicks on an icon, we want to display a popup with a brief description of that lesson type. So far, the current application renders the following static page:

![Icon Guide React Design No Styling][icon-guide-react-no-styling]

The rendering of this page is done through the following code:

```js
// main.js
import "./app.scss"
import React from "react"
import ReactDOM from "react-dom"
import IconGuide from "./components/IconGuide"

ReactDOM.render(<IconGuide />, document.getElementById("app"))
```

```js
// IconGuide.js
import React from "react"

const IconGuide = props => {
  const articleDescription = `These are written lessons that will walk you through
    a particular concept or technique. Don't submit anything for these!`
  const exerciseDescription = `These assignments are intended to be small, short tasks
   that will allow you to put some of that newly acquired knowledge to work!
   You should submit solutions to all of these via ET!`
  const challengeDescription = `These assignments are larger, and usually require you to
   put two or three of the new concepts you've learned together.
   You should submit solutions to all of these via ET!`
  return (
    <div>
      <h2>Launch Academy Icon Guide</h2>
      <p>
        Here are all the symbols you need to know to understand our curriculum!
      </p>
      <ul>
        <li onClick={() => alert(articleDescription)}>
          <i className="fa fa-2x fa-fw fa-file-text-o" /> - Article
        </li>
        <li onClick={() => alert(exerciseDescription)}>
          <i className="fa fa-2x fa-fw fa-heartbeat" /> - Exercise
        </li>
        <li onClick={() => alert(challengeDescription)}>
          <i className="fa fa-2x fa-fw fa-puzzle-piece" /> - Challenge
        </li>
      </ul>
    </div>
  )
}

export default IconGuide
```

Note that the appearance and behavior of the app will more or less stay the same throughout this lesson. We're refactoring an existing app to make it easier to understand and read, not building any new features.

### Nested Components

This code is a good starting point, but it's doing a terrible job of adhering to the Single Responsibility Principle. The `IconGuide` component is currently responsible for rendering everything on the page. Just as in OOP we want our classes and functions to do only one thing, we want our React components to handle only one part of the page.

In order to separate the concerns of our components, we will **nest** them inside one another. That is, we'll call one component from inside another. The component that is calling the other component (i.e. rendering it in the `return`) is the **parent** and the component being called is the **child** component. Another way of thinking about it is by looking at our `import` statements. The component that is doing the importing of the other component is the **parent**. The component being imported is the **child**.

If this sounds like object composition, that's because it is! We're essentially doing the same thing: pulling out some functionality and encapsulating it in a separate class. The syntax for a nested component looks just like the JSX syntax for calling a component from `main.js`:

```js
//Component1.js

import React from "react"

const Component1 = props => {
  return <Component2 />
}
```

Before we get started, we should map out the application's architecture - what components we'll need, and how they will be used - and create a **Component Hierarchy**. Remember, in trying to break out our application into components, we are trying to break down our user interface into smaller and smaller parts. To better visualize this process, let's take our app and separate out the different pieces by drawing some boxes around them. Here's the current `IconGuide` component, outlined in red:

![React Icons No Children][icon-guide-react-boxes-no-children]

The `IconGuide` contains everything on the page, but we can definitely divide this page into more granular parts. The list of icons seems like it could be separated from the description at the top, so let's extract that part of the page and turn it into a new component, which we'll call `IconReferenceList` (outlined in orange):

![React Icons One Child][icon-guide-react-boxes-one-child]

Our component hierarchy should now look like this:

- `IconGuide`
  - `IconReferenceList`

This representation shows that `IconReferenceList` is a child component of `IconGuide`. Notice how `IconGuide` imports and renders `IconReferenceList`, so we know `IconReferenceList` is the child and `IconGuide` is the parent. Let's write our new component now:

```js
// IconReferenceList.js
import React from "react"

const IconReferenceList = props => {
  let articleDescription = `These are written lessons that will walk you through
    a particular concept or technique. Don't submit anything for these!`
  let exerciseDescription = `These assignments are intended to be small, short tasks
   that will allow you to put some of that newly acquired knowledge to work!
   You should submit solutions to all of these via ET!`
  let challengeDescription = `These assignments are larger, and usually require you to
   put two or three of the new concepts you've learned together.
   You should submit solutions to all of these via ET!`

  return (
    <ul>
      <li onClick={() => alert(articleDescription)}>
        <i className="fa fa-2x fa-fw fa-file-text-o" /> - Article
      </li>
      <li onClick={() => alert(exerciseDescription)}>
        <i className="fa fa-2x fa-fw fa-heartbeat" /> - Exercise
      </li>
      <li onClick={() => alert(challengeDescription)}>
        <i className="fa fa-2x fa-fw fa-puzzle-piece" /> - Challenge
      </li>
    </ul>
  )
}

export default IconReferenceList
```

Now we can simplify our `IconGuide` component by having it call the `IconReferenceList` component as a child:

```js
// IconGuide.js
import React from "react"
import IconReferenceList from "./IconReferenceList"

const IconGuide = props => {
  return (
    <div>
      <h2>Launch Academy Icon Guide</h2>
      <p>
        Here are all the symbols you need to know to understand our curriculum!
      </p>
      <IconReferenceList />
    </div>
  )
}

export default IconGuide
```

We now need to import the IconReferenceList component in this file. By breaking the `IconReferenceList` into a separate component, we now make our code more readable and easier to follow. You can imagine how as your application gets bigger, the more small, easy to reason about components you have, the easier it will be to keep track of what's going on in your code. This is very similar to the Single Responsibility Principle you've already learned about in OOP.

Take a minute to note the difference in the return of the `IconReferenceList` and the `IconGuide`. React `render()` can only return one top-level component to the DOM. For our `IconReferenceList`, that top-level component is the `<ul>` containing our list items. On the other hand, our `IconGuide` wants to return multiple elements at the same level. In order to have one valid node returned on the DOM, we can wrap the entire content of our return in a `<div>` when we have multiple elements. (More on this concept at the end!)

### Multiple Nested Components

We've made some progress in the right direction, but our list still isn't very DRY. The `<li>` elements all use the same format, so rather than repeating that similar code three times, we should be able to create an abstraction for them. When you have a lot of repetition in your React app, that is a natural place to make a new component. Let's have another look at the parts of the app:

![React Icons Multiple Children][icon-guide-react-boxes-multiple-children]

We can break down the list of icons even further into individual `Icon`s, but we definitely don't want to have to write a separate component for each icon. Think back to Object Oriented programming, when you created a class to represent an abstract type of object, and then created multiple instances of that class. You can think of React components in the same way - you're making a blueprint (i.e. a class), and then creating multiple instances of that blueprint. And just like with any other class, we initialize them with different parameters, which we then assign to instance variables. In React, we call those `props` instead!

Pieces of your front end that look very similar (as the icon sections do) are a natural place for you to create a new component to reduce repetition in your code.

We can create a component class to represent icons in general, and call it once for each icon in the list, passing in different props each time! Since this new `Icon` component is going to be rendered inside the `IconReferenceList`, we can update our component hierarchy accordingly:

- `IconGuide`
  - `IconReferenceList`
    - `Icon`

Looking at the `li` elements, there are only three differences between them:

![React Icons li Differences][icon-guide-react-li-differences]

The icon name, Font Awesome symbol name, and description are the variables that we will account for in our component. Those will be the props that we pass in when we call it. This allows us to easily create similar looking sections that have slightly different content. Now we can define our `Icon` component:

```js
// Icon.js
import React from "react"

const Icon = props => {
  const iconClass = "fa fa-2x fa-fw " + props.fontAwesomeSymbol
  const iconName = props.iconName
  const descriptionAlert = () => alert(props.description)

  return (
    <li onClick={descriptionAlert}>
      <i className={iconClass} /> - {iconName}
    </li>
  )
}

export default Icon
```

It is not necessary to define local variables outside the `return` - we could just as easily put the attributes in `props` directly into the `return` value, but it's a bit more readable this way.

Now we can update `IconReferenceList` to call the new `Icon` component, passing in the icon name, the Font Awesome symbol, and the description as props:

```js
// IconReferenceList.js
import React from 'react';
import Icon from './Icon';

const IconReferenceList = props => {
  ...

  return(
    <ul>
      <Icon
        iconName="Article"
        fontAwesomeSymbol='fa-file-text-o'
        description={articleDescription}
      />
      <Icon
        iconName="Exercise"
        fontAwesomeSymbol='fa-heartbeat'
        description={exerciseDescription}
      />
      <Icon
        iconName="Challenge"
        fontAwesomeSymbol='fa-puzzle-piece'
        description={challengeDescription}
      />
    </ul>
  );
};

export default IconReferenceList;
```

### Rendering Lists in React

Sometimes, we won't know ahead of time how many components we will actually have on the page. For example, if we were building a blog page with Comment components, there could be any number of comments that we'd have to display. With React, we can do something similar. If you include an array of React elements in our JSX, React will render them all for you! In our Icon Guide app, this might look something like this:

```js
// IconReferenceList.js
const IconReferenceList = props => {
  const listOfIcons = [
    <Icon
      key="1"
      iconName="Article"
      fontAwesomeSymbol="fa-file-text-o"
      description="Article Description"
    />,
    <Icon
      key="2"
      iconName="Exercise"
      fontAwesomeSymbol="fa-heartbeat"
      description="Exercise Description"
    />,
    <Icon
      key="3"
      iconName="Challenge"
      fontAwesomeSymbol="fa-puzzle-piece"
      description="Challenge Description"
    />
  ]

  return (
    <ul>{listOfIcons}</ul>
  )
}
```

Note the addition of the `key` prop to the `Icon` Components. When rendering an array of components, React needs to be able to keep track of the identity of items that are changed, added, or removed. Therefore, we must pass in a unique `key` prop for each child element. This `key` prop is required by React and you will notice your console will give you error warnings if you do not have it.

### React Component Arrays and `.map`

You can accomplish creating this array of Icon components dynamically by using the JS `.map` function to iterate over an array of information. In our code, this information often takes the form of an array of JavaScript objects like the following. Take out the `listOfIcons` variable and array and replace it with this:

```js
// IconReferenceList.js
const iconInfo = [
  {
    key: "1",
    iconName: "Article",
    fontAwesomeSymbol: "fa-file-text-o",
    description: "Article Description"
  },
  {
    key: "2",
    iconName: "Exercise",
    fontAwesomeSymbol: "fa-heartbeat",
    description: "Exercise Description"
  },
  {
    key: "3",
    iconName: "Challenge",
    fontAwesomeSymbol: "fa-puzzle-piece",
    description: "Challenge Description"
  }
]
```

When using the `.map` function, you provide it another function that changes (or transforms) the contents of the array you're mapping over in some way. `.map` then returns a new array, with these transformed values. NOTE: `.map` does not change (or mutate) the original array that it is iterating over; it returns a **new** array with the transformed values. This concept definitely takes a little while to sink in, so let's take a look at a code example.

If we were to iterate through the array defined above and return an array of React `Icon` components it might look something like this:

```js
// IconReferenceList.js
  ...
  const icons = iconInfo.map((icon) => {
    return (
      <Icon
        key={icon.key}
        iconName={icon.iconName}
        fontAwesomeSymbol={icon.fontAwesomeSymbol}
        description={icon.description}
      />
    )
  })
  ...
```

Notice how we are iterating over the `iconInfo` array using `.map`. In this example the `.map` function is returning a new array, `icons`, that is a transformed version of the `iconInfo` array. The `icon` inside of the `.map` function is a placeholder, or parameter, value much like the value inside the pipes of a `.each` function in Ruby. You can call it whatever you want (it could even be `giraffe`), though it should be something to do with the collection of information you're iterating through in the array to make your code as readable as possible (sorry `giraffe`). Since this is an array of Javascript objects that contains the information of the icons we need, we will call the placeholder variable `icon`.

Then, we need to provide a function that transforms each element in the array. This is what comes after the arrow in the `.map` above. In this example, we are returning a React `Icon` component that uses the information we are getting from the `iconInfo` array. Remember, we have access to each element in the `iconInfo` array as we iterate with `.map`, and our `icon` placeholder in the function represents what we want to do with those elements. We can then use the information in `icon` (on the first iteration it's the Javascript object at index 0 in the `iconInfo` array) to pass down the appropriate props to our `Icon` React component. As the `.map` function goes through each of the elements of the original array it will put each React component we return into the new array. By the time it finishes, the `icons` variable we defined will equal an array of React `Icon` components, one component for each of the elements in our original `iconInfo` array.

You can then use this new array of React components (which we assigned to the variable `icons`) in the return of the `IconReferenceList`. React will then take this and render your collection of components. Your return should look something like this:

```js
// IconReferenceList.js
  ...
  return (
    <ul>
      {icons}
    </ul>
  )
  ...
```

These arrays of React components are super useful for when you need to display a bunch of the same type of information, especially if you don't know how much of that information you're going to have (e.g. a bunch of comments on a blog post or ingredients on a recipe site). The icons in this case all look very similar in the way we're displaying them on the page, so it makes sense for us to create an array of the same components that are of the same type. Get familiar with this practice as soon as you can! It's a super useful pattern in React and will help you create user interfaces dynamically!

### React Fragments

Remember we mentioned React `render()` can only return one valid DOM node? On a large scale, this has potential to slow down the performance of an application from increased memory markup for extra wrapper tags, this also clutters your view when inspecting the DOM! `<div>`'s can be useful for styling a group of elements, however they can sometimes interfere with the expected HTML semantics for grid, table, and list layouts which depend on specific parent-child component relationships. As of React v16.2, we have the option to use **React Fragments** to help us render multiple elements in a single return!

Before using this new concept, open your dev tools (`opt` + `cmd` + `j`) and inspect the HTML of the page under `Elements`. Inside `body`, we have a `<div>` for app, then *another* for the content `IconGuide` is rendering. Our application right now is very small, but larger applications can quickly become cluttered with excess wrappers.

Now let's implement `Fragments`! We can include `{Fragment}` in our React import statement to declutter the return of our `IconGuide`, and using `<Fragment>` in place of `<div>`:

```js
// IconGuide.js
import React, { Fragment } from "react"
import IconReferenceList from "./IconReferenceList"

const IconGuide = props => {
  return (
    <Fragment>
      <h2>Launch Academy Icon Guide</h2>
      <p>
        Here are all the symbols you need to know to understand our curriculum!
      </p>
      <IconReferenceList />
    </Fragment>
  )
}

export default IconGuide
```

These elements are now rendered on the DOM without an additional `<div>` top-level component! A feature of `Babel` (included in the `package.json` file to assist with JS compiling) allows us to simplify this one step further for better readability by using the shorthand syntax for Fragments, which look like empty tags:

```js
...
return (
  <>
    <h2>Launch Academy Icon Guide</h2>
    <p>
      Here are all the symbols you need to know to understand our curriculum!
    </p>
    <IconReferenceList />
  </>
)
```

Keep in mind that if you're using `Fragment` inside a `map`, it will require a unique key attribute (just like we used for our `Icon`s), and you will need to explicitly declare `<Fragment>` rather than the shorthand `<>`. Here is a quick example if we wanted to also display the icon description on the webpage outside the `Icon` component:

```js
let icons = iconInfo.map(icon => {
    return(
      <Fragment key={icon.key}>
        <Icon
          iconName={icon.iconName}
          fontAwesomeSymbol={icon.fontAwesomeSymbol}
          description={icon.description}
        />
        <p>{icon.description}</p>
      </Fragment>
    )
  })
```

## Summary

This article has demonstrated how to use nested components to structure a React application. In doing so, we have enforced the Single Responsibility Principle and reduced the complexity of our components, while also increasing maintainability. We have learned how to use arrays and the `.map` function in JS to create lists of React components and render dynamic children. We have also learned an alternative way to render multiple elements without cluttering the DOM.

### External Resources

- [React ES6 Syntax for Stateless Components][react-stateless-component-es6-syntax]
- [React Multiple Components][react-multiple-components]
- [React Lists and Keys][react-lists-and-keys]
- [React Fragments][react-fragments]

[icon-guide-react-design]: https://s3.amazonaws.com/horizon-production/images/icon-guide-react-design.png
[icon-guide-react-no-styling]: https://s3.amazonaws.com/horizon-production/images/icon-guide-react-no-styling.png
[icon-guide-react-boxes-no-children]: https://s3.amazonaws.com/horizon-production/images/icon-guide-react-boxes-no-children.png
[icon-guide-react-boxes-one-child]: https://s3.amazonaws.com/horizon-production/images/icon-guide-react-boxes-one-child.png
[icon-guide-react-boxes-multiple-children]: https://s3.amazonaws.com/horizon-production/images/icon-guide-react-boxes-multiple-children.png
[icon-guide-react-li-differences]: https://s3.amazonaws.com/horizon-production/images/icon-guide-react-li-differences.png
[react-multiple-components]: https://facebook.github.io/react/docs/multiple-components.html
[react-stateless-component-es6-syntax]: https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
[react-lists-and-keys]: https://facebook.github.io/react/docs/lists-and-keys.html
[react-fragments]: https://reactjs.org/docs/fragments.html#short-syntax
