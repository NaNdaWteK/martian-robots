const Direction = require('./Direction')

class Robot {
  constructor (movements) {
    this.movements = movements
  }

  move () {
    const movementsToDo = [...this.movements]
    movementsToDo.forEach(movement => {
      if (movement !== 'F') {
        this._rotateRobot(movement)
      } else {
        this._moveForward();
      }
    })
  }

  _moveForward() {
    if (this.orientation === 'N') {
      this.yPosition += 1
    } else if (this.orientation === 'S') {
      this.yPosition -= 1
    } else if (this.orientation === 'E') {
      this.xPosition += 1
    } else if (this.orientation === 'W') {
      this.xPosition -= 1
    }
  }

  _rotateRobot(movement) {
    this.orientation = Direction.from(this.orientation).rotateTo(movement)
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
