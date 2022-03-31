//packages
const express = require('express')

//routes
const usersRouter = require('./routes/usersRouter')
const ordersRouter = require('./routes/ordersRouter')

//middlewares
const myLogger = require('./middlewares/myLogger')

//config
const app = express()

//using middlewares
app.use(express.json())

app.use('/users', myLogger, usersRouter)
app.use('/orders', ordersRouter)

app.listen(8000)
