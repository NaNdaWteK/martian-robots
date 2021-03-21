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

  _rotateRobot (movement) {
    this.orientation = Direction.from(this.orientation).rotateTo(movement)
  }

  _moveForward (planet) {
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

  _moveToWest (planet) {
    const position = this.xPosition - 1
    if (this._isLostOnXAxis(position, planet)) {
      return this._setLostRobot(planet)
    }
    this._updateXPosition(planet, position)
  }

  _moveToEast (planet) {
    const position = this.xPosition + 1
    if (this._isLostOnXAxis(position, planet)) {
      return this._setLostRobot(planet)
    }
    this._updateXPosition(planet, position)
  }

  _moveToSouth (planet) {
    const position = this.yPosition - 1
    if (this._isLostOnYAxis(position, planet)) {
      return this._setLostRobot(planet)
    }
    this._updateYPosition(planet, position)
  }

  _moveToNorth (planet) {
    const position = this.yPosition + 1
    if (this._isLostOnYAxis(position, planet)) {
      return this._setLostRobot(planet)
    }
    this._updateYPosition(planet, position)
  }

  _setLostRobot (planet) {
    planet.lostRobot(this.xPosition, this.yPosition)
    this.lost = true
  }

  _isLostOnXAxis (position, planet) {
    return this._goesOutOnHorizontalAxis(position, planet) &&
      this._willBeLostOnXAxis(planet)
  }

  _willBeLostOnXAxis (planet) {
    return !planet.hasLostRobotScent(this.xPosition, this.yPosition) &&
      planet.wantToBeOutOnXAxis(this.xPosition)
  }

  _goesOutOnHorizontalAxis (position, planet) {
    return position > planet.horizontalSize || position < 0
  }

  _isLostOnYAxis (position, planet) {
    return this._goesOutOnVerticalAxis(position, planet) &&
      this._willBeLostOnYAxis(planet)
  }

  _goesOutOnVerticalAxis (position, planet) {
    return position > planet.verticalSize || position < 0
  }

  _willBeLostOnYAxis (planet) {
    return !planet.hasLostRobotScent(this.xPosition, this.yPosition) &&
      planet.wantToBeOutOnYAxis(this.yPosition)
  }

  _updateXPosition (planet, position) {
    if ((!planet.hasLostRobotScent(this.xPosition, this.yPosition)) ||
      (planet.hasLostRobotScent(this.xPosition, this.yPosition) &&
        !planet.wantToBeOutOnXAxis(this.xPosition))
    ) {
      this.xPosition = position
    }
  }

  _updateYPosition (planet, position) {
    if ((!planet.hasLostRobotScent(this.xPosition, this.yPosition)) ||
      (planet.hasLostRobotScent(this.xPosition, this.yPosition) &&
        !planet.wantToBeOutOnYAxis(this.yPosition))
    ) {
      this.yPosition = position
    }
  }
}

module.exports = Robot
