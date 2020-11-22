## Introduction

It's been a long day and do you know what would really hit the spot right now? Chocolate. But there is a problem. We can't see any of our favorite chocolates! And worse, not enough folks know how truly wonderful chocolate can be. Let's solve these problems with React and `useState`.

## Setup

From your challenges directory, run the following:

```no-highlight
et get the-state-of-chocolate
cd the-state-of-chocolate
yarn install
yarn run start
```

If we are going to fill our bodies with copious amounts of cocoa, then we need to see our current list of chocolates from the pantry on the page.

Visit <http://localhost:8080> in your browser. You should see "CHOCOLATE ONLY CABINET" rendered on the page, and a list of delectable chocolates.

Make sure to take a moment and review the code inside of `ChocolateList` as well in order to get your bearings.

## Instructions

We've managed to create a `ChocolateList` component that renders our list of chocolates as `li` tags. We've used `.map` to make the code more dynamic as well. But there is more work to be done.

### Step 1

People aren't getting how great chocolate is. We need more messaging to get the word out about chocolate's superiority.

* Define an arrow function in your component called `chocolateClick`
* Ensure that, when this function is called, the message "hear ye, hear ye, chocolate is the greatest!" is logged to web console.
* Add an `onClick` event listener to the `h1` that has our "CHOCOLATE ONLY CABINET" text. Assign your new `chocolateClick` function as the callback to your `onClick` event listener.

Whenever someone clicks on "CHOCOLATE ONLY CABINET" on the screen they should now observe "hear ye, hear ye, chocolate is the great!" returned in their console!  

### Step 2

.....Our idea worked too well. Now too many people know about our precious chocolate! We need a way to hide the list when others are viewing the webpage, but then show it when we want to peruse our sweet treats.

Setup `useState` in our component so that we can then toggle the visibility of our chocolate list.

* Import the `useState` hook into your application
* Define state in your component. Your "getter" for state should be `chocolateVisibility` and your setter should be `setChocolateVisibility`. Your default state should be the boolean `true`.

Let's change your `chocolateClick` function so that it no longer displays  our secret message about how great chocolate is. Instead, update the `chocolateClick` function to change the `chocolateVisibility` state to `true` if the current value of `chocolateVisibility` is false, and conversely, change the `chocolateVisibility` to `false` if the current value of `chocolateVisibility` is true.

At this point, clicking on "CHOCOLATE ONLY CABINET" on the webpage should toggle the `chocolateVisibility` value between true and false. A feat in and of itself! You can ensure that your code is working by either putting a `console.log(chocolateVisibility)` in your component (above the return!) or by using React Developer Tools (if installed).

### Step 3

We haven't hidden the list yet!

Using `if...else` statements to help you, tie the visibility of the list to your `chocolateVisibility` state so that when clicked our header also hides or shows the list. This `if...else` logic will need to exist in the block above your `return` statement but inside of your `ChocolateList` component.

Hint: while CSS can be used to hide and show the list, we can also conditionally render the list in our JSX.  There are many ways you could accomplish this. For example, if `chocolateVisibility` is true, `return` JSX with your list from `let chocolateListItems`, and if false, `return` JSX that excludes it. Or because `chocolateListItems` is defined with `let`, you can conditionally re-assign the value of `chocolateListItems` to hold nothing at all IF `chocolateVisibility` is set to false.

Here is an example of some simple logic that could inspire you. In the code below, we only see the text "yum yum yum buttery sweet" if the state of `loveOfToffee` is true. If it were false, the message would not appear on the screen.

```js
const ToffeeComponent = (props) => {

  const [ loveOfToffee, setLoveOfToffee] = useState(true)

  let toffee = null

  if (loveOfToffee === true){
    toffee == "yum yum yum buttery sweet"
  }

  return(
    <div>
      <h4>Toffee Message</h4>
      <p>{toffee}</p>
    </div>
  )
}
```

Delicious! If the list now toggles when you click on the header, THEN THE CHOCOLATE IS OURS!
