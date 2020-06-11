const mongoose = require('mongoose')

const FlightDataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    flight_no: {
        type: String,
        required: true
    },
    flight_from: {
        type: String,
        required: true
    },
    flight_to: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    delayed: {
        type: Boolean,
        required: true
    },
    delayedBy: {
        type: String,
    }
}) 

module.exports = mongoose.model('flightData', FlightDataSchema)