const mongoose = require("mongoose")

const featureSchema = new mongoose.Schema({
    name : {
        type: String,
        requiered: true
    },
    qty: {
        type: Number,
        requiered: true
    },
    imageUrl : {
        type: String,
        requiered: true
    }
})

module.exports = mongoose.model('Feature', featureSchema)