let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"];
let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]
let orderNeeded = [""];
let missing = [""]
let allSupplies = [""]
console.log("supplyCheck")
supplyCheck(0);
console.log("stowSupplies")
stowSupplies(0);
console.log("addAlphabetically")
addAlphabetically();
console.log(supplies)
console.log("stockCheck")
stockCheck(0)
console.log(missing)
console.log("addMissingSupplies")
addMissingSupplies(0)
console.log(allSupplies)

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."  
function supplyCheck(i) {
  return supplies.forEach(i => console.log(i + " is accounted for."));
}
// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.
function stowSupplies(i) {
   return supplies.forEach(i => console.log("Name:  " + i +  "  Index:  " + supplies.indexOf(i)));
}
// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.
function addAlphabetically(){
  let newSupply = prompt("Enter the name of a new supply item");supplies.push(newSupply);
  return supplies.sort();
}
// 4.) Create a function named stockCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.
function stockCheck(i){
  inventoryChecklist.sort()
  supplies.sort()
   missing = inventoryChecklist.filter(i => supplies.indexOf(i)==-1);
   return missing.sort()
}
// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your stockCheck method to help you with this.
function addMissingSupplies(i){
  allSupplies = supplies.concat(missing);
  return allSupplies.sort()
}