require('dotenv').config()

const db = require('./src/lib/db')
const server = require('./src/server.js')

console.log('env: ', process.env.DB_USER)

// const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('Base de datos conectada')
    server.listen(8080, () => {
      console.log('El servidor está escuchando correctamente')
    })
  })
  .catch((error) => {
    console.error('DB Error:', error)
  })
