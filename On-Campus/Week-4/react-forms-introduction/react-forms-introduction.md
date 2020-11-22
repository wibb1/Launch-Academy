Thus far, our applications have been fairly basic in interaction, limited to responding to user-driven events like `onClick`. In the world of the web, we use HTML forms extensively to get user input. Let's start working with forms in our React applications to make our apps truly interactive.

## Learning Goals

- Build a form using JSX
- Respond to form events with ReactJS
- Create a form that updates page contents based on user input

## Getting Started

```no-highlight
et get react-forms-introduction
cd react-forms-introduction
yarn install
yarn run start
```

We've been commissioned to complete an application for company lunches. Each month, Twistagram, the latest social media phenom, holds an optional lunch where interested team members can hear from the co-founders. Our job is to build a system for users to RSVP for an upcoming lunch.

## Getting a Lay of the Lunch Land

Some of the work has already been done for us. Let's take a look at `src/components/App.js`

```javascript
import React from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={defaultLunchers} />
    </div>
  )
}

export default App
```

Since Samantha and Julie are required participants, they have been already added to the list. In our `App` component, we're passing an array that represents them as a property to the lower order component, `LuncherList`. This component is an unordered list that outputs each "Luncher".

```javascript
import React from "react"
const LuncherList = props => {
  const { lunchers } = props
  const listItems = lunchers.map(luncher => {
    return <li key={luncher}>{luncher}</li>
  })

  return <ul>{listItems}</ul>
}

export default LuncherList
```

## The State of Lunch

Before we dive into forms, we have to make an adjustment to our list of lunchers. Presumably, we want our application to _update_ the list of lunch participants. The React tool we have available to change values in our application is _state_. So, let's make our luncherList stateful through the use of `useState`.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)
  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
    </div>
  )
}

export default App
```

Effectively, we're going to make our `App` component responsible for managing the list of lunchers. Right now, we're only making use of `lunchers`, and we cannot add team members to the list. In order to add to our list, we're going to have to build a form.

## Let's Form a Lunch

First, we need to develop our form for taking in a team member's name.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)
  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <form>
        <div>
          <label for="first_name">Your First Name</label>
          <input id="first_name" type="text" value="" />
          <input type="submit" value="RSVP" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default App
```

Based on our understanding of HTTP, forms typically have `action` and `method` attributes. Since this application is built on the frontend with ReactJS, we don't want our browser to exercise its default behavior of submitting the form. So, we don't specify either attribute. We can, however, attach a client side event handler to the form.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)
  const handleSubmit = event => {
    event.preventDefault()
    alert("form submitted")
  }

  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">Your First Name</label>
          <input id="first_name" type="text" value="" />
          <input type="submit" value="RSVP" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default App
```

If we click the submit button, an alert will be displayed, indicating that we invoked the `handleSubmit` function. Our `handleSubmit` function takes in the synthetic event as an argument. We call `event.preventDefault()` as an extra defensive measure to ensure the browser does not exercise its default behavior of issuing an HTTP request to submit the form.

### onSubmit, not onClick

Notice that while we could have attached an `onClick` to the submit input, this is bad practice. Handling the submit event of the form makes our forms more accessible. Click on the text input, and then press enter. The `alert` will show up again. Had we just handled the `click` event, we would not allow the user to submit their entry via alternative means. It's generally best to always handle form submissions via an `onSubmit` handler.

### Getting Context

While our alert box is cool, it's not really helping to advance Twistagram's company lunch initiative. In order to register a team member for lunch, we need the name that they inputted. How can we keep track of that value? Thankfully, there's another handy event we can listen for. With our text input element, we can use JavaScript to watch for changes with the `change` event.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)

  const handleSubmit = event => {
    event.preventDefault()
    alert("form submitted")
  }

  const handleFirstNameChange = event => {
    console.log(event.currentTarget.value)
  }

  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">Your First Name</label>
          <input id="first_name" type="text" onChange={handleFirstNameChange} />
          <input type="submit" value="RSVP" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default App
```

If we refresh our page and enter values inside our text input, we'll see the correlating values logged to console. That's because of our newly added `handleFirstName` function. We assign that to the `onChange` attribute of our input. Like all event handlers, it takes an argument that represents what occurred in the browser. `event.currentTarget.value` gives us the value of our field.

