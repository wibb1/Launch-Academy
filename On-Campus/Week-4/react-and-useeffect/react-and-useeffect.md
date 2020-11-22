Often times, our components will have side effects. Whether it's loading external data, or automatically signing a user out due to inactivity, modern applications often require work beyond respond to user-driven events. That's where `useEffect` comes into play for us as web developers.

## Learning Goals

- Integrate `useEffect` into a React component
- Ensure `useEffect` does not affect change unnecessarily

For the benefit of illustrating this concept, we're going to work with a component that displays bank account balances. If no activity is detected for 5 seconds, the application will sign you out.

## Getting Started

```no-highlight
et get react-and-useeffect
cd react-and-useeffect
yarn install
yarn run start
```

## Getting a Lay of the Land

Our sample application involves a stateful component. `BankBalanceList` depicts a pair of bank accounts that start with a $0 balance.

```javascript
const [bankBalances, setBankBalances] = useState([
  { name: "Checking Account", balance: 0 },
  { name: "Savings Account", balance: 0 }
])
```

We're representing the bank accounts as an array of JavaScript object literals. If we need to add another type of account, we can just add a new object to the `bankBalances` array, ensuring that our solution is flexible for all kinds of bank clients.

When we click the `Refresh` button, the balances change to random numbers. This is accomplished via an event handler.

```javascript
const updateAccounts = event => {
  event.preventDefault()
  setBankBalances([
    { name: "Checking Account", balance: Math.random() * 60000 },
    { name: "Savings Account", balance: Math.random() * 400000 }
  ])
}
```

As we learned earlier, `setBankBalances` imposes a change to state, which causes the `BankBalanceList` component to re-render.

This has an impact on what the component ultimately returns.

```javascript
const bankAccountListItems = bankBalances.map(account => {
  return (
    <li key={account.name}>
      <strong>{account.name}</strong> - ${account.balance.toFixed(2)}
    </li>
  )
})
```

Again, we use `map` so that the component can handle any number of bank accounts. Also note that we are calling `toFixed(2)` ([docs][toFixed-docs]) on the balances to ensure they are always displayed with 2 decimal places (representing cents).

## Timeouts and useEffect

### For Basic Effect

Most online banking applications have an inactivity timeout. If you don't take some kind of action for a predetermined amount of time, the application will automatically sign you out.

When it comes to our React Component, we recognize this functionality as a side effect: behavior that is peripheral to the interaction with our component. Additionally, we may want to leverage this functionality in other React components. That's where `useEffect` can help.

Like its `useState` amigo, `useEffect` is available to us via the React library as of React 16. Let's import it and use it in our `BankBalanceList` component.

```javascript
import React, { useState, useEffect } from "react"
```

Here, we can `import` multiple functions present in the `React` namespace.

For now, let's create a basic effect that just logs a notice that the balance was redisplayed inside our `BankBalanceList`.

```javascript
useEffect(() => {
  console.log("Displaying updated bank balances.")
})
```

When we refresh our page, we'll see this log message appear in the Chrome inspector. When we click `Refresh`, the log message is outputted again -- this is because `useEffect` is invoked after every rendering. So, whenever the component is modified, our `useEffect` will be triggered.

### Wait, timeout!

Ok, that's interesting enough, but let's make our effect a bit more functional. When it comes to signing a user out for inactivity, we basically want to:

- Start a timer after the component is mounted
- If the user interacts with the site, restart the clock, giving the user more time to check bank balances
- If the timer reaches a specified duration, sign the user out

We can accomplish this functionality with an intelligently placed [`setTimeout`](setTimeout-docs).

```javascript
useEffect(() => {
  window.setTimeout(() => {
    location.href = "/signedOutNotice.html"
  }, 5000)
})
```

As programmed above, this `useEffect` will set a timer for 5 seconds (5000 milliseconds). After 5 seconds, we programmatically redirect the user to the path `/signedOutNotice.html`.

This initial implementation is problematic: if we click the `Refresh` button, this routine will just create another timer, rather than giving the user more time. So, we need to cancel any existing timers and set a new one. We can do so with [`clearTimeout`](clearTimeout-docs).

