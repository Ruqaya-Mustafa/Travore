const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    id:{type: Number, required: true},
    name: {type: String, required: true},
    country_id:{type: String, required: true}
})


const Status = mongoose.model('Status', statusSchema)

module.exports = Status;