let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

// your code, here

let lbsCoffee = shoppingCart.find((i) => i.itemName === "lbs. of coffee");
console.log("A pound of coffee costs $" + lbsCoffee + ".");
let galMilk = shoppingCart.find((i) => i.itemName === "gallon of milk");
console.log("A gallon of milk costs $" + galMilk + ".");

let subtotal = 0;
shoppingCart.forEach(i => {
  subtotal += i.quantity * i.price;
});
console.log("Your subtotal is $" + subtotal.toFixed(2) + ".");
console.log("Your total is $" + (subtotal * 1.0625).toFixed(2) + ".");