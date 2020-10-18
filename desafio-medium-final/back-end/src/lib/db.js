const mongoose = require('mongoose')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

// protocolo://user:password@host/dbName
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

console.log('url', url)

function connect () { // ---> nos va a regresar la promesa de conexión a la BD
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
}

// con esto exportamos lo que queremos que otros archivos usen.
// En este caso, queremos que la función connect sea usada por otro archivo
module.exports = {
  connect
}
