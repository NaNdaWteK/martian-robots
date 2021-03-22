const Planet = require('./Planet')
const Robot = require('./Robot')
const Validations = require('./Validations')

class Explorer {
  constructor (inputReader, lostRobotStrategy) {
    const { planetLine, robotsLines } = inputReader.read()
    this.planet = this._preparePlanet(planetLine, lostRobotStrategy)
    this.robots = this._prepareRobots(robotsLines)
  }

  execute () {
    this.robots.forEach(robot => {
      robot.move()
    })
    return this
  }

  _preparePlanet (planetLine, lostRobotStrategy) {
    const { verticalSize, horizontalSize } = Validations.preparePlanetInputLine(planetLine)
    const planet = new Planet(verticalSize, horizontalSize)
    planet.setLostStrategy(lostRobotStrategy)
    return planet
  }

  _prepareRobots (robotsLines) {
    return robotsLines.map(robotLine => {
      return this._prepareRobot(robotLine)
    })
  }

  _prepareRobot (robotLine) {
    const movements = Validations.prepareRobotsMovement(robotLine.movements)
    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(robotLine.position)
    const robot = new Robot(movements, this.planet)
    robot.setPosition(xPosition, yPosition, orientation)

    return robot
  }
}

module.exports = Explorer
