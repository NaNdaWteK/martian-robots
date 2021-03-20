class North {
  static rotateTo (direction) {
    const newDirections = {
      'L': 'W',
      'R': 'E'
    }
    return newDirections[direction]
  }
}

module.exports = North
