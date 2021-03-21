const assert = require('assert')
const path = require('path')

const checkEnvVars = () => {
  try {
    assert.ok(process.env.NODE_ENV)
    assert.ok(process.env.MONGO_URI)
  } catch (err) {
    throw new Error(`Set the Environment Variables needed!\n${err}`)
  }
}

const loadEnvVars = () => {
  if (process.env.NODE_ENV === 'testing') {
    require('dotenv').config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}.testing`) })
  } else {
    require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })
  }

  checkEnvVars()
}

module.exports = {
  checkEnvVars,
  loadEnvVars
}
