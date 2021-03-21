const fs = require('fs')

const splitInputIntoLines = (filePath) => {
  return fs.readFileSync(filePath).toString().split('\n')
}

module.exports = splitInputIntoLines
