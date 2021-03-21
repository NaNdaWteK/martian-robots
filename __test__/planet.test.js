const Planet = require('../domain/Planet')

describe('Planet', () => {
  test('known its coordinates sizes', () => {
    const verticalSize = 3
    const horizontalSize = 5

    const planet = new Planet(horizontalSize, verticalSize)

    expect(planet.verticalSize).toBe(3)
    expect(planet.horizontalSize).toBe(5)
  })
  test('Planet knows where robots are lost', () => {
    const verticalSize = 3
    const horizontalSize = 5

    const planet = new Planet(horizontalSize, verticalSize)
    planet.lostRobot(3, 2)

    expect(planet.hasLostRobotScent(3, 2)).toBeTruthy()
    expect(planet.hasLostRobotScent(3, 3)).toBeFalsy()
  })
})
