const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  id:{type: Number, required: true},
  sortname: {type: String, required: true},
  name: {type: String, required: true}
})


const Countries = [
  {
    "id": "1",
    "sortname": "AF",
    "name": "Afghanistan"
  },
  {
    "id": "2",
    "sortname": "AL",
    "name": "Albania"
  },
  {
    "id": "3",
    "sortname": "DZ",
    "name": "Algeria"
  },
  {
    "id": "4",
    "sortname": "AS",
    "name": "American Samoa"
  },
  {
    "id": "5",
    "sortname": "AD",
    "name": "Andorra"
  },
  {
    "id": "6",
    "sortname": "AO",
    "name": "Angola"
  },
  {
    "id": "7",
    "sortname": "AI",
    "name": "Anguilla"
  },
  {
    "id": "8",
    "sortname": "AQ",
    "name": "Antarctica"
  },
  {
    "id": "9",
    "sortname": "AG",
    "name": "Antigua And Barbuda"
  },
  {
    "id": "10",
    "sortname": "AR",
    "name": "Argentina"
  }
]


const Country = mongoose.model('Country', countrySchema)

module.exports = Countries;
module.exports = Country;