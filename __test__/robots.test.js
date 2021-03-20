const Robot = require('../domain/Robot')
const Validations = require('../domain/Validations')

describe('Robot', () => {
  test('can be initialized with valid data', () => {
    const movementsResult = ["R", "F", "R", "F", "R", "F", "R", "F"]
    const positionLine = '1 0 E'
    const movementsLine = 'RFRFRFRF'

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(positionLine)
    const movements = Validations.prepareRobotsMovement(movementsLine)
    const robot = new Robot(movements)
    robot.setPosition(xPosition, yPosition, orientation)

    expect(robot.xPosition).toBe(1)
    expect(robot.yPosition).toBe(0)
    expect(robot.orientation).toBe('E')
    expect(robot.movements).toMatchObject(movementsResult)
  })

  test('can execute movements', () => {
    const positionLine = '1 1 E'
    const movementsLine = 'RFRFRFRF'

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(positionLine)
    const movements = Validations.prepareRobotsMovement(movementsLine)
    const robot = new Robot(movements)
    robot.setPosition(xPosition, yPosition, orientation)
    robot.move()

    expect(robot.xPosition).toBe(1)
    expect(robot.yPosition).toBe(1)
    expect(robot.orientation).toBe('E')
  })
})
