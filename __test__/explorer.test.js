const path = require('path')
const inputPath = path.join(__dirname, './testSupport/input.txt')
const InputTxtReader = require('../domain/InputTxtReader')
const Explorer = require('../domain/Explorer')

describe('Explorer', () => {
  test('can explore planet with robots', () => {
    const inputTxtReader = new InputTxtReader(inputPath)

    const explorer = new Explorer(inputTxtReader)

    expect(explorer.planet.horizontalSize).toBe(3)
    expect(explorer.planet.verticalSize).toBe(5)
    expect(explorer.robots.length).toBe(3)
  })
})
