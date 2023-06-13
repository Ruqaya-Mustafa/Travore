const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
        } ,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    mobile:{type: Number, required: true},
    from:{type: Date, required: true},
    to:{type: Date, required: true},
    isPackage: Boolean,
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country'    
        } ,
    // status: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Status'    
    //     }] ,
    // city: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City'    
    //     }] 
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking;

