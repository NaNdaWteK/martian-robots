const Robot = require('../domain/Robot')
const Planet = require('../domain/Planet')
const Validations = require('../domain/Validations')

describe.skip('Robot', () => {
  test('can be initialized with valid data', () => {
    const movementsResult = ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
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
    const planet = new Planet(5, 3)

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(positionLine)
    const movements = Validations.prepareRobotsMovement(movementsLine)
    const robot = new Robot(movements, planet)
    robot.setPosition(xPosition, yPosition, orientation)
    robot.move()

    expect(robot.xPosition).toBe(1)
    expect(robot.yPosition).toBe(1)
    expect(robot.orientation).toBe('E')
    expect(robot.lost).toBe(false)
  })

  test('can be lost', () => {
    const positionLine = '3 2 N'
    const movementsLine = 'FRRFLLFFRRFLL'
    const planet = new Planet(5, 3)

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(positionLine)
    const movements = Validations.prepareRobotsMovement(movementsLine)
    const robot = new Robot(movements, planet)
    robot.setPosition(xPosition, yPosition, orientation)
    robot.move()

    expect(robot.xPosition).toBe(3)
    expect(robot.yPosition).toBe(3)
    expect(robot.orientation).toBe('N')
    expect(robot.lost).toBe(true)
  })

  test('can not be lost at same point of other robot was lost', () => {
    const planet = new Planet(5, 3)
    lostARobot(planet)
    const positionLine = '0 3 W'
    const movementsLine = 'LLFFFLFLFL'

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(positionLine)
    const movements = Validations.prepareRobotsMovement(movementsLine)
    const robot = new Robot(movements, planet)
    robot.setPosition(xPosition, yPosition, orientation)
    robot.move()

    expect(robot.xPosition).toBe(2)
    expect(robot.yPosition).toBe(3)
    expect(robot.orientation).toBe('S')
    expect(robot.lost).toBe(false)
  })
})

function lostARobot (planet) {
  const positionLine = '3 2 N'
  const movementsLine = 'FRRFLLFFRRFLL'
  const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(positionLine)
  const movements = Validations.prepareRobotsMovement(movementsLine)
  const robot = new Robot(movements, planet)
  robot.setPosition(xPosition, yPosition, orientation)
  robot.move()
}
