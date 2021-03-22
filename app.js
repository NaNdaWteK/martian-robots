const { loadEnvVars } = require('./utils/environment')
const path = require('path')
const util = require('util')
loadEnvVars()

const inputPath = path.join(__dirname, './utils/input.txt')
const MarsService = require('./services/mars/MarsService')

MarsService.explore(inputPath)
  .then(result => {
    console.log(util.inspect(result, { showHidden: false, depth: null, colors: true }))
    return result
  })
  .catch(error => {
    console.log(error)
  })
