## Learning Objectives

- Define a controlled component
- Build a multi-field form
- Explore React's implementation of unidirectional data flow

## Getting Started

To get quick set up, run the following and visit <http://localhost:8080>:

```no-highlight
et get advanced-react-forms
cd advanced-react-forms
yarn install
yarn run start
```

## Introduction

In our initial exploration of React Forms, we used a single field input. In most practical use cases, we'll be requesting multiple pieces of information from the user. With the fundamentals covered, let's build a more complex form.

Julie from Twistogram was so thrilled with the work we did, she's asked us to build another app for their team wellness program. Together, we're going to build a meal tracker that team members can use to keep tabs on their calorie intake. We'll prompt the user for the meal, what they ate, and an optional comment.

Just like our first project, they've provided us with a starting place. Let's take a moment to look at what has been set up for us.

## Our App Container

```javascript
import React, { useState } from "react"
import MealsList from "./MealsList"

const App = props => {
  const [meals, setMeals] = useState([])

  return (
    <div className="row">
      <div className="small-9 small-centered columns">
        <h1 className="text-center">Food Tracker</h1>
        <MealsList meals={meals} />
      </div>
    </div>
  )
}

export default App
```

Our `App` component will serve as our highest-order component. Notice that it is using React state to maintain our list of meals. Also notice that it informs lower-order, presentational components with that data. For this reason, you may hear a component like this referred to as a **container**. While presentational components are concerned with how our user interface looks and **what** is displayed, a container is often in charge of the data and **how** components behave.

For the display of our meal list, we rely on the lower-order, presentational component called `MealsList`.

```javascript
import React from "react"

const MealsList = props => {
  const { meals } = props
  const mealItems = meals.map(meal => {
    let mealDescription = ""
    if (meal.description) {
      mealDescription = <blockquote>{meal.description}</blockquote>
    }
    return (
      <li key={meal.food}>
        <strong>{meal.meal}:</strong>
        &nbsp;{meal.food}
        {mealDescription}
      </li>
    )
  })

  return (
    <div>
      <h3 className="text-center">Daily Consumption</h3>
      <ul>{mealItems}</ul>
    </div>
  )
}

export default MealsList
```

This component will eventually list out the meal information we enter via the form we're building. Notice that there's handling for whether a description is specified above the `return` statement of our `map`. We then place our collection of `mealItems` inside a `<div>`.

## Building Our Form

Now that we've taken a tour of our existing components, let's build out our form component. Anticipating that this will be its own component, we will work in `src/components/MealForm.js`

### Rendering the Form

Our first step in constructing our form should start with getting the form to look the way we want.

```javascript
import React, { useState } from "react"

const MealForm = props => {
  return (
    <form className="callout">
      <label htmlFor="food">
        I ate:
        <input type="text" id="food" />
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default MealForm
```

Here, we're taking advantage of some predefined foundation styles to build out our form and first input.

Don't forget to import `MealForm` into `App` and render it.

```js
const App = props => {
  const [meals, setMeals] = useState([])

  return (
    <div className="row">
      <div className="small-9 small-centered columns">
        <h1 className="text-center">Food Tracker</h1>
        <MealsList meals={meals} />
      </div>
    </div>
  )
}

export default App
```

### Building Our Meal Select

Recall that one of our goals as web developers is to protect against bad user input. Since we know the meals users will want to record, we can predefine them in a `<select>` element as opposed to providing an open text field.

```javascript
import React, { useState } from "react"

const meals = ["breakfast", "lunch", "dinner", "snack"]

const MealForm = props => {
  const mealOptions = [""].concat(meals).map(meal => {
    return (
      <option key={meal} value={meal}>
        {meal}
      </option>
    )
  })

  return (
    <form className="callout">
      <label>
        I ate:
        <input type="text" id="food" />
      </label>

      <label>
        Meal:
        <select id="meal">{mealOptions}</select>
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default MealForm
```

With the above code, we predefine a list of meals, and we use that to create a series of `<option>` tags. We place those tags inside a newly created `<select>` element. This `<select>` element provides users with a "picklist" to select among the different meals specified.

### Our Description Textarea

Adding our textarea is pretty straightforward. We simply add a `label` and `textarea` between our meal `<select>` and our button group.

```javascript
<label>
  Description:
  <textarea id="description" />
</label>
```

### Managing State

Now that we have our form appropriately marked up, we're ready to bring it under React's state management. With multiple form inputs, however, we'll want to consider how we manage state a bit differently. Instead of storing a single string, we'll store a JSON object that contains of all the field ids and values.

```javascript
const [mealRecord, setMealRecord] = useState({
  food: "",
  meal: "",
  description: ""
})
```

Here, we're setting up the defaults for our `food`, `meal`, and `description` fields. If we wanted to "prefill" our form inputs with default values, we could set them here.

### Setting State

We can appropriately bind our first input to state. In the React community, we refer to a state-bound input as a **controlled component**. Let's make our `food` text input a controlled component. Before we do, we have to take a brief detour to explore some new features of the ECMAScript standard.

#### JSON Destructuring and Immutability

Often, like in the case of our `mealRecord`, we want to update a **single** property of a JSON object that may have many properties. We know how to do this traditionally:

```javascript
let mealRecord = {
  food: "",
  meal: "",
  description: ""
}
const fieldToUpdate = "food"
mealRecord[fieldToUpdate] = "Hamburger"
```

In the example above, we're **mutating** the object. When we reassign the `food` property to "Hamburger" we permanently change our `mealRecord`.

Because React applications are very interactive and there are often many events happening at a given time, we favor object immutability. This is a fancy way of saying that we should **replace** the object entirely instead of changing it. So, an improvement to our implementation would be:

