const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    id:{type: Number, required: true},
    name: {type: String, required: true},
    state_id: {type: String, required: true}
})

const City = mongoose.model('City', citySchema)

module.exports = City;