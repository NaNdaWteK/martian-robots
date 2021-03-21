const Planet = require('../domain/Planet')
const Scent = require('../domain/Scent')

describe('Scent', () => {
  test('known if robot wants to be out on y planet axis', () => {
    const verticalSize = 3
    const horizontalSize = 5

    const planet = new Planet(horizontalSize, verticalSize)
    planet.lostRobot(3, 2)
    const scent = new Scent(planet)
    expect(scent.wantToBeOutOnPlanetYAxis(4)).toBe(true)
    expect(scent.wantToBeOutOnPlanetYAxis(0)).toBe(true)
  })
})
