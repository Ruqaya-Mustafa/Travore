const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  id:{type: Number, required: true},
  sortname: {type: String, required: true},
  name: {type: String, required: true}
})



const Country = mongoose.model('Country', countrySchema)

module.exports = Country;