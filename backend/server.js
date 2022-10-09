const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/erroMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))

