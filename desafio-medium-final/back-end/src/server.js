
const express = require('express')

const cors = require('cors')

const postsRouter = require('./routes/posts')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/posts', postsRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'medium api v1.0'
  })
})

module.exports = app
