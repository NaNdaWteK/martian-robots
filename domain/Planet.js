class Planet {
  constructor (horizontalSize, verticalSize) {
    this.verticalSize = verticalSize
    this.horizontalSize = horizontalSize
    this.lostRobots = []
  }

  lostRobot (x, y) {
    const position = {
      xPosition: x,
      yPosition: y
    }
    this.lostRobots.push(position)
  }
}

module.exports = Planet
