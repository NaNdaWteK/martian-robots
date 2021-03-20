class Robot {
  constructor (movements) {
    this.movements = movements
  }

  setPosition (xPosition, yPosition, orientation) {
    this.setOrientation(orientation)
    this.setXPosition(xPosition)
    this.setYPosition(yPosition)
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
