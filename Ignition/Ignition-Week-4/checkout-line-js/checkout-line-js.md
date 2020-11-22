In this exercise, you will calculate a subtotal and total price of the
contents of a shopping cart.

## Getting Started

```no-highlight
cd ~/challenges
et get checkout-line-js
cd checkout-line-js
```

Open the `checkoutLine.js` file in your editor.

### Instructions

You have been provided an array of items named `shoppingCart`. Each item object has the following properties:

* itemName
* quantity
* price

### What's the price?

Write code to answer the following questions about the items in the shopping cart:

* How much is one pound (lb.) of coffee?
* How many gallons of milk are in the shopping cart?

{% show_solution %}
If we know the index of the array:
```javascript
let coffeeItem = shoppingCart[3]
let milkItem = shoppingCart[1]
```
If we only know the name of the product we are looking for...
```javascript
let coffeeItem = shoppingCart.find((item) => item.itemName === 'lbs. of coffee')
let milkItem = shoppingCart.find((item) => item.itemName === 'gallon of milk')
```
In either case, then print to console:
```javascript
console.log('One pound of coffee is $' + coffeeItem.price +'.')
console.log('There are '+ milkItem.quantity + ' gallon(s) of milk in the shopping cart.')
```
{% endshow_solution %}

### Subtotal and Total

Iterate over the array, and calculate the sub-total of the items in the shopping cart. This would be the total cost of the items **without tax**. Print this value to the console.

Next, calculate the total cost of the items, **including tax**. Use 6.25% as the tax rate.

{% show_hint %}
You can use a `for` loop, or the `forEach` method to iterate over the shoppingCart array.
{% endshow_hint %}

{% show_solution %}
```javascript
const TAX_RATE = 6.25
let subTotal = 0
shoppingCart.forEach((item) => {
  subTotal += item.price `*` item.quantity
})
console.log('subtotal: $' + subTotal)
console.log('total: $' + (subTotal `*` (1 + (TAX_RATE / 100))) )
```
{% endshow_solution %}
