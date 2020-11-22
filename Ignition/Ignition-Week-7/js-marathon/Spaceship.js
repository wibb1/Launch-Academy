let Rocket = require('./Rocket')

class Spaceship {
  constructor(name) {
    this.name = name
    this.crew = []
    this.propulsion = null
  }
  loadCrew(trainedCrew) {
    trainedCrew.forEach((crewmember) => {
      console.log (`${crewmember.name} is now aboard the ${this.name}!`)
      this.crew.push(crewmember.name)
    });
  }
  captain(crew) {
    let randomNumber = Math.floor(Math.random() * crew.length);
    this.captain = crew[randomNumber].name;
  }
  mountPropulsion(object) {
    this.propulsion = object
    console.log(`\nThe propulsion is mounted!`)
  }
  takeoff() {
    let rocket = Rocket.fire()
    // This is the code I want to delay - or insert the countdown before this 
    if (rocket === true) {
      console.log(`\nTHUNDER`)
    } else {
      console.log(`\nTakeoff unsuccessful`)
    }
  }
}

module.exports = Spaceship