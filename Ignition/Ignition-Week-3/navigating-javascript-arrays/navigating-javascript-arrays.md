Being able to traverse data structures is a vital piece to working with JavaScript code in our front end applications. Let's practice some of our new JavaScript skills by creating functions and traversing arrays. What better way to practice them than to do a audit of all of our space supplies?  

## Getting Started

```no-highlight
et get navigating-javascript-arrays
cd navigating-javascript-arrays
```

To run your code,

```no-highlight
open index.html
code .
```

> your work will go in `main.js`

In the browser, open up the JavaScript console. Using the `main.js` file provided, complete each of the steps below. You can refresh the page in order to see your changes, or use your browser console directly to test your JavaScript code.

Remember, there are many ways to solve each problem, so don't stress if your answer doesn't exactly match the provided one.

### Instructions

Complete the following series of mini-challenges. Feel free to look at docs, or back at previous articles and exercises for reference!

### 1. Supply Check

Below is a list of some of the supplies on the ship. Would you mind going through them and logging what we have for our inventory check?

```js
let supplies = ['space helmet', 'canister of oxygen', 'water recycler', 'big red button', 'freeze dried ice cream']
```

Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."

Remember to use back-ticks for string interpolation!

Example output:

```no-highlight
space helmet is logged and accounted for.
canister is logged and accounted for.
...etc.
```

{% show_solution %}

```js
let supplies = ['space helmet', 'canister of oxygen', 'water recycler', 'big red button', 'freeze dried ice cream', 'tang drink mix']

let supplyCheck = (suppliesArray) => {
  suppliesArray.forEach((supplyItem) => {
    console.log('${supplyItem} is logged and accounted for.')
  })
}

supplyCheck(supplies)
```

{% endshow_solution %}

### 2. Stowing Supplies

Let's place each of our supply items in the our spaceship cargo bay lockers. Let the team know which locker you have placed each supply in. In this case, the locker number of each supply item corresponds with its index in the supplies array

Create a function named `stowSupplies` that takes in our array of supplies, and `console.log`s each item name and its index number in a formatted string. It should look something like this:

```js
let stowSupplies = (suppliesArray) => {
   // your code here
}
```

`console.log()` the supply and the number in this format:

```no-highlight
  space helmet is in locker 1.
  canister of oxygen is in locker 2.
  water recycler is in locker 3.
```

Remember that arrays are indexed at 0, and check out the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) documentation on `forEach` to see how you can retrieve the index.


### 3. Sorting Supplies and Adding New Ones

Alright, our supplies are squared away, but we forgot to order them, AND I just found this laser pistol lying around. Could you add the `laser pistol` to our collection of supplies, and make sure that all of the supplies are sorted alphabetically?

Create a function named `addAlphabetically` that takes in our array of supplies and a new supply item and returns a _new_ array of supplies with that new item, sorted alphabetically.


### 4. Checking Our Inventory Checklist

Aha! I just found our `inventoryChecklist`. This will help us determine if we have everything that we need. Here is a list of the supplies in our checklist:

```js
let inventoryChecklist = ['big red button', 'canister of oxygen', 'freeze dried ice cream', 'jetpack', 'tang drink mix', 'space helmet', 'space brussels sprouts', 'water recycler', 'welding torch']
```

Hmmm, this two doesn't seem to match up with our `supplies`. Could you help determine what is missing from our current list of `supplies`?

Create a function named `stockCheck` that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.

Example output:

```js
stockCheck(inventoryChecklist, supplies)
// => [ "jetpack", "space brussels sprouts", "welding torch" ]
```

You can probably execute this function a few different ways, but using the [.includes method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) may help.


### 5. Combining our Supply Arrays

Now that we know what items are missing from our supplies, let's add them to the cargo hold of our spaceship!

Create a function named `addMissingSupplies` that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your `stockCheck` method to help you with this.


### End

You did it! Thank you so much for helping us get our supplies in order!
