
const bookingMod = require('../models/booking')



exports.packages_japan_get = async (req,res) => {
    try{
        res.render('packages/japan')
        } catch(err){
            res.send(err.message)
        }
}

exports.packages_japan_post = (req,res) => {
    console.log(req.body)           
    const booking = new bookingMod(req.body)
    
    booking.user = req.user._id          
    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/booking/all')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
}







exports.packages_russia_get = async (req,res) => {
    try{
        res.render('packages/russia')
        } catch(err){
            res.send(err.message)
        }
}

exports.packages_russia_post = (req,res) => {
    console.log(req.body)           
    const booking = new bookingMod(req.body)
    
    booking.user = req.user._id          
    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/booking/all')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
}







exports.packages_turkey_get = async (req,res) => {
    try{
        res.render('packages/turkey')
        } catch(err){
            res.send(err.message)
        }
}

exports.packages_turkey_post = (req,res) => {
    console.log(req.body)           
    const booking = new bookingMod(req.body)
    
    booking.user = req.user._id          
    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/booking/all')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
}

exports.packages_indonesia_get = async (req,res) => {
    try{
        res.render('packages/indonesia')
        } catch(err){
            res.send(err.message)
        }
}

exports.packages_indonesia_post = (req,res) => {
    console.log(req.body)           
    const booking = new bookingMod(req.body)
    
    booking.user = req.user._id          
    booking.save()
        .then(() => {   
            console.log('Your booking has been saved !!')
            res.redirect('/booking/all')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
    }

exports.update_packages_get = async (req,res) => {
    try{
        const booking = await bookingMod.findById(req.query.id)
        // const countries = await countryMod.find()

        res.render('packages/update', {booking})
    } catch(error){
        res.send(error.message)
    }
}



exports.update_packages_post = async (req,res) => {
    try{
        console.log(req.body.id)
        await bookingMod.findByIdAndUpdate(req.body.id , req.body)
        res.redirect('/booking/all')
    } catch(error){
        res.send(error.message)
    }
}