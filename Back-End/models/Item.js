const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    title : {
        type: String,
        requiered: true
    },
    price : {
        type: Number,
        requiered: true
    },
    country : {
        type: String,
        default: 'Indonesia'
    },
    city : {
        type: String,
        requiered: true
    },
    isPopular : {
        type: Boolean
    },
    description : {
        type: String,
        requiered: true
    },
    imageId : [{
        type: ObjectId,
        ref: 'Image'
    }],
     featureId : [{
        type: ObjectId,
        ref: 'Feature'
    }],
     activityId : [{
        type: ObjectId,
        ref: 'Activity'
    }]

})

module.exports = mongoose.model('Item', itemSchema)