require('dotenv').config()

const db = require('./src/lib/db')

const server = require('./src/server')

console.log('env: ', process.env.DB_USER)

const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('DB connected')
    server.listen(PORT, () => {
      console.log(`server running on ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('DB Error:', error)
  })
