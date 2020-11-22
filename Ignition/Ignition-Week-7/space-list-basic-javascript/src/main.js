// Meets Expectations
let researcherSpaceItems = [new SpaceItem("rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00)]

function summary(iArray) {
  let array = []
  let grandTotal = 0
  array.push(`Dear Researcher,\n\nI bought you:\n`)
  for (let i = 0; i < iArray.length; i++) {
    let total = iArray[i].price * iArray[i].quantity
    let addS = ""
    if (iArray[i].quantity > 1) {
      addS = "s"
    }
    array.push(iArray[i].quantity + " " + iArray[i].name + addS + " - $" + total.toFixed(2));
    grandTotal += total
  }
  array.push(`\nYou owe me $${grandTotal.toFixed(2)}`)
  let printArray = array.join("\n")
  return printArray
}

console.log(summary(researcherSpaceItems));

// Optional
let inventoryLab1 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 3,
  insect: 1,
  soilSample: 5
};

let inventoryLab2 = {
  fruit: 2,
  grain: 2,
  plant: 5,
  grassBlade: 5,
  rock: 10,
  mushroom: 11,
  twig: 6,
  insect: 10,
  soilSample: 5
};
