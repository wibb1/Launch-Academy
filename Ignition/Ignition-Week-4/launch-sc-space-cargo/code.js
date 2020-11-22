let fuelCanisterPile = [2, 5, 9, 2, 3, 4, 6, 8, 8, 2, 1, 0]

let cargoHold = {
  cleaned: false,
  daysSinceLastIncident: 0,
  fuel: 0,
  hyperdrive: null,
  recyclables: [],
  toolBin: {
    label: "Primary Tool Bin",
    tools: []
  },
  robotsForSale: [],
  dilithiumOreWeight: 0,
  trash: [],
  consolidateFuel: function (i) {
    let consolidateFuel = i.reduce((totalFuel, gallons) => {
      return totalFuel + gallons
    })
    cargoHold.fuel = consolidateFuel
  },
  retrieveWorkingHyperdrive: function (i) {
    let notRusty = (i) => {
      return !i.includes("rusty")
    }
    this.hyperdrive = hyperDrivePile.find(notRusty)
  },
  filterOutRecyclables: function (i) {
    let includesPaper = (i) => {
      return i.includes("paper") || i.includes("plastic") || i.includes("glass") || i.includes("metal can")
    }
    let allRecyclables = recyclablesPile.filter(includesPaper)
    cargoHold.recyclables = allRecyclables
  },
  consolidateTools: function () {
    let allTools = [];
    for (let i = 0; i < oldToolBinsPile.length; i++) {
      for (let j = 0; j < oldToolBinsPile[i].items.length; j++) {
        allTools.push(oldToolBinsPile[i].items[j])
      }
    }
    cargoHold.toolBin.tools = allTools.sort()
  },
  filterRobots: function (i) {
    let robotYears = (i) => {
      return i.yearsOld < 15
    }
    cargoHold.robotsForSale = robotsPile.filter(robotYears)
  },
  consolidateOre: function (i) {
    let oreTrash = (i) => {
      return i.status.includes("glowing")
    }
    cargoHold.trash = orePile.filter(oreTrash)

    let not_oreTrash = (i) => {
      return !i.status.includes("glowing")
    }
    orePile = orePile.filter(not_oreTrash)

    let oreWeight = []
    for (let i = 0; i < orePile.length; i++) {
      oreWeight.push(orePile[i].weight)
    }
    let addOreWeight = oreWeight.reduce((tOre, eOre) => {
      return tOre + eOre
    })
    cargoHold.dilithiumOreWeight = addOreWeight
  },
  fuelUpRobots: function () {
    let addedFuel = 0
    for (let i = 0; i < cargoHold.robotsForSale.length; i++) {
      addedFuel += (5 - cargoHold.robotsForSale[i].fuel)
      cargoHold.robotsForSale[i].fuel = 5
    }
    cargoHold.fuel -= addedFuel
  },
};

let hyperDrivePile = ["rusty hyperdrive", "millennium hyperdrive", "hyperdrive XL", "rusty hyperdrive", "rusty hyperdrive XL"]

let recyclablesPile = ["paper", "space banana peel", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]

let oldToolBinsPile = [
  {
    label: "Tool Bin 1",
    items: []
  },
  {
    label: "Tool Bin 2",
    items: ["flux capicitor wrench", "hydrospanner", "android eye scanner", "skeleton key-card"]
  },
  {
    label: "Tool Bin 3",
    items: []
  },
  {
    label: "Tool Bin 4",
    items: ["transponder", "body scanner"]
  },
  {
    label: "Tool Bin 5",
    items: ["multi-pass", "sonic screwdriver", "teleporter gun"]
  }
]

let robotsPile = [
  {
    robotType: "Protocol Droid",
    yearsOld: 41,
    fuel: 0
  },
  {
    robotType: "Astromech Droid",
    yearsOld: 3,
    fuel: 2
  },
  {
    robotType: "Maintenance Droid",
    yearsOld: 10,
    fuel: 1
  },
  {
    robotType: "Bending Robot",
    yearsOld: 19,
    fuel: 0
  }
]

let orePile = [
  {
    status: "glowing",
    weight: 20.5
  },
  {
    status: "stable",
    weight: 15.5
  },
  {
    status: "stable",
    weight: 4.5
  },
  {
    status: "glowing",
    weight: 0.5
  }
]

console.log("Part 1")
function toggleCleanedStatus() {
  if (cargoHold.cleaned === true) {
    cargoHold.cleaned = false
  } else {
    cargoHold.cleaned = true
  }
}
console.log("Before running toggleCleanedStatus, cargoHold.cleaned is: " + cargoHold.cleaned)
toggleCleanedStatus()
console.log("After running toggleCleanedStatus, cargoHold.cleaned is: " + cargoHold.cleaned)

console.log("Part 2")
function addDayForIncidentReport() {
  cargoHold.daysSinceLastIncident++
}
console.log("Before running addDayForIncidentReport, cargoHold.daysSinceLastIncident is: " + cargoHold.daysSinceLastIncident)
addDayForIncidentReport()
console.log("After running addDayForIncidentReport, cargoHold.daysSinceLastIncident is: " + cargoHold.daysSinceLastIncident)

console.log("Part 3")
console.log("Fuel before consolidation is " + cargoHold.fuel + " gallons.")
cargoHold.consolidateFuel(fuelCanisterPile)
console.log("Fuel after consolidation is " + cargoHold.fuel + " gallons.")

console.log("Part 4")
console.log("Before running retrieveWorkingHyperdrive cargoHold.hyperdrive was " + cargoHold.hyperdrive)
cargoHold.retrieveWorkingHyperdrive(hyperDrivePile)
console.log("After running retrieveWorkingHyperdrive cargoHold.hyperdrive was " + cargoHold.hyperdrive)

console.log("Part 5")
console.log("Before filterRecyclables " + cargoHold.recyclables)
cargoHold.filterOutRecyclables(recyclablesPile)
console.log("After filterRecyclables " + cargoHold.recyclables)

console.log("Part 6")
console.log("Before consolidation the cargo bin had the following tools: " + cargoHold.toolBin.tools)
cargoHold.consolidateTools()
console.log("After consolidation the cargo bin had the following tools: " + cargoHold.toolBin.tools)

console.log("Part 7")
console.log("Before running filterRobots")
console.log(cargoHold.robotsForSale)
cargoHold.filterRobots(robotsPile)
console.log("After running filterRobots") //  I noticed that this is where the refueling was occurring and I tried a few things (putting a user input in the function, in the program, etc.) to not run it here but they didn't work - can you explain to me why the fuelUpRobots function is being executed before it is being called?  Is the entire program run before the user inputs are called?  I'm confused as to what is going on with this but I have to say I have beat my head against this program enough and I need some off time...
console.log(cargoHold.robotsForSale)

console.log("Part 8")
console.log("orePile")
console.log(orePile)
console.log("After cargoHold.trash")
console.log(cargoHold.trash)
console.log("Call consolidateOre")
cargoHold.consolidateOre(orePile)
console.log("orePile")
console.log(orePile)
console.log("cargoHold.trash")
console.log(cargoHold.trash)
console.log("cargoHold.dilithiumOreWeight is now " + cargoHold.dilithiumOreWeight)

console.log("Part 9")
console.log("Before fueling up robots")
console.log(cargoHold.robotsForSale)
console.log(cargoHold.fuel)
cargoHold.fuelUpRobots()
console.log("After fueling up robots")
console.log(cargoHold.robotsForSale)
console.log(cargoHold.fuel)
