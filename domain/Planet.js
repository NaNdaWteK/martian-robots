const Scent = require('../domain/Scent')

class Planet {
  constructor (horizontalSize, verticalSize) {
    this.verticalSize = verticalSize
    this.horizontalSize = horizontalSize
    this.lostRobots = []
  }

  setLostRobotsStrategy (type) {
    const Strategies = {
      scent: Scent
    }
    this.saveRobotStrategy = new Strategies[type](this)
  }

  robotWillBeLostOnXAxis (xPosition) {
    return this.saveRobotStrategy.wantToBeOutOnPlanetXAxis(xPosition, this.horizontalSize)
  }

  robotWillBeLostOnYAxis (yPosition) {
    return this.saveRobotStrategy.wantToBeOutOnPlanetYAxis(yPosition, this.verticalSize)
  }

  hasLostRobot (xPosition, yPosition) {
    return this.saveRobotStrategy.hasLostRobot(this.lostRobots, xPosition, yPosition)
  }

  setLostRobot (x, y) {
    const position = {
      xPosition: x,
      yPosition: y
    }
    this.lostRobots.push(position)
  }
}

module.exports = Planet