```javascript
useEffect(() => {
  window.clearTimeout(window.timeout)
  window.timeout = window.setTimeout(() => {
    location.href = "/signedOutNotice.html"
  }, 5000)
})
```

There's a few things happening here. `window.setTimeout` takes two arguments: the function that we want to execute and how many milliseconds we want to wait for that function to execute. So, in this case, we're waiting 5 seconds before we reassign `location.href` to `/signedOutNotice.html`, causing the redirection.

`setTimeout` returns an ID that we can use to reference the scheduled function. We assign that ID to what is essentially a global variable. Each time we execute the effect, we need to ensure we clear out any existing timeout. So, we preemptively call `clearTimeout` in case there is already a scheduled function.

This results in the desired effect (get it?!? _effect_???). Every time the user does something that causes the component to re-render, they essentially buy themselves an additional 5 seconds before they are redirected.

## Abstracting useEffect

One can imagine that functionality like this could be re-purposed among other components in our banking application. This is a powerful aspect of `useEffect`. We can effectively wrap this function inside another function. Let's place the code below in `src/effects/useIdleTimeout.js`

```javascript
import { useEffect } from "react"

const useIdleTimeout = () => {
  useEffect(() => {
    window.clearTimeout(window.timeout)
    window.timeout = window.setTimeout(() => {
      location.href = "/signedOutNotice.html"
    }, 5000)
  })
}

export default useIdleTimeout
```

We can now simply import this and invoke it in our `BankBalanceList` component in place of our hardcoded `useEffect`.

```javascript
import useIdleTimeout from "../effects/useIdleTimeout"
```

```javascript
useIdleTimeout()
```

Conventionally, we prefix effect names with `use` so they're clearly distinguished as hooks in the context of our React application.

We can also modify the behavior so that the timeout can be parameterized.

```javascript
import { useEffect } from "react"

const useIdleTimeout = (timeToTimeout = 5000) => {
  useEffect(() => {
    window.clearTimeout(window.timeout)
    window.timeout = window.setTimeout(() => {
      location.href = "/signedOutNotice.html"
    }, timeToTimeout)
  })
}

export default useIdleTimeout
```

This is a very powerful addition to the React framework. In addition to building reusable components, we can also write shared behaviors in one place and use them in multiple components. We can even invoke `useState` inside our custom hooks to manage relevant state on behalf of the component. Cool, right?

## Ensuring useEffect is Applied Sparingly

We're going to track how many times the user clicks on a bank account. Since this is a concern that is independent to our idle timeout, let's introduce a new, custom hook to manage this. Let's place the following in `src/effects/useClickCounterInTitle.js`.

```javascript
import { useEffect, useState } from "react"
const useClickCounterInTitle = () => {
  const [clickCount, setClickCount] = useState(-1)
  useEffect(() => {
    console.log("Setting title...")
    document.title = `${clickCount + 1} click(s)`
  })
  return [clickCount, setClickCount]
}

export default useClickCounterInTitle
```

Notice that this custom hook returns the same value as `useState`. That way, we can make use of the click count and provide a setter for our invoking components. Also, observe that we set the default of this click count to -1. That's because when we initially load the page and our invoking components call this, `useEffect` is going to trigger immediately after the component is added to the DOM. We set our state to `-1` to account for this undesired load.

We can then import this in our `BankBalanceList`. We'll then call `setClickCount` in an event handler for each bank account.

```javascript
import React, { useState } from "react"
import useIdleTimeout from "../effects/useIdleTimeout"
import useClickCounterInTitle from "../effects/useClickCounterInTitle"

const BankBalanceList = props => {
  const [bankBalances, setBankBalances] = useState([
    { name: "Checking Account", balance: 0 },
    { name: "Savings Account", balance: 0 }
  ])

  useIdleTimeout()
  const [clickCount, setClickCount] = useClickCounterInTitle()

  const updateAccounts = event => {
    event.preventDefault()
    setBankBalances([
      { name: "Checking Account", balance: Math.random() * 60000 },
      { name: "Savings Account", balance: Math.random() * 400000 }
    ])
  }

  const bankAccountListItems = bankBalances.map((account) => {
    return (
      <li
        onClick={() => {
          setClickCount(clickCount + 1)
        }}
        key={account.name}
      >
        <strong>{account.name}</strong> - ${account.balance.toFixed(2)}
      </li>
    )
  })

  return (
    <div className="bank-accounts">
      <p>
        <a href="#" onClick={updateAccounts}>
          Refresh
        </a>
      </p>
      <ul>{bankAccountListItems}</ul>
    </div>
  )
}

export default BankBalanceList
```

