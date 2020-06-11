const express = require('express')
const router = express.Router()
const FlightData = require('../models/FlightData')

router.get('/', async (req, res) => {
    try {
        const data = await FlightData.find()
        res.send(data)
    } catch (e) {
        console.error(e.message)
    }
  
})

module.exports = router