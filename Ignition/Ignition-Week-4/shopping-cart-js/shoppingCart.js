// your code, here
let item1 = {itemName: "milk", quantity: 1}
let item2 = {itemName: "coffee", quantity: 1}
let item3 = {itemName: "bacon", quantity: 5}
let shoppingCart = [item1,item2,item3]
shoppingCart.forEach((item) =>{
  console.log(item.quantity + " " + item.name)
})

//changed something