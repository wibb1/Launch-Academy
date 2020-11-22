// Your code here!
const pizza = 15.00;
const extraCheese = 2.00;
const deliveryFee = 3.00;
let driverTip = -1.00;
let totalCost = 0.00;
let pizzaCount = 0;
let pizzaCost = 0;
let regex = /[^0-9]+$/;
let takeOutQ = "";
let pizzaConfirm = "";
let extraCheeseQ = "";
let tipResponse = "";

while (takeOutQ != "delivery" && takeOutQ != "takeout") {
  let takeOut = prompt("Please enter either Delivery or Takeout");
  takeOutQ = takeOut.toLowerCase()
  //console.log("takeOutQ = " + takeOutQ)
}
while (isNaN(pizzaCount) || pizzaCount <= 0) {
  let pizzaCountQ = prompt("How many pizzas would you like? Must include only numbers");
  pizzaCount = parseInt(pizzaCountQ) 
  //console.log("pizzaCount = " + pizzaCount)
}
while (extraCheeseQ != 'yes' && extraCheeseQ != 'no') {
  let extraCheese = prompt("Would you like extra cheese? [yes or no]");
  extraCheeseQ = extraCheese.toLowerCase()
  //console.log("extraCheeseQ = " + extraCheeseQ)
}
if (takeOutQ === "delivery") {
  while (isNaN(driverTip) || driverTip < 0.00)  {
    let driverTipQ = prompt("Please enter a tip amount for your driver");  // need to validate
    driverTip = Number(driverTipQ)
    //console.log("driverTip = " + driverTip)
  }
}
if (extraCheeseQ === "yes") {
  console.log("So your order is for " + pizzaCount + " pizzas, with extra cheese. ");
  pizzaCost = pizza + extraCheese;
} else {
  console.log("So your order is for " + pizzaCount + " pizzas, without extra cheese. ");
  pizzaCost = pizza;
}
if (takeOutQ === "delivery") {
  console.log("You are getting your pizzas delivered, and are giving $" + driverTip.toFixed(2) + " as a tip.");
  totalCost = pizzaCost * pizzaCount + driverTip + deliveryFee;
} else {
totalCost = pizzaCost * pizzaCount;
}
console.log("Your total with tax is $" + totalCost.toFixed(2));