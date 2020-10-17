// CADA QUE CREAMOS UN ENDPOINT NUEVO, EL PROCESO DEBE SER:
// 1. Asegurarnos de tener un modelo (acceso a datos)
// 2. Si no existe, lo creamos
// 3. Crear el(los) usecase(s) necesarios para esa acción
// 4. Crear el endpoint y conectarlo al (o a los) caso(s) de uso correspondiente

const express = require('express')

const postsRouter = require('./routes/posts')

const app = express()

app.use('/posts', postsRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'medium api v1.0'
  })
})

module.exports = app
