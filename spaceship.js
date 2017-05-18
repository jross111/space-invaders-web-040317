class Spaceship {
  constructor(name, crew) {
    this.name = name
    this.phasers = 5
    this.phasersCharge = "uncharged"
    this.shields = 4
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.crew = crew
    this.docked = true
    this.assignOut()
  }



  assignOut() {
    if (this.crew.length > 0) {
      for (var i = 0; i < this.crew.length; i++) {
        this.crew[i].currentShip = this
      }
      this.docked = false
    }
  }

}
