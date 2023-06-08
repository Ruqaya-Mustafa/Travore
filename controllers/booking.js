const bookingMod = require('../models/booking')
const countryMod = require('../models/countries')
const statusMod = require('../models/status')
const cityMod = require('../models/cities')


function country(req,res){
    
}

exports.booking_add_get = async (req,res) => {
    try{
        const bookings = await bookingMod.find()
        res.render('booking/add', {bookings})
    } catch(err){
            res.send(err.message)
        }
}

exports.booking_add_post = (req,res) => {
    console.log(req.body)           
    const booking = new bookingMod(req.body)

    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
}