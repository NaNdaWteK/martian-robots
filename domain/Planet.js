class Planet {
  constructor (horizontalSize, verticalSize) {
    this.verticalSize = verticalSize
    this.horizontalSize = horizontalSize
    this.lostRobots = []
  }

  lostRobot (x, y) {
    const position ={
      xPosition: x,
      yPosition: y
    }
    this.lostRobots.push(position)
  }

  wantToBeOutOnXAxis (position) {
    return position + 1 > this.horizontalSize || position - 1 < 0
  }

  wantToBeOutOnYAxis (position) {
    return position + 1 > this.verticalSize || position - 1 < 0
  }

  hasLostRobotScent (x, y) {
    return this.lostRobots.find(lostRobot => this._wasRobotLostHere(lostRobot, x, y))
  }

  _wasRobotLostHere(lostRobot, x, y) {
    return lostRobot.xPosition === x && lostRobot.yPosition === y;
  }
}

module.exports = Planet
