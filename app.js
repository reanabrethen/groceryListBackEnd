const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const groceryListRouter = require('./groceryList/routes/groceryListRouter')


const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/groceryLists', groceryListRouter)

module.exports = app