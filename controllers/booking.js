const bookingMod = require('../models/booking')
const countryMod = require('../models/countries')
// const statusMod = require('../models/status')
// const cityMod = require('../models/cities')


exports.booking_add_get = async (req,res) => {     //Get booking model from the database

        try{
        const countries = await countryMod.find()     //store all the countries from the database to an variable to render it
        // const status = await statusMod.find()
        // const cities = await cityMod.find()
        console.log("countries", countries)

        // res.render('booking/add', {countries, status, cities})   //will be avilable after sorting the data in the database by letters
        res.render('booking/add', {countries})
        } catch(err){
            res.send(err.message)
        }
    }

exports.booking_add_post = (req,res) => {      // add new booking to the database by taking the body content of the form and save it
    console.log(req.body)           
    const booking = new bookingMod(req.body)
    // console.log(req.user)
    booking.user = req.user._id                         //save user id with the booking form 
    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/booking/all')              // after saving the data redirect to view all bookings page
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
}


exports.all_bookings_get = async (req,res) => {    //get all the booking from the database and display it in api booking/all
    try {
        const bookings = await bookingMod.find({user:req.user._id}).populate('country')   // {user:req.user._id} is for getting the data only related to that user
        console.log(bookings)
        res.render('booking/all', { bookings}) 
    } catch (error){
        res.send(error.message)
    }
}


exports.delete_booking_post = async (req,res) => {   // To Delete a booking from the database
    console.log(req.query.id)
    try {
    await bookingMod.findByIdAndDelete(req.query.id) //Find that booking with specific id and delete it 
    res.redirect('/booking/all')
    } catch(error) {
        res.send(error.message)
    }
}



exports.update_booking_get = async (req,res) => {   // To Update a booking from the database
    try{
        const booking = await bookingMod.findById(req.query.id).populate('country') //get that booking with specific id 
        const countries = await countryMod.find()                                  //upload the countries list again so the user can select another country 

        res.render('booking/update', {booking, countries})
    } catch(error){
        res.send(error.message)
    }
}



exports.update_booking_post = async (req,res) => {   //update a booking in a database
    try{
        console.log(req.body.id)
        await bookingMod.findByIdAndUpdate(req.body.id , req.body).populate('country')  //take all the body content that may been changed or not and replace it in the database instead of the previous data
        res.redirect('/booking/all')
    } catch(error){
        res.send(error.message)
    }
}
