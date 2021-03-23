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

  setLostRobot (x, y) {
    const position = {
      xPosition: x,
      yPosition: y
    }
    this.lostRobots.push(position)
  }
}

module.exports = Planet
