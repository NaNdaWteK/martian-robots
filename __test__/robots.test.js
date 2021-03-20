const Robot = require('../domain/Robot')

describe('Robot', () => {
  test('know if started position', () => {
    const movements = ["R", "F", "R", "F", "R", "F", "R", "F"]
    const robot = new Robot(movements)
    robot.setOrientation('E')
    robot.setXPosition(1)
    robot.setYPosition(0)

    expect(robot.xPosition).toBe(1)
    expect(robot.yPosition).toBe(0)
    expect(robot.orientation).toBe('E')
    expect(robot.movements).toMatchObject(movements)
  })
})
