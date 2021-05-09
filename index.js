const http = require('http')
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')
const payloadsProcess = require('./lib/payloads_process')

app.use(logger('dev', {
  stream: fs.createWriteStream('./logs/access.log', { flags: 'a' })
}))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Invalid json middleware error handler */
app.use(function (err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && ('body' in err)) {
    const responseBody = '{"error": "Could not decode request: JSON parsing failed"}'
    res.writeHead(400, {
      'Content-Length': Buffer.byteLength(responseBody),
      'Content-Type': 'application/json'
    })
    return res.end(responseBody)
  }
  next()
})

/* Home page */
app.get('/', function (req, res) {
  res.send('Welcome to WL json processing service!')
})

/* Post page handling json payloads filtering */
app.post('/', function (req, res) {
  const payloads = req.body.payload
  const filteredPayloads = payloadsProcess(payloads)
  const responseFilteredPayloads = { response: filteredPayloads }
  const responseBody = JSON.stringify(responseFilteredPayloads)
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(responseBody),
    'Content-Type': 'application/json'
  })
  res.end(responseBody)
})

module.exports = app

http.createServer(app).listen(80)
