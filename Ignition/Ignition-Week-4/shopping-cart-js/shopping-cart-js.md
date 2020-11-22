## Introduction

In this exercise, you will model a shopping cart using arrays and objects.

## Getting Started

```no-highlight
cd ~/challenges
et get shopping-cart-js
cd shopping-cart-js
```

Open the `shoppingCart.js` file in your editor.

## Instructions

First, create a few JavaScript objects to describe what you need to pick up at the supermarket. Each object should have the following properties:

* itemName
* quantity

{% show_hint %}
Use object literal notation to create a new object: `{}`.
{% endshow_hint %}

Once you have three or four item objects created, add all of your items to an array named `shoppingCart`.

{% show_hint %}
The `push()` method will allow you to add items to an array, or you can add them by using their variable name and the square-bracket notation for arrays `[]`.
{% endshow_hint %}

Finally, iterate over the array of items in the shoppingCart, and print out the `itemName` and `quantity` to the console.

{% show_hint %}
You can use a `for` loop or the `forEach` method to iterate over the shoppingCart array.
{% endshow_hint %}

{% show_solution %}
```javascript
let eggs = { itemName: 'dozen eggs', quantity: 1 }
let milk = { itemName: 'gallon of milk', quantity: 1 }
let bread = { itemName: 'loaf of bread', quantity: 1 }

let shoppingCart = [eggs, milk, bread]

shoppingCart.forEach((item) => {
  console.log(item.quantity + " " + item.itemName)
})
```
{% endshow_solution %}
