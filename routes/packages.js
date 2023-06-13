const express=require('express')
const router = express.Router()

const packagesCtrl = require('../controllers/packages')
const isLoggedIn=require('../lib/isLoggedIn')


router.get('/packages/japan', isLoggedIn, packagesCtrl.packages_japan_get)
router.post('/packages/japan', isLoggedIn, packagesCtrl.packages_japan_post)

router.get('/packages/russia', isLoggedIn, packagesCtrl.packages_russia_get)
router.post('/packages/russia', isLoggedIn, packagesCtrl.packages_russia_post)

router.get('/packages/turkey', isLoggedIn, packagesCtrl.packages_turkey_get)
router.post('/packages/turkey', isLoggedIn, packagesCtrl.packages_turkey_post)

router.get('/packages/indonesia', isLoggedIn, packagesCtrl.packages_indonesia_get)
router.post('/packages/indonesia', isLoggedIn, packagesCtrl.packages_indonesia_post)

router.get('/packages/update', isLoggedIn, packagesCtrl.update_packages_get)
router.post('/packages/update', isLoggedIn, packagesCtrl.update_packages_post)

module.exports=router;