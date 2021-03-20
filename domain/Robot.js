const Validations = require('./Validations')

class Robot {
  constructor (positionLine) {
    this._valid(positionLine)
    this.xPosition = parseInt(positionLine[0])
    this.yPosition = parseInt(positionLine[2])
    this.orientation = positionLine[4]
  }

  _valid (line) {
    Validations.checkRobotInputPositionLine(line)
  }
}

module.exports = Robot
