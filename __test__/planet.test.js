const Planet = require('../domain/Planet')
const Scent = require('../domain/Scent')

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
    const scent = new Scent(planet)

    expect(scent.hasLostRobotScent(3, 2)).toBeTruthy()
    expect(scent.hasLostRobotScent(3, 3)).toBeFalsy()
  })
})