```javascript
let mealRecord = {
  food: "",
  meal: "",
  description: ""
}
const fieldToUpdate = "food"
let newProperties = {}
newProperties[fieldToUpdate] = "Hamburger"
mealRecord = Object.assign({}, mealRecord, newProperties)
```

[Object.assign][object-assign] is the classic, ES5-friendly way to create a new object, and assign properties from a series of other objects into it. The distinction here is that we create an *entirely new object*. Based on the empty JSON literal as the first argument to `Object.assign`, we're taking all of the properties (and their correlating values) in `mealRecord` and all of the properties (and their correlating values) in `newProperties` and assigning them to our new object.

This is a lot of syntax to get the job done, and thankfully later versions of ECMAScript give us a better way in **object destructuring**. Let's take a look at some functionally equivalent syntax.

```javascript
let mealRecord = {
  food: "",
  meal: "",
  description: ""
}
const fieldToUpdate = "food"
let newProperties = {}
newProperties[fieldToUpdate] = "Hamburger"

mealRecord = {
  ...mealRecord,
  ...newProperties
}
```

This does exactly the same thing as the previous `Object.assign` example. Basically, with the use of the `...` operator, we're taking all of the properties in `mealRecord` and `newProperties` and injecting them into a new JSON literal. Again, this results in the creation of an entirely new `mealRecord` replacing the previous one in memory.

#### Dynamic Property Assignment

Thanks to other newly-added ES syntax, We can get even more elegant with our destructuring and property assignment. We can use square brackets `[]` inside a JSON literal to dynamically assign a property.

```javascript
let mealRecord = {
  food: "",
  meal: "",
  description: ""
}
const fieldToUpdate = "food"

mealRecord = {
  ...mealRecord,
  [fieldToUpdate]: "Hamburger"
}
```

By enclosing it in `[]`, the `fieldToUpdate` variable is evaluated and used to define the property name. So, the resultant value of `mealRecord` becomes:

```javascript
{
  "description": "",
  "food": "Hamburger",
  "meal": ""
}
```

#### Building Out Our Change Handler

Equipped with elegant object destructuring, we can write a single `change` handler that can accommodate all of our fields.

```javascript
const handleInputChange = event => {
  setMealRecord({
    ...mealRecord,
    [event.currentTarget.id]: event.currentTarget.value
  })
}
```

Here, we use `event.currentTarget.id` to retrieve the `id` attribute value of our field. As long as this `id` correlates with the correct `mealRecord` property, it will appropriately set the value in state. It is very important that these match exactly, including the case of the `id` and state property. In programming our event handler this way, we can write it once and apply it to our text input, select picklist, and textarea.

```javascript
import React, { useState } from "react"

const meals = ["breakfast", "lunch", "dinner", "snack"]
const MealForm = props => {
  const [mealRecord, setMealRecord] = useState({
    food: "",
    meal: "",
    description: ""
  })

  const mealOptions = [""].concat(meals).map(meal => {
    return (
      <option key={meal} value={meal}>
        {meal}
      </option>
    )
  })

  const handleInputChange = event => {
    setMealRecord({
      ...mealRecord,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return (
    <form className="callout" >
      <label>
        I ate:
        <input
          type="text"
          id="food"
          onChange={handleInputChange}
          value={mealRecord.food}
        />
      </label>

      <label>
        Meal:
        <select id="meal" onChange={handleInputChange} value={mealRecord.meal}>
          {mealOptions}
        </select>
      </label>

      <label>
        Description:
        <textarea
          id="description"
          onChange={handleInputChange}
          value={mealRecord.description}
        />
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default MealForm
```

### Handling Form Resets

Let's add an event handler to our Clear button so that all input values are reset to their defaults.

```javascript
const clearForm = event => {
  event.preventDefault()
  setMealRecord({
    food: "",
    meal: "",
    description: ""
  })
}
```

We can then bind this to our Clear button's `onClick` attribute.

```jsx
<button className="button" onClick={clearForm}>
  Clear
</button>
```

### Adding a Meal Record

Phew! We've got one last step to put this all together! We need a submit handler that will effectively add our meal to the page.

```javascript
const onSubmitHandler = event => {
  event.preventDefault()
  props.onMealSubmitted(mealRecord)
}
```

We can wire this event handler to the form's submission.

```jsx
<form className="callout" onSubmit={onSubmitHandler}>
```

With this in place on the lower order component we can pass in a function from `App` to process the addition of a meal.

```javascript
import React, { useState } from "react"
import MealsList from "./MealsList"
import MealForm from "./MealForm"

const App = props => {
  const [meals, setMeals] = useState([])

  const mealSubmittedHandler = meal => {
    setMeals([...meals, meal])
  }

  return (
    <div className="row">
      <div className="small-9 small-centered columns">
        <h1 className="text-center">Food Tracker</h1>
        <MealsList meals={meals} />
        <MealForm onMealSubmitted={mealSubmittedHandler} />
      </div>
    </div>
  )
}

export default App
```

If we populate our form and click Submit, the meal is added to the list.

Let's take a closer look at this handler.

```javascript
const mealSubmittedHandler = meal => {
  setMeals([...meals, meal])
}
```

Just like we use destructuring with JSON objects, we can do the same with arrays. This is functionally equivalent to:

```javascript
const mealSubmittedHandler = meal => {
  setMeals(meals.concat(meal))
}
```

Through the use of either array destructuring or the `concat` method, we call `setMeals` with an entirely new array to enact object immutability in our components.

## In Summary

Complex forms can be managed with a single JSON object in state. Through the intelligent use of id and state property naming conventions, we can write a single event handler to control all of our components in a form. Generally, React promotes object immutability, meaning that we should favor the creation of new objects as opposed to the mutation of preexisting objects.

[object-assign]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