So we're able to retrieve the value, but where do we put it? We need to keep track of it in the context of our React application. Like our list of lunchers, we can keep track of the team member's first name in state. We'll invoke `useState` again to keep track of this field value. When the input changes, we'll call `setFirstName` to replace the value.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)
  const [firstName, setFirstName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    alert("form submitted")
  }

  const handleFirstNameChange = event => {
    setFirstName(event.currentTarget.value)
  }

  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">Your First Name</label>
          <input id="first_name" type="text" onChange={handleFirstNameChange} />
          <input type="submit" value="RSVP" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default App
```

## Lunch is Ready

There's one last step. Once the user submits the form, we want to add the team member's name to the list. Finally, we can use `setLunchers` in our `handleSubmit` function to make our team member list more dynamic.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)
  const [firstName, setFirstName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    //add the team member to the list
    setLunchers(lunchers.concat(firstName))
    //clear the form
    setFirstName("")
  }

  const handleFirstNameChange = event => {
    setFirstName(event.currentTarget.value)
  }

  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">Your First Name</label>
          <input
            id="first_name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input type="submit" value="RSVP" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default App
```

## Cleanup

Part of the power of building with React is that we can extract out reusable components. If we wanted to use this RSVP component elsewhere, we can take quite a bit of logic out of our `App` component.

Let's create a new component at `src/components/ReservationForm.js`.

```javascript
import React, { useState } from "react"

const ReservationForm = props => {
  const [firstName, setFirstName] = useState("")

  const handleFirstNameChange = event => {
    setFirstName(event.currentTarget.value)
  }

  return (
    <form>
      <div>
        <label htmlFor="first_name">Your First Name</label>
        <input
          id="first_name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input type="submit" value="RSVP" className="btn" />
      </div>
    </form>
  )
}

export default ReservationForm
```

Here, we've isolated the concern of the form itself, reducing the complexity and responsibilities of our `App` component. This is better design, because it makes our `App` component clearer, and it allows us to re-purpose the form should we need a reservation form elsewhere in our application.

I know what you're thinking: but what about the submit handler? Currently, our `App` is concerned with our list of team members, and our form's primary responsibility is provide a way to enter a team member's name. So, there needs to be an exchange of data between the two components. Remember, we can pass functions to lower order components via `props`. Let's modify our noticeably slimmer `src/components/App.js` to pass in a function to our `ReservationForm` instance.

```javascript
import React, { useState } from "react"
import LuncherList from "./LuncherList"
import ReservationForm from "./ReservationForm"

const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)

  const reserveLunchSpot = name => {
    setLunchers(lunchers.concat(name))
  }

  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <ReservationForm onNameSubmitted={reserveLunchSpot} />
    </div>
  )
}

export default App
```

The `reserveLunchSpot` function will be passed to the `ReservationForm` component as `props.onNameSubmitted`. We can use that in our final modification of `ReservationForm`:

```javascript
import React, { useState } from "react"

const ReservationForm = props => {
  const [firstName, setFirstName] = useState("")

  const handleFirstNameChange = event => {
    setFirstName(event.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    //send the name up the component hierarchy
    props.onNameSubmitted(firstName)

    //clear the form
    setFirstName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">Your First Name</label>
        <input
          id="first_name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input type="submit" value="RSVP" className="btn" />
      </div>
    </form>
  )
}

export default ReservationForm
```

## Persistence Problems

It's worth noting that if we refresh our page, any of our newly added lunch reservations are lost. Though our React studies thus far have been intense, we've just started to scratch the surface of React applications. In later assignments, we'll explore how to persist this data through the use of `fetch` and server-side interaction.

## In Summary

Forms are the primary way we acquire user input in the context of our React applications. In order to make that input useful, we have to bring it under the management of state. Through the intelligent use of event handlers and state, we can build some very robust applications.

Component design follows many of the same principles we encountered in our exploration of object oriented programming. Mainly, components should maintain a single responsibility, and we should eliminate duplication where possible. Through passing both data and behavior via props, we can delegate responsibilities to lower-order components.
