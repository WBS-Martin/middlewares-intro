const express = require('express')
const myLogger = require('../middlewares/myLogger')
const getAllUsers = require('../controllers/usersController')
const router = express.Router()

router.use(myLogger)

router.get('/', getAllUsers)

router.get('/:id', (req, res) => {
  res.send(`Hello User ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Hello from POST')
})

module.exports = router
