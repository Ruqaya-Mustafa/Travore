const bookingMod = require('../models/booking')
const User = require('../models/User')
const countryMod = require('../models/countries')
// const statusMod = require('../models/status')
// const cityMod = require('../models/cities')


exports.booking_add_get = async (req,res) => {

        try{
        const countries = await countryMod.find()
        // const status = await statusMod.find()
        // const cities = await cityMod.find()

        // res.render('booking/add', {countries, status, cities})
        res.render('booking/add', {countries})
        } catch(err){
            res.send(err.message)
        }
    }

exports.booking_add_post = (req,res) => {
    console.log(req.body)           
    const booking = new bookingMod(req.body)
    // console.log(req.user)
    booking.user = req.user._id                         //save user id with the booking form 
    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/booking/all')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
}


exports.all_bookings_get = async (req,res) => {
    try {
        const bookings = await bookingMod.find().populate('country')
        console.log(bookings)
        res.render('booking/all', { bookings}) 
    } catch (error){
        res.send(error.message)
    }
}


exports.delete_booking_post = async (req,res) => {
    console.log(req.query.id)
    try {
    await bookingMod.findByIdAndDelete(req.query.id)
    res.redirect('/booking/all')
    } catch(error) {
        res.send(error.message)
    }
}



exports.update_booking_get = async (req,res) => {
    try{
        const booking = await bookingMod.findById(req.query.id).populate('country') 
        const countries = await countryMod.find()

        res.render('booking/update', {booking, countries})
    } catch(error){
        res.send(error.message)
    }
}



exports.update_booking_post = async (req,res) => {
    try{
        console.log(req.body.id)
        await bookingMod.findByIdAndUpdate(req.body.id , req.body).populate('country')
        res.redirect('/booking/all')
    } catch(error){
        res.send(error.message)
    }
}
