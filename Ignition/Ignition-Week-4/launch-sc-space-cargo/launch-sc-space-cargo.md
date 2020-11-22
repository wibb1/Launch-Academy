As a space explorer, you've been traveling from planet to planet for a while now, and it looks like we have taken on some cargo. Before we land at the next space shipyard, we'll need to sort through the space junk and make sure everything is organized.

## Meets Expectations Criteria

Complete **Parts 1 - 7**.  

Log each each part to the console to show your results!

## Exceeds Expectations Criteria

Complete **Parts 8 and 9**.

Log each each part to the console to show your results!

### Getting Started

```no-highlight
et get launch-sc-space-cargo
cd launch-sc-space-cargo
code code.js
```

At the moment, all of our cargo has been haphazardly thrown into piles, represented by the arrays provided to you in the `code.js` file i.e. any array of items that ends with the word `pile`. A `cargoHold` object has been created for you, that will help us organize all of cargo into specific areas. By the end of your work, you should have a cargo hold populated with items from your supply piles.

```js
// code.js
let cargoHold = {
  cleaned: false,
  daysSinceLastIncident: 0,
  fuel: 0,
  hyperdrive: null,
  recyclables: [],
  toolBin: {
    bolts: [],
    hammers: [],
    nuts: []
  },
  robotsForSale: [],
  stableElements: []
};
```

Before starting, take a moment to review the variables provided for you in the `code.js` file. Many of the functions we create should be methods defined on our `cargoHold` object. These methods will help us sift through the junk we have and populate the empty arrays and values already defined on `cargoHold`.

Lastly, don't forget to look back to the online documentation to recall how each of the functions you are tasked with using work.

### Part 1
It would be great if we could avoid making any more messes in the cargo hold in the future. At the moment, `cargoHold` has a property of `cleaned`, to represent whether or not the cargo hold has been cleaned recently.

Define a method on the `cargoHold` object called `toggleCleanedStatus`, that will toggle the value of `cleaned` to true or false. This method should not take any arguments, but instead refer to the currently existing value of `cleaned` on the `cargoHold` object to determine whether the value should be true or false. For instance, if `cleaned` is set to `true`, `toggleCleanedStatus` should change the value to false, and vice versa.

Example Implementation:
```js
cargoHold.cleaned
// false
cargoHold.toggleCleanedStatus()

cargoHold.cleaned
// true
```

### Part 2
It has been a while since there was last an incident in the cargo hold. We should track just how many earth days it has been since something went wrong.

Define a method on the `cargoHold` object called `addDayForIncidentReport`, that adds one to `daysSinceLastIncident`.

Example Implementation:
```js
cargoHold.daysSinceLastIncident
// 0
cargoHold.addDayForIncidentReport()

cargoHold.daysSinceLastIncident
// 1
```

### Part 3
Somebody left a pile of fuel canisters laying about. We may as well consolidate them while we are organizing.

Define a method on the `cargoHold` object called `consolidateFuel`, that uses `.reduce` to add up all of the values in `fuelCanisterPile` and store the sum in `cargoHold`'s `fuel` property. `consolidateFuel` should be prepared to accept an array of integer values as an argument.

Example Implementation:
```js
let fuelCanisterPile = [2, 5, 9, 2, 3, 4, 6, 8, 8, 2, 1, 0]

cargoHold.fuel
// 0
cargoHold.consolidateFuel(fuelCanisterPile)

cargoHold.fuel
// 50
```

### Part 4
Turns out we have a lot of spare hyperdrives for speedy interspace travel. We only need one however, so the rest we can scrap or sell at the next space port with get to. Just retrieve one of the hyperdrives that isn't *rusty* and store it in the cargo hold.

Define a method on the `cargoHold` object called `retrieveWorkingHyperdrive`, that uses `.find` to to retrieve the first available hyperdrive that **does not have the substring "rusty" in its name**. `retrieveWorkingHyperdrive` should accept an array of strings as an argument (in this case an array of strings with the word hyperdrive in them), and sets the element retrieved to our `hyperdrive` property on the `cargoHold`.

Example Implementation:
```js
let hyperDrivePile = ["rusty hyperdrive", "millennium hyperdrive", "hyperdrive XL", "rusty hyperdrive", "rusty hyperdrive XL"]

cargoHold.hyperdrive
// null
cargoHold.retrieveWorkingHyperdrive(hyperDrivePile)

cargoHold.hyperdrive
// millennium hyperdrive
```

