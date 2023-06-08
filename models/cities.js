const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    id:{type: Number, required: true},
    name: {type: String, required: true},
    state_id: {type: String, required: true}
})

const cities =  [{
    "id": "1",
    "name": "Bombuflat",
    "state_id": "1"
  },
  {
    "id": "2",
    "name": "Garacharma",
    "state_id": "1"
  },
  {
    "id": "3",
    "name": "Port Blair",
    "state_id": "1"
  },
  {
    "id": "4",
    "name": "Rangat",
    "state_id": "1"
  },
  {
    "id": "5",
    "name": "Addanki",
    "state_id": "2"
  },
  {
    "id": "6",
    "name": "Adivivaram",
    "state_id": "2"
  },
  {
    "id": "7",
    "name": "Adoni",
    "state_id": "2"
  },
  {
    "id": "8",
    "name": "Aganampudi",
    "state_id": "2"
  },
  {
    "id": "9",
    "name": "Ajjaram",
    "state_id": "2"
  },
  {
    "id": "10",
    "name": "Akividu",
    "state_id": "2"
  }]


const City = mongoose.model('City', citySchema)

module.exports = cities;
module.exports = City;