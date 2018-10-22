const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8000
const app = express()

// Save the latest response of Filstack API
let filestackResponse = ''

// /Users/michaelmunier/wdi/projects/guidebox-back/app/api/db.json

// in-memory DB
const db = require('./app/api/db.json').videos

// Body Parse and accept json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

// Enable Cors for dev
app.use(cors())

// Static files
app.use(express.static(`${__dirname}/dist`))

// Log HTTP requests in the terminal
app.use(morgan('tiny'))

// videos API

app.route('/api/v1/videos')
  .get((req, res) => {
    res.json(db.reverse()) // Reverse order to show new
  })
  .post((req, res) => {
    const video = Object.assign({}, req.body, { id: db.length })
    db.push(video)
    res.json({ message: 'Successfully added!' })
  })
  // convert API to communicate with Filestack
app.route('/convert')
  .post((req, res) => {
    const { status, uuid, data: { url } } = req.body
    // Once the transcoding is completed show the video
    if (status && status === 'completed') {
      // status should be 'completed'
      db.forEach(video => {
        /* Search for the video to update the URL and make it visbible to users */
        if (video.uuid === uuid) {
          video.url = url // Update the url
          video.converted = true // Make video visbale to users
        }
      })
    }
    // Update the response
    filestackResponse = req.body
  })
  .get((req, res) => {
    // Shows Filestack latest response
    res.json({ response: filestackResponse })
  })
app.listen(port, () => console.log(`JSON Server is running on port ${port}!`))
