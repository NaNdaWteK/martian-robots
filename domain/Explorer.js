const Planet = require('./Planet')
const Robot = require('./Robot')
const Validations = require('./Validations')

class Explorer {
  constructor (inputReader) {
    const { planetLine, robotsLines } = inputReader.read()
    this.planet = this._preparePlanet(planetLine)
    this.robots = this._prepareRobots(robotsLines)
  }

  _preparePlanet (planetLine) {
    const { verticalSize, horizontalSize } = Validations.preparePlanetInputLine(planetLine)
    return new Planet(verticalSize, horizontalSize)
  }

  _prepareRobots (robotsLines) {
    return robotsLines.map(robotLine => {
      return this._prepareRobot(robotLine)
    })
  }

  _prepareRobot (robotLine) {
    const movements = Validations.prepareRobotsMovement(robotLine.movements)
    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(robotLine.position)
    const robot = new Robot(movements)
    robot.setPosition(xPosition, yPosition, orientation)

    return robot
  }
}

module.exports = Explorer
