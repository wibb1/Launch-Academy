let allSeeds = [
  "arugula",
  "kale",
  "romaine",
  "iceberg",
  "beet",
  "potato",
  "carrot",
  "garlic",
  "onion",
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
  "roma tomato",
  "acorn squash",
  "ugly tomato",
  "cherry tomato",
  "butternut squash",
  "jalapeno pepper",
  "cayenne pepper",
  "banana pepper",
  "poblano pepper"
]

let fruits = [
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
  "roma tomato",
  "ugly tomato",
  "acorn squash",
  "cherry tomato",
  "butternut squash",
  "jalapeno pepper",
  "cayenne pepper",
  "banana pepper",
  "poblano pepper"
]

let vegetables = [
  "beet",
  "potato",
  "carrot",
  "garlic",
  "onion"
]

let leafyGreens = [
  "arugula",
  "kale",
  "romaine",
  "iceberg"
]

let myGarden = []
let noSeeds = []

// YOUR CODE GOES HERE

myGarden = myGarden.concat(allSeeds.filter(word => word.includes("tomato")))
console.log("1: "+ myGarden)

myGarden = myGarden.concat(allSeeds.filter(word => word.includes("berry")))
console.log("2: "+ myGarden)

allSeeds.forEach(i => {if(!i.includes("cayenne") && i.includes("pepper")) {myGarden.push(i)}});
console.log("3: "+ myGarden)

allSeeds.forEach(i => {if(!myGarden.includes(i)){noSeeds.push(i)}})
console.log("4: " + noSeeds)

console.log("5: ")
function fruits_to_vegetables(name) {
  let i = 0
  for (i = 0; i < fruits.length; i++){
    if (fruits[i].includes(name)) {
      vegetables.push(fruits[i]);
      fruits.splice(i,1)
      i--
    }
  }
}

fruits_to_vegetables("tomato");
fruits_to_vegetables("pepper");
fruits_to_vegetables("squash");

console.log(fruits)
console.log(vegetables)

console.log("6: ")
function rem_array(array,name) {
  let i = 0
  for (i = 0; i < array.length; i++) {
    if (array[i].includes(name)){
      array.splice(i,1)
      i--
    }
  }
}
console.log(allSeeds)
rem_array(allSeeds,"iceberg")
rem_array(leafyGreens, "iceberg")
console.log(allSeeds);
console.log(leafyGreens)

console.log("7: ")
myGarden.push(allSeeds.find(function(iHateFind){return iHateFind.includes("squash")}));
console.log(myGarden);

console.log("8: ");
myGarden.forEach(i=>{console.log(i)});
console.log(myGarden.length);