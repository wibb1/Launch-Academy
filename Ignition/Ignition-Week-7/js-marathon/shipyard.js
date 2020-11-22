let CrewMember = require('./CrewMember');
let Spaceship = require('./Spaceship');
let Rocket = require('./Rocket')

let crewNames = ["Tom", "Dick", "Harry"]
let trainedCrew = {}
let newShip = new Spaceship("Waverider")

function trainCrew(crewNames) {
  trainedCrew = crewNames.map(name => { return new CrewMember(name) });
  trainedCrew.forEach(crewMemberObj => crewMemberObj.trained = true);
}
//Let's edit the countdown function to accept something we can run as a callback, and then update the launchpad accordingly.

  function countdown(startCount,callback) {
    let seconds = startCount
    setTimeout(function setDelay() {
      if (seconds <= 0) {
        console.log(`BLAST OFF!`)
        callback()
      } else {
        console.log(`${seconds}...`);
        seconds--;
        setTimeout(setDelay, 1000);
      }
    }, 1000);
  }


trainCrew(crewNames)
let startCount = 10
let launchpad = (ship, crewMembers, rocket, fuelAdd) => {
  console.log(`\nInitiating preflight procedures...`);
  console.log(`Welcome aboard the ${ship.name}!\n`);
  ship.loadCrew(trainedCrew)//needs to move into launchpad
  ship.captain(crewMembers)
  console.log(`${ship.captain} is the captain for this flight.`);
  countdown(startCount, ship.takeoff)
  ship.mountPropulsion(rocket)
  console.log(`Engine mounted: ${newShip.propulsion}\n`)
  Rocket.addFuel(fuelAdd)
}

let ourShip = launchpad(newShip, trainedCrew, "Warp Drive", 5)