*Hint:* You may wish to use the [`.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method to help you check if a word is contained within a string!

### Part 5
Even interstellar spaceships need to be environmentally friendly, so lets make sure to sift through any of the throwaway materials and recycle all of the `paper`, `plastic`, `glass` and `metal can` items. As of yet, there is sadly no composting on our ship.

Define a method on the `cargoHold` object called `filterOutRecyclables`, that utilizes the `.filter` function to create an array of strings that only have the values of `paper`, `plastic`, `glass` or `metal can`. `filterOutRecyclables` should accept an array of strings as an argument (in this case an array of strings), and sets the array retrieved to our `recyclables` property on the `cargoHold`.

Example Implementation:
```js
let recyclablesPile = ["paper", "space banana peel", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]

cargoHold.recyclables
// []
cargoHold.filterOutRecyclables(recyclablesPile)

cargoHold.recyclables
// ["paper", "plastic", "plastic", "glass", "metal can", "paper"]
```

*Hint:* recall that `.filter` needs a callback function in order examine whether or not each element in our `recyclablesPile` array is valid. You might consider defining that callback function first, and then passing it to your filter function. The callback function will need to have some conditional logic in it (e.g. `if...else` statements) that helps it make the evaluation as well.

### Part 6
Things are starting to look better around this ole space ship, but we have a bunch of tools rattling around that should be gathered up. Let's consolidate these items into **one** `toolBin` property defined on the `cargoHold`.

Define a method on the `cargoHold` object called `consolidateTools`, that accepts an array of tool bin objects (e.g. like the ones in `oldToolBinsPile`) and stores them in your your `cargoHold`'s `toolBin` within the `tools` array. You may use any JS functions you deem necessary to implement this method.

Example Implementation:
```js
let oldToolBinsPile = [
 { label: "Tool Bin 1", items: [] }, { label: "Tool Bin 2", items: ["flux capicitor wrench", "hydrospanner", "android eye scanner", "skeleton key-card"] }, { label: "Tool Bin 3", items: [] }, { label: "Tool Bin 4", items: ["transponder", "body scanner"] }, { label: "Tool Bin 5", items: ["multi-pass", "sonic screwdriver", "teleporter gun"] }
]

cargoHold.toolBin
// {tools: Array(0)}
cargoHold.consolidateTools(oldToolBinsPile)

cargoHold.toolBin
// { label: 'Primary Tool Bin',
// tools: Array(9) }

cargoHold.toolBin.tools
// [ 'flux capicitor wrench',
//   'hydrospanner',
//   'android eye scanner',
//   'skeleton key-card',
//   'transponder',
//   'body scanner',
//   'multi-pass',
//   'sonic screwdriver',
//   'teleporter gun' ]
```

### Part 7
Part of the reason we want on we are flying through the galaxy right now is so that we can sell off a bunch of robots that we have stored in the space ship. But most traders won't take any older droids or robots. Sort through the robots that we have and set aside any that are older than 15 years old to be scrapped. The rest we will store in the `cargoHold`.

Define a method on the `cargoHold` object called `filterRobots`, that accepts an array of robot objects (e.g. like the ones in `robotsPile`) and stores them in your your `cargoHold`'s `robotsForSale` array only if a robot object's `yearsOld` value is less than or equal to 15. You may use any JS functions you deem necessary to implement this method.

Example Implementation:
```js
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

cargoHold.robotsForSale
// {robotsForSale: Array(0)}
cargoHold.filterRobots(robotsPile)

cargoHold.robotsForSale
// {robotsForSale: Array(2)}
// should contain only those robots that are less than 15 yearsOld, specifically the maintenance and astromech droids.
```

### Part 8
Last thing that we have to sort out today is all of that...strange dilithium ore over there in the `orePile`. Careful, the glowing dilithium ore is unstable, and should be thrown in the `trash` (i.e. out the airlock) as soon as possible. Grab the the ones that are stable, and add them together in the `dilithiumOreWeight` property of our cargo hold, so that we can get a count on how much we have in kilograms.

Define a method on the `cargoHold` object called `consolidateOre` that accepts an array of ore objects (e.g. like the ones in the `oresPile`) and adds the ore weights to a sum stored in the `dilithiumOreWeight` if the ore is is stable. If the ore object has a status of glowing, then take the whole ore object and add it to the `trash` property of `cargoHold`. You may use any JS functions you deem necessary to implement this method.

Example Implementation:
```js
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

cargoHold.dilithiumOreWeight
// 0

cargoHold.consolidateOre(orePile)

cargoHold.dilithiumOreWeight
// 20

cargoHold.trash
// cargoHold.trash should contain the two glowing ore objects.
```

### Part 9
Have some extra time on your hands? Well boy howdy are you eager. If you could help us fuel up the robots that we have for sale using the fuel that you consolidated earlier, that would save the whole crew a lot of work!

Define a method on the `cargoHold` object called `fuelUpRobots`. If any robot for sale has less than 5 units, the method should set the `fuel` value of each of our `robotsForSale` to `5`. Note that some of the robots already have some fuel in them. Any fuel given to the robots should be subtracted from the fuel amount in `cargoHold.fuel`.

```js
cargoHold.robotsForSale[0]
// { robotType: 'Astromech Droid',
//   yearsOld: 3,
//   fuel: 2 }
cargoHold.robotsForSale[1]
// { robotType: 'Maintenance Droid',
//   yearsOld: 10,
//   fuel: 1 }

cargoHold.fuel
// 50

cargoHold.fuelUpRobots()

cargoHold.robotsForSale[0]
// { robotType: 'Astromech Droid',
//   yearsOld: 3,
//   fuel: 5 }
cargoHold.robotsForSale[1]
// { robotType: 'Maintenance Droid',
//   yearsOld: 10,
//   fuel: 5 }

cargoHold.fuel
// 43
```
