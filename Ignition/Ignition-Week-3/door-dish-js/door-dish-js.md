Write a program that will take an online pizza order!

## Getting Started

From your `challenges` folder in the terminal, type the following commands:

```no-highlight
et get door-dish-js
cd door-dish-js
```

To run your code,

```no-highlight
open index.html
code .

> your work will go in `main.js`
```

In the browser, open up the JavaScript console. You can refresh the page in order to see your changes.

### Part 1

Write a program that takes in user input and prints it to the console.

Here is what your program should do:

- Greet the patron.
- Ask if their order is for takeout or delivery.
- Accept the user's answer and save it as a variable.
- Ask how many pizzas they would like.
- Accept the user's answer and save it as a variable.
- Ask if they would like extra cheese added as a topping.
- Print a sentence returning the number pizzas, if there's extra cheese, and if it's delivery or takeout. 

> Remember, there will be more than one way to successfully complete this exercise!

### Example Output:

```no-highlight
Hello hungry friend! Welcome to Doordish, where the pizza comes to you!
Is your order takeout or delivery?
> takeout
How many pizzas would you like?
> 2
Would you like extra cheese?
> no
We are preparing your 2 pizzas with no extra cheese to be picked up at our door!
```

### Part 2

We need to consider the fact that some folks will want delivery and need to tip. In your `main.js` file, paste this price list:

```javascript
const pizza = 15.00
const extraCheese = 2.00
const deliveryFee = 3.00
let driverTip = 0.00
```

Update your code to prompt the user how much of a tip they want to give the driver _only after they've selected delivery_ as their option. The user input should update the current value stored in `driverTip`.

> Recall the `const` variable values cannot change for the life of the program.

### Part 3

We need to be sure we aren't giving away free cheese! Add in some code that updates the price based on whether or not they ordered extra cheese. **Extra cheese is charged PER PIZZA ordered** 

### Part 4

Finally, we need to print an itemized receipt that includes a summary of the order and the total order cost. 

### Example Output:

```javascript
'2 pizzas with extra cheese, delivered and including a $5 tip comes to $42.00'
```

### Submitting Your Code

Once you have completed this exercise, use the `et submit` command to submit your code from this project's folder.
