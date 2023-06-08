const express=require('express')
const router = express.Router()

const bookingCtrl = require('../controllers/booking')
// const isLoggedIn=require('../lib/isLoggedIn')


router.get('/booking/add',bookingCtrl.booking_add_get)
router.post('/booking/add',bookingCtrl.booking_add_post)


module.exports=router;