const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db')

const app = express()

// Connect to database
connectDb()

// Initilize middlewares
app.use(cors())
app.use(express.json())

// Define routes
app.use('/api/flight-data',require('./routes/flightData'))



app.listen(5000, console.log('Listening on port 5000.'))