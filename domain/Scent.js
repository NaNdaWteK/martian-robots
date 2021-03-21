class Scent {
  constructor(planet) {
    this.planet = planet
  }

  wantToBeOutOnPlanetXAxis (position) {
    return position + 1 > this.planet.horizontalSize || position - 1 < 0
  }

  wantToBeOutOnPlanetYAxis (position) {
    return position + 1 > this.planet.verticalSize || position - 1 < 0
  }

  hasLostRobotScent (x, y) {
    return this.planet.lostRobots.find(lostRobot => this._wasRobotLostHere(lostRobot, x, y))
  }

  _wasRobotLostHere (lostRobot, x, y) {
    return lostRobot.xPosition === x && lostRobot.yPosition === y
  }
}

module.exports = Scent
