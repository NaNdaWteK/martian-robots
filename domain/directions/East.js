class East {
  static rotateTo (direction) {
    const newDirections = {
      L: 'N',
      R: 'S'
    }
    return newDirections[direction]
  }
}

module.exports = East
