#!/usr/bin/env node
require('../utils/environment').loadEnvVars()
const app = require('../app')
const http = require('http')

const normalizePort = (val) => {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }

  return false
}

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
}

const port = normalizePort(process.env.API_PORT)
app.set('port', port)
app.disable('x-powered-by')

const server = http.createServer(app)
server.listen(process.env.API_PORT)
server.on('error', onError)
server.on('listening', onListening)
