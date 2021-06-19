const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    name : {
        type: String,
        requiered: true
    },
    type: {
        type: String,
        requiered: true
    },
    imageUrl : {
        type: String,
        requiered: true
    },
    isPopular : {
        type: Boolean
    }
})

module.exports = mongoose.model('Activity', activitySchema)