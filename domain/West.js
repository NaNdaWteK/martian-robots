class West {
  static rotateTo (direction) {
    const newDirections = {
      'L': 'S',
      'R': 'N'
    }
    return newDirections[direction]
  }
}

module.exports = West