When we refresh our page, we can now keep track of all of the bank account clicks.

### Side Effects of Side Effects

With this new custom hook in place, we can observe a few things. First, we can observe that our `console.log` found in `useClickCounterInTitle` is invoked every time we click the Refresh button. We're unnecessarily calling executing our `useClickCounterInTitle` when we don't intend to update the click count. Additionally, when we click on a bank account list, the idle timer is reset. This may be undesirable behavior.

Thankfully, `useEffect` takes a second argument that makes it possible for us to constrain when our `useEffect` executes.

```javascript
import { useEffect, useState } from "react"
const useClickCounterInTitle = () => {
  const [clickCount, setClickCount] = useState(-1)
  useEffect(() => {
    console.log("Setting title...")
    document.title = `${clickCount + 1} click(s)`
  }, [clickCount])
  return [clickCount, setClickCount]
}

export default useClickCounterInTitle
```

In adding this second argument `[clickCount]` to `useEffect`, we constrain when the effect invokes. Now, our `useEffect` callback will only execute when `clickCount` has changed.

It may also be undesirable behavior that our idle timer resets when we click on a bank account. If we only want our timer to reset when the refresh button is clicked, we can "anchor" our `useEffect` to our randomly generated bank account balances. This will require some thoughtful engineering to pass this data to and from our component. In this case, we'll supply these values as an argument to `useIdleTimeout`.

```javascript
import { useEffect } from "react"

const useIdleTimeout = (timeToTimeout = 5000, anchorValues) => {
  useEffect(() => {
    window.clearTimeout(window.timeout)
    window.timeout = window.setTimeout(() => {
      location.href = "/signedOutNotice.html"
    }, timeToTimeout)
  }, anchorValues)
}

export default useIdleTimeout
```

Here, we're allowing for the caller of `useIdleTimeout` to specify values that must change for the effect to do its work. If the `anchorValues` do not change, the callback will not be executed. By passing in two arguments below, we have increased the timeToTimeout to 10,000 instead of the default 5,000.  We have also now attached the `bankBalances` state as our `anchorValue`.  Now the callback function will only run when there is a change in `bankBalances`.

```javascript
// src/components/BankBalanceList.js
  ...
  const [bankBalances, setBankBalances] = useState([
    { name: "Checking Account", balance: 0 },
    { name: "Savings Account", balance: 0 }
  ])

  useIdleTimeout(10000, bankBalances)
  const [clickCount, setClickCount] = useClickCounterInTitle()

  ...
```

If we don't want the callback function to be called again, we can pass in an `anchorValue` that won't be changed. You will often see a blank array used for this. Now the useEffect in `useIdleTimeout`, will only trigger once on the initial render of the page. Even though `bankBalances` can still change and cause a re-render to reflect the change in state, `useIdleTimeout` will not cause `useEffect` to be run again, because the `[]` being passed as the second argument is still equal to the original `[]` that was passed as the `anchorValue`.  Since there is no difference between these values, React knows not to run it again.

```javascript
// src/components/BankBalanceList.js
  ...
  const [bankBalances, setBankBalances] = useState([
    { name: "Checking Account", balance: 0 },
    { name: "Savings Account", balance: 0 }
  ])

  useIdleTimeout(10000, [])
  const [clickCount, setClickCount] = useClickCounterInTitle()

  ...
```

## Why This Matters

We can integrate `useEffect` with our components to manage side effects in a reasonable way. React's addition of hooks and custom hooks make it very easy for us to better modularize our behaviors.

[toFixed-docs]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
[setTimeout-docs]:https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
[clearTimeout-docs]:https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout
