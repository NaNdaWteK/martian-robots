const Direction = require('./Direction')

class Robot {
  constructor (movements) {
    this.movements = movements
    this.lost = false
  }

  move (planet) {
    for (const movement of this.movements) {
      if (movement !== 'F') {
        this._rotateRobot(movement)
      } else {
        this._moveForward(planet)
      }
      if (this.lost) break
    }
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

  _moveForward(planet) {
    if (this.orientation === 'N') {
      this._moveToNorth(planet)
    } else if (this.orientation === 'S') {
      this._moveToSouth(planet)
    } else if (this.orientation === 'E') {
      this._moveToEast(planet)
    } else if (this.orientation === 'W') {
      this._moveToWest(planet)
    }

  }

  _moveToWest(planet) {
    const position = this.xPosition - 1
    if (this._isLostOnHorizontalAxis(position, planet.horizontalSize)) return this.lost = true
    this.xPosition = position
  }

  _moveToEast(planet) {
    const position = this.xPosition + 1
    if (this._isLostOnHorizontalAxis(position, planet.horizontalSize)) return this.lost = true
    this.xPosition = position
  }

  _moveToSouth(planet) {
    const position = this.yPosition - 1
    if (this._isLostOnVerticalAxis(position, planet.verticalSize)) return this.lost = true
    this.yPosition = position
  }

  _moveToNorth(planet) {
    const position = this.yPosition + 1
    if (this._isLostOnVerticalAxis(position, planet.verticalSize)) return this.lost = true
    this.yPosition = position
  }

  _isLostOnHorizontalAxis(position, horizontalSize) {
    return position > horizontalSize || position < 0;
  }

  _isLostOnVerticalAxis(position, verticalSize) {
    return position > verticalSize || position < 0;
  }

  _rotateRobot(movement) {
    this.orientation = Direction.from(this.orientation).rotateTo(movement)
  }
}

module.exports = Robot
