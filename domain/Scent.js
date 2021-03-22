class Scent {
  wantToBeOutOnPlanetXAxis (position, horizontalSize) {
    return position + 1 > horizontalSize || position - 1 < 0
  }

  wantToBeOutOnPlanetYAxis (position, verticalSize) {
    return position + 1 > verticalSize || position - 1 < 0
  }

  hasLostRobot (lostRobots, x, y) {
    return lostRobots.find(lostRobot => this._wasRobotLostHere(lostRobot, x, y))
  }

  _wasRobotLostHere (lostRobot, x, y) {
    return lostRobot.xPosition === x && lostRobot.yPosition === y
  }
}

module.exports = Scent
