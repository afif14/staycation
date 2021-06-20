const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    nameBank: {
        type: String,
        required: true
    },
    nomorRekening: {
        type: String,
        required: true
    },
    name : {
        type: String,
        requiered: true
    },
    imageUrl : {
        type: String,
        requiered: true
    }
})

module.exports = mongoose.model('Bank', bankSchema);