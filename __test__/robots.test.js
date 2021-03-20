const Robot = require('../domain/Robot')

describe('Robot', () => {
  test('know if started position', () => {
    const inputLine = '1 0 E'

    const robot = new Robot(inputLine)

    expect(robot.xPosition).toBe(1)
    expect(robot.yPosition).toBe(0)
    expect(robot.orientation).toBe('E')
  })
})
