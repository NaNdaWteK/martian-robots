const Direction = require('./directions/Direction')

class Robot {
  constructor (movements, planet) {
    this.movements = movements
    this.executedMovements = []
    this.planet = planet
    this.lost = false
  }

  move () {
    const executedMovements = [...this.movements]
    for (const movement of this.movements) {
      this.executedMovements.push(executedMovements.shift())
      if (movement !== 'F') {
        this._rotateRobot(movement)
      } else {
        this._moveForward()
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

  _moveForward () {
    if (this.orientation === 'N') {
      this._moveToNorth()
    } else if (this.orientation === 'S') {
      this._moveToSouth()
    } else if (this.orientation === 'E') {
      this._moveToEast()
    } else if (this.orientation === 'W') {
      this._moveToWest()
    }
  }

  _moveToWest () {
    const position = this.xPosition - 1
    if (this._isLostOnXAxis(position)) {
      return this._setLostRobot()
    }
    this._updateXPosition(position)
  }

  _moveToEast () {
    const position = this.xPosition + 1
    if (this._isLostOnXAxis(position)) {
      return this._setLostRobot()
    }
    this._updateXPosition(position)
  }

  _moveToSouth () {
    const position = this.yPosition - 1
    if (this._isLostOnYAxis(position)) {
      return this._setLostRobot()
    }
    this._updateYPosition(position)
  }

  _moveToNorth () {
    const position = this.yPosition + 1
    if (this._isLostOnYAxis(position)) {
      return this._setLostRobot()
    }
    this._updateYPosition(position)
  }

  _setLostRobot () {
    this.planet.setLostRobot(this.xPosition, this.yPosition)
    this.lost = true
  }

  _isLostOnXAxis (position) {
    return this._goesOutOnXAxis(position) &&
      this._willBeLostOnXAxis()
  }

  _willBeLostOnXAxis () {
    return !this._planetHasLostRobotInCurrentPosition() &&
      this.planet.robotWillBeLostOnXAxis(this.xPosition)
  }

  _goesOutOnXAxis (position) {
    return position > this.planet.horizontalSize || position < 0
  }

  _isLostOnYAxis (position) {
    return this._goesOutOnYAxis(position) &&
      this._willBeLostOnYAxis()
  }

  _goesOutOnYAxis (position) {
    return position > this.planet.verticalSize || position < 0
  }

  _willBeLostOnYAxis () {
    return !this._planetHasLostRobotInCurrentPosition() &&
      this.planet.robotWillBeLostOnYAxis(this.yPosition)
  }

  _updateXPosition (position) {
    if (!this._planetHasLostRobotInCurrentPosition() || this._robotSavedOnXAxis()) {
      this.xPosition = position
    } else {
      this.executedMovements.pop()
    }
  }

  _updateYPosition (position) {
    if (!this._planetHasLostRobotInCurrentPosition() || this._robotSavedOnYAxis()) {
      this.yPosition = position
    } else {
      this.executedMovements.pop()
    }
  }

  _robotSavedOnXAxis () {
    return (this._planetHasLostRobotInCurrentPosition() &&
      !this.planet.robotWillBeLostOnXAxis(this.xPosition))
  }

  _robotSavedOnYAxis () {
    return this._planetHasLostRobotInCurrentPosition() &&
      !this.planet.robotWillBeLostOnYAxis(this.yPosition)
  }

  _planetHasLostRobotInCurrentPosition () {
    return this.planet.hasLostRobot(this.xPosition, this.yPosition)
  }
}

module.exports = Robot
