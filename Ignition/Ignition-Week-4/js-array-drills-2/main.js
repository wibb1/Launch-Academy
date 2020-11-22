let heroes = ["Frodo Baggins", "Samwise Gamgee", "Gandalf", "Legolas", "Gimli", "Aragorn", "Boromir", "Merry", "Pippin"]

// in the previous article, we saw how we can filter based on lengths of string
// let isOverFourChar = (element) => {return element.length > 4}
// airTravelArray.filter(isOverFourChar)

// ================================ Question #1 ================================

// Using FILTER, list all of the members of the Company of the Ring whose names begin with the letter "G"

// first, define a function that takes in one hero and will return true if the character's name starts with "G"

let beginsWithLetterG = (hero) => {
  if (hero.charAt(0) === "G") {
    return true
  }
}
console.log(beginsWithLetterG("Gimli"))

// next use the filter method to return only those whose names start with "G"

let trueGs = heroes.filter(i => beginsWithLetterG(i))

console.log(trueGs);

// ================================ Question #2 ================================


// What if we made things a little more complicated?

// Often, objects will be defined like below, rather than on one line, i.e { name: "Frodo Baggins", species: "Hobbit", ringBearer: true } -- it becomes more readable

let ringGuardians = [
  {
    name: "Frodo Baggins",
    species: "Hobbit",
    ringBearer: true
  },
  {
    name: "Samwise Gamgee",
    species: "Hobbit",
    ringBearer: false // "I can't carry it for you, but I can carry you!"  WRONG!!! he carries the ring for a very short time but is a ringbearer!!!!   
  },
  {
    name: "Gandalf",
    species: "Wizard",
    ringBearer: false // "Don't tempt me, Frodo!"
  },
  {
    name: "Legolas",
    species: "Elf",
    ringBearer: false
  },
  {
    name: "Gimli",
    species: "Dwarf",
    ringBearer: false
  },
  {
    name: "Aragorn",
    species: "Human",
    ringBearer: false
  },
  {
    name: "Boromir",
    species: "Human",
    ringBearer: false
  },
  {
    name: "Merry",
    species: "Hobbit",
    ringBearer: false
  },
  {
    name: "Pippin",
    species: "Hobbit",
    ringBearer: false
  }
]


// using the FILTER method, can you return all of the members of the Company of the Ring that are Hobbits?

// first, write a function that will return true if the object's species is "Hobbit"

let isAHobbit = (hero) => {
  return hero.species === "Hobbit"
}

// next, use filter to return an array of hobbits
//let hobbits = ringGuardians.filter...
let hobbits = ringGuardians.filter(isAHobbit)

console.log(hobbits);
let hobbitsarray = []
hobbits.forEach(i => hobbitsarray.push(i.name));
console.log(hobbitsarray)

// ================================ Question #3 ================================

// Since there is only ONE ring bearer, "find" is a good method to use, as it will only return the first result that passes true

// return the Frodo object from the ringGuardians array using the FIND method!

let isARingBearer = (i) => {
  return i.ringBearer == true
}
console.log(ringGuardians.find(isARingBearer))

// ================================ Question #4 ================================

// let's suppose each of these heroes has a quantified Strength:

let strengthPoints = [55, 15, 100, 75, 75, 75, 30, 10, 10]

// use the REDUCE method to sum their cumulative strength

let totalSTR = strengthPoints.reduce((totalStr, indStr) => {
  return totalStr + indStr
})

console.log(totalSTR)