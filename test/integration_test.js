const fs = require('fs')
const supertest = require('supertest')
const app = require('../index')
const _ = require('lodash')
const { expect } = require('chai')
/* eslint-env node, mocha */

/* This is the integration test */
describe('POST /', function () {
  let requestData
  let responseData
  let invalidRequestData
  let invalidResponseData
  before(function () {
    requestData = fs.readFileSync('./data/request_data.json', 'utf8')

    responseData = fs.readFileSync('./data/response_data.json', 'utf8')

    invalidRequestData = '{a":"This is invalid request data"}'
    invalidResponseData = '{"error": "Could not decode request: JSON parsing failed"}'
  })

  it('when posting an example request need to return an example response', function (done) {
    supertest(app).post('/').set('Content-Type', 'application/json').send(requestData)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end(function (err, res) {
        if (err) return done(err)
        expect(_.isEqual(JSON.parse(res.text), JSON.parse(responseData))).to.equal(true)
        done()
      })
  })

  it('when posting an invalid JSON I should a JSON response with 400 status code', function (done) {
    supertest(app).post('/').set('Content-Type', 'application/json').send(invalidRequestData)
      .expect(400)
      .expect('Content-Type', /application\/json/)
      .end(function (err, res) {
        if (err) return done(err)
        expect(_.isEqual(JSON.parse(res.text), JSON.parse(invalidResponseData))).to.equal(true)
        done()
      })
  })
})
