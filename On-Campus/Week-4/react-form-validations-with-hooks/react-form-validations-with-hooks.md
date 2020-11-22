
Now that we understand how to create controlled components in order to develop react forms, we will want to ensure that our users fill out the forms correctly. In fact, because we maintain the user input in our form component's state, we can create JavaScript validations that are run both as the user is filling out the form and when the form is being submitted.

## Getting Started

```no-highlight
et get react-form-validations-with-hooks
cd react-form-validations-with-hooks
yarn install
yarn run start
```

### When to Validate

As developers, we have to consider that users will often do undesirable things with our software. In particular, we must be vigilant when it comes to user input and protecting our systems against bad data. In our study of data entry, we often hear "garbage-in garbage-out" (GIGO) - a simple phrase that emphasizes the point. If the data coming into a system is poor in quality, the computations and utilities the software brings to its end users will also be of poor quality. Users may not have malicious intent, but they may forget to supply one piece of information or another. It's our job to anticipate that possibility and to handle for it as needed. That's were validations come into play.

Validations give us a way to (1) stop our application from taking incorrect information and (2)) let our user know that something needs to be fixed before they can continue.

### Validating our Forms

We'll extend our meal tracker with some new functionality. Let's first take a look at our `select` element.

```jsx
<label>
  Meal:
  <select id="meal" onChange={handleInputChange} value={mealRecord.meal}>
    {mealOptions}
  </select>
</label>
```

When the page loads, we default our selected option to a blank string. If we require a user to specify a meal, then we need to introduce a check that ensures they make a selection.

Let's say that we want this to happen when a user tries to click the "submit" button. We would need to update our `onSubmitHandler` method. Specifically, we'll need to wrap our submission logic in a conditional.  

```javascript
const validForSubmission = () => {
  if (mealRecord.meal.trim() !== "") {
    return true
  } else {
    return false
  }
}

const onSubmitHandler = event => {
  event.preventDefault()
  if (validForSubmission()) {
    props.onMealSubmitted(mealRecord)
  }
}
```

The above implementation will *not* call `onMealSubmitted` if the meal is blank, so we accomplish the goal of disallowing the invalid meal from being added to the system. What's missing, however, is meaningful feedback for the user. Typically, we present end users with error messages, which will assist them in fixing their data entry. To realize this in the user interface, we'll have to store and manage a new piece of state. We'll default this new item to an empty object.

```javascript
const [errors, setErrors] = useState({})
```

We can then use this new state to retain a list of errors correlating to the property names.

```javascript
const validForSubmission = () => {
  setErrors({})
  if (mealRecord.meal.trim() !== "") {
    return true
  } else {
    setErrors({
      ...errors,
      meal: "is blank"
    })
    return false
  }
}
```

Here, the validation routine starts by clearing out the errors. If the meal is not specified, we append a new property and value to the `errors` state. With some slight modifications, we can extend this to also validate our `food` value.

```javascript
const validForSubmission = () => {
  let submitErrors = {}
  if (mealRecord.meal.trim() === "") {
    submitErrors = {
      ...submitErrors,
      meal: "is blank"
    }
  }

  if (mealRecord.food.trim() === "") {
    submitErrors = {
      ...submitErrors,
      food: "is blank"
    }
  }

  setErrors(submitErrors)
  return Object.entries(submitErrors).length === 0 && submitErrors.constructor === Object
}
```

Yuck! That last line is kind of ugly. It turns out that checking to see if a JSON object is empty [isn't baked into JavaScript][empty-json], and is therefore harder than it should be. Thankfully, we can make use of the [lodash][lodash] utility library to clean up this syntax. Let's add it as a dependency via the command line.

```no-highlight
yarn add lodash
```

We can then `import` it at the top of of our component. (The convention is to import the `lodash` library as a `_`, or a _low dash_... get it?)

```javascript
import _ from 'lodash'
```

```javascript
const validForSubmission = () => {
  let submitErrors = {}
  if (mealRecord.meal.trim() === "") {
    submitErrors = {
      ...submitErrors,
      meal: "is blank"
    }
  }

  if (mealRecord.food.trim() === "") {
    submitErrors = {
      ...submitErrors,
      food: "is blank"
    }
  }

  setErrors(submitErrors)
  return _.isEmpty(submitErrors)
}
```

That's better! Notice that we only make one call to `setErrors` in the routine above, and that we manage a `submitErrors` JSON object as opposed to changing the state directly. That's because setting state is asynchronous, so we can't reliably check `errors` in the same function call after it is set.

We can also observe some emerging duplication. Let's DRY things up a bit.

```javascript
const validForSubmission = () => {
  let submitErrors = {}
  const requiredFields = ["meal", "food"]
  requiredFields.forEach(field => {
    if (mealRecord[field].trim() === "") {
      submitErrors = {
        ...submitErrors,
        [field]: "is blank"
      }
    }
  })

  setErrors(submitErrors)
  return _.isEmpty(submitErrors)
}
```

Here, we loop through our required fields and check to see if they're populated.

### Showing Errors

Lovely.  We have validations in our form.  Now, we need a way to display our errors after they've been stored in state. Let's create a new presentational component called `src/components/ErrorList.js`

```javascript
import React from "react"

const ErrorList = props => {
  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map(field => {
      index++
      return (
        <li key={index}>
          {field} {props.errors[field]}
        </li>
      )
    })
    return (
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList
```

Given an `errors` prop that represents the validation errors, we loop through and add them to an unordered list.

As implemented, the errors will display as `meal is blank` and `food is blank`. Let's use the lodash library to properly capitalize our field names.

```javascript
import React from "react"
import _ from "lodash"

const ErrorList = props => {
  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map(field => {
      index++
      return (
        <li key={index}>
          {_.capitalize(field)} {props.errors[field]}
        </li>
      )
    })
    return (
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList
```

We can then import this new presentational component, and make use of it inside our `MealForm`.

```javascript
import ErrorList from "./ErrorList"
```

```javascript
...
<form className="callout" onSubmit={onSubmitHandler}>
  <ErrorList errors={errors} />
...
```

### Managing Form Resets

There's one more bit of work to do. If we click our "Clear" button, any validation errors displayed on the page will persist. We need to update our `clearForm` handler to clear out our errors, in addition to the `mealRecord`.

```javascript
const clearForm = event => {
  event.preventDefault()
  setMealRecord({
    food: "",
    meal: "",
    description: ""
  })
  setErrors({})
}
```

With this in place, the error list will be removed when we reset the form.

### In Summary

Validations are a key part of creating any forms that we use in our web applications. React JS form validations allow us to display errors immediately, giving the user the error information they need as they fill out the form correctly. These validations also ensure that only valid information is ever persisted creating a better experience for user and developer alike.

[empty-json]:https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
[lodash]:https://lodash.com/
