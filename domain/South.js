class South {
  static rotateTo (direction) {
    const newDirections = {
      'L': 'E',
      'R': 'W'
    }
    return newDirections[direction]
  }
}

module.exports = South
