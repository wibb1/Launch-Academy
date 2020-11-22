### Learning Goals

- Summarize ReactJS fundamentals
- Examine state relationships in related React Components within a sample application

## Following Along - Code Example

In this article we'll be walking through an app and bringing together the concepts we've learned thus far.

To get set up, run the following in your terminal:

```no-highlight
et get react-fundamentals-review
cd react-fundamentals-review
yarn install
yarn run dev
```

Then in another terminal tab run:

```no-highlight
yarn run dev:client
```

Visit `http://localhost:3000/`

### Remind Me: What is React again?

React is a lightweight, scalable JavaScript framework (e.g. a library of code) that is used to create user interfaces.

React developers (that's you!) use JSX, which is an inline HTML-like markup that is converted to a virtual DOM. That virtual DOM is compared to the real DOM and then only the parts that have changed are updated. The fact that only the differences get applied is what makes React so fast.

#### Stateless Component Arrays

Sometimes we want a component that will just take the props that are passed down from a parent component and render the markup. We know these as **stateless** components because they will always return the same output given the same input.

When we want to display a list of similar items in React, we iterate over any array of data we have and return a new array of similar React components.

The best way to do this is to use JavaScript's `.map` function, which iterates over a given array, and returns a new array with modified data. In this case, we can call `.map` on our data array and turn that data into the React components we need.

Let's start exploring our app. All of these files are located in the `/src` directory.

The first thing we'll want to do is set up our app so it will display data to the screen in its simplest format. In our case, we want a list of pies. Let's take a look at our `data.js` file, which is located in the `constants` directory:

```javascript
// constants/data.js

const data = [
  {
    id: 1,
    name: "Key Lime Pie"
  },
  {
    id: 2,
    name: "Sweet Potato Pie"
  },
  {
    id: 3,
    name: "Apple Pie"
  },
  {
    id: 4,
    name: "Coconut Cream Pie"
  }
]

export default data
```

That's one tasty set of pies! We can import this data into our `main.js` file, and pass it to our `App` component as **props**.

```javascript
// main.js

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"
import data from "./constants/data"

ReactDOM.render(
  <App data={data} />,
  document.getElementById("app")
)
```

Our `App` component can then access this information via `props.data`, which we pass to our `PieList` component as **props** (with the key of `pies`).

```javascript
// components/App.js
import React from "react"
import PieList from "./PieList"

const App = props => {
  return (
    <div>
      <h1>Pie Decider!</h1>
      <h3>What Is Your Favorite Pie?</h3>
      <PieList
        pies={props.data}
      />
    </div>
  )
}

export default App
```

When creating new components, we need to make sure we are importing and exporting them. It's good practice to initially set up your child component to render a simple `<h1>` element to make sure everything is hooked up properly.

Add the `<h1>` element to the `PieList` component as shown below.

```javascript
// components/PieList.js
import React from "react"

const PieList = props => {
  return (
    <div>
      <h1>Hello! Pie please?</h1>
    </div>
  )
}

export default PieList
```

If we check our browser we can see that this is great! Everything is all hooked up! Now in our `PieList.js` file, we can `map` through the array that we passed down as `props` from our `App` component. Note that this data was actually passsed as `props` twice. Once from `main.js` into our `App` component, and a second time from the `App` component into the `PieList` component.

We can then `map` over our array in order to transform each element into a `Pie` component. Again, `.map` returns these `Pie` components in the form of an array, which we can call `pies`. We can then render the array of `Pie` components inside the `<ul>` element.

Let's add those in now.

```javascript
// components/PieList.js
import React from "react"
import Pie from "./Pie"

const PieList = props => {
  const pieComponents = props.pies.map((pie) => {
    return (
      <Pie
        key={pie.id}
        name={pie.name}
      />
    )
  })

  return (
    <ul>{pieComponents}</ul>
  )
}

export default PieList
```
We've also changed the `div` rendered into a `ul` since we hope to have `li` tags for each of our pies.

In our `Pie.js` file, we will take the data that is passed into each `Pie` component and define how that data is to be rendered to the screen. In this case, we can simply take the `name` that we received as `props` and put it in a JSX `li` tag.

```javascript
// components/Pie.js
import React from "react"

const Pie = props => {
  return <li> {props.name} </li>
}

export default Pie
```

Ta-da! We have our list of pies!

#### Stateful Components

Of course, this is React! We want some of our components to be able to change and update our DOM with new data in the blink of an eye, right? We can do that with **Stateful Components**.

Let's update our pie app so that when we click on a pie, it changes color to reflect that we've selected it as our favorite.

If we look at our `home.css` file inside our `public` directory, we will see that there's already styling for a class called `.selected`.

```css
.selected {
  color: #f66923;
}
```

So we just need to set up our React app to add this `.selected` class to the `<li>` tag of the pie we click.

Remember, presentational components by their very nature cannot contain state. Yet we need state in order to keep track of which Pie components are selected.

We will also want to create a `selectedStatus` variable that gets passed down from `PieList.js` to `Pie.js` via **props**. Eventually, `selectedStatus` will conditionally hold the value that determines whether or not a pie component's color has changed.

```javascript
// components/Pie.js
const Pie = props => {
  const { name, selectedStatus } = props

  let pieClassName
  if (props.selectedStatus === true){
    pieClassName = "selected"
  }

  return (
    <li className={pieClassName}>
      {name}
    </li>
  )
}
```

_Note that `const { name, selectedStatus } = props` is the equivalent of saying `const name = props.name` and `const selectedStatus = props.selectedStatus`._

We haven't added `selectedStatus` to our props yet for each `Pie` component, but we can see that this prop will help determine whether or not a `Pie` component will be highlighted! Let's pass it down now.

```javascript
// components/PieList.js
  const pieComponents = props.pies.map((pie) => {
    let selectedStatus = false

    return (
      <Pie
        key={pie.id}
        name={pie.name}
        selectedStatus={selectedStatus}
      />
    );
  });

  return (
    <ul>{pieComponents}</ul>
  )
```
Now this `selectedStatus` prop should be available in all of the `Pie` components. Currently, none of the `Pie` components will be selected because `selectedStatus` defaults to `false`. We'll need away to select `Pie` component as well as logic for changing the value of `selectedStatus` to true if the pie we are iterating over happens to be the currently selected pie.


Let's set the initial state inside our constructor for PieList so that we set and see a selected pie.

```javascript
const [selectedId, setSelectedId] = useState(null)
```

Note: make sure to import `{ useState }` from `"react"` for this hook to work!
```javascript
import React, {useState} from "react"
```

We created a `selectedId` that initializes as `null`, because we don't want a pie to be selected when we first render the page. Later, this variable in state will track the currently selected `Pie` component in our `PieList`.

Now, let's create a closure function for clicking on a pie.

```javascript
// components/PieList.js
const pieComponents = props.pies.map((pie) => {
  let selectedStatus = false

  const handlePieClick = () => {
    return setSelectedId(pie.id)
  }

  return (
    <Pie
      key={pie.id}
      name={pie.name}
      selectedStatus={selectedStatus}
      handlePieClick={handlePieClick}
    />
  );
});
...
```

We've set up our `handlePieClick` function so that it stores our getter `setSelectedId` function to come preloaded with the id it needs. Each Pie will happen to have a `handlePieClick` function that already has the corresponding pie's id ready to be used. JavaScript closures (wherein we wrap the invocation of one function inside another) allow us to store this function invocation for when the user clicks on the respective `Pie` component.

Now for the fun part! We're going to add some logic inside of our `.map` loop so that it will set `selectedStatus` to designate which item is selected. In this way, `selectedStatus` is going to equal different values for each `Pie` component, particularly for the selected pie.

```javascript
// components/PieList.js
const pieComponents = props.pies.map((pie) => {
  let selectedStatus
  if(pie.id === selectedId) {
    selectedStatus = true
  } else {
    selectedStatus = false
  }
})
```

Great! Now we just need to pass down our `handlePieClick` function down to `Pie.js` through props. We'll then set this to the `onClick` property of our `Pie` component. We've also already passed in the `id` of each pie to this function as we loop through the our array of `PieList`.

 When we click on a pie, our `handlePieClick` will update selectedId with the `id` of the pie we clicked on. It will then compare `selectedId` with each pie's `id`, and only set `selectedStatus` to `true` when the ids match. `selectedStatus` will then be run through the logic in `Pie.js` to determine if that pie will be highlighted.

```javascript
// components/PieList.js
const PieList = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  const pieComponents = props.pies.map((pie) => {
    let selectedStatus = false
    if(pie.id === selectedId) {
      selectedStatus = true
    } else {
      selectedStatus = false
    }

    const handlePieClick = () => {
      return setSelectedId(pie.id)
    }

    return (
      <Pie
        key={pie.id}
        name={pie.name}
        selectedStatus={selectedStatus}
        handlePieClick={handlePieClick}
      />
    )
  })

  return (
    <div>
      <ul>{pieComponents}</ul>
    </div>
  )
}

export default PieList
```

Excellent! Now we just need to update our Pie.js to use the `handleClick` prop it was passed.

```javascript
// components/Pie.js
const Pie = props => {
  const { name, selectedStatus } = props

  let pieClassName
  if (props.selectedStatus === true){
    pieClassName = "selected"
  }

  return (
    <li onClick={props.handlePieClick} className={pieClassName}>
      {name}
    </li>
  )
}
```

Now, when we click on pie we should see it change color!
