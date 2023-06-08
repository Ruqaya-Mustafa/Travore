const mongoose = require('mongoose')

const statusSchema = mongoose.Schema({
    id:{type: Number, required: true},
    name: {type: String, required: true},
    country_id:{type: String, required: true}
})



const Statuses = [
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



const Status = mongoose.model('Status', statusSchema)

module.exports = Statuses;
module.exports = Status;