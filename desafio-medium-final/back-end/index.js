require('dotenv').config()

const db = require('./src/lib/db')
const server = require('./src/server.js')

console.log('env: ', process.env.DB_USER)

// const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('DB connected')
    server.listen(8080, () => {
      console.log('server running')
    })
  })
  .catch((error) => {
    console.error('DB Error:', error)
  })