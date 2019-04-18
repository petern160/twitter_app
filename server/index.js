'use strict'

// Basic express setup:

const PORT = 8080
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
const MongoClient = require('mongodb').MongoClient
const MONGODB_URI = 'mongodb://localhost:27017/tweeter'

// connects us to mongodb and passes in db to all of our helper functions
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`)
    throw err
  } else {
    console.log(`Connected to mongodb: ${MONGODB_URI}`)
  }

  const DataHelpers = require('./lib/data-helpers.js')(db)

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = require('./routes/tweets')(DataHelpers)

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use('/tweets', tweetsRoutes)

  app.get('/test', (req, res) => {
    res.send('test')
  })

  // post request for tweets gets twweets from form
  app.post('/tweets', (req, res) => {

  })

  // db.close()
})

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT)
})
