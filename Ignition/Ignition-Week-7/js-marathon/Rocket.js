let Rocket = {
  fuel: 0, 
  addFuel: function(fuelAdd) {
    this.fuel = fuelAdd + this.fuel
  },
  fire: function() {
    if (this.fuel > 0) {
      this.fuel -= 1
      console.log(`\nThe engines have fired! You will have ${this.fuel} fuel remaining after takeoff.`)
      return true
    } else {
      console.log(`\nThe engines failed to fire becuase you have ${this.fuel} fuel remaining!`)
      return false
    }
  }
}

module.exports = Rocket