const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        requiered: true
    }
})

module.exports = mongoose.model('Category', categorySchema)