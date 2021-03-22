const { loadEnvVars } = require('../../utils/environment')
loadEnvVars()
const request = require('supertest')
const app = require('../../app')
const SUCCESS = 200
const BAD_REQUEST=400

describe('Mars', () => {
  test('can be explored', async () => {
    const response = await request(app).get(`/${process.env.API_VERSION}/explore`)
      .set('X-Access-Token', 'secret')
    expect(response.statusCode).toBe(SUCCESS)
    expect(response.body.planet.lostRobots.length).toBe(1)
  })
  test('needs valid token to be explored', async () => {
    const response = await request(app).get(`/${process.env.RESTAPI_VERSION}/explore`)
      .set('X-Access-Token', 'secre')
    expect(response.statusCode).toBe(BAD_REQUEST)
  })
})
