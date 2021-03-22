const { loadEnvVars } = require('./utils/environment')
loadEnvVars()
const express = require('express')
const Actions = require('./actions')
const SUCCESS = 200
const BAD_REQUEST = 400

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get(`/${process.env.API_VERSION}/explore`, async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (token !== process.env.API_TOKEN) {
      throw new Error('You have not access to request')
    }
    const response = await Actions.explore.invoke()
    res.status(SUCCESS).send(response)
  } catch (error) {
    next(error)
  }
  next()
})

app.use((err, req, res, next) => {
  res.status(BAD_REQUEST).send(err)
  next()
})

module.exports = app
