class Robot {
  constructor (movements) {
    this.movements = movements
  }
  setOrientation (orientation) {
    this.orientation = orientation
  }

  setXPosition (xPosition) {
    this.xPosition = xPosition
  }

  setYPosition (yPosition) {
    this.yPosition = yPosition
  }
}

module.exports = Robot
