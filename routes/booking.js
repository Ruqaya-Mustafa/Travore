const express=require('express')
const router = express.Router()

const bookingCtrl = require('../controllers/booking')
const isLoggedIn=require('../lib/isLoggedIn')


router.get('/booking/add', isLoggedIn,bookingCtrl.booking_add_get)
router.post('/booking/add', isLoggedIn, bookingCtrl.booking_add_post)
router.get('/booking/all', isLoggedIn, bookingCtrl.all_bookings_get)
router.post('/booking/delete', isLoggedIn, bookingCtrl.delete_booking_post)
router.get('/booking/update', isLoggedIn, bookingCtrl.update_booking_get)
router.post('/booking/update', isLoggedIn, bookingCtrl.update_booking_post)


module.exports=router;