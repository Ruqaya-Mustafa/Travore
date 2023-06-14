const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

// Call our API
router.get('/', indexController.index_get)
router.get('/about/about', indexController.packages_get)
router.get('/about/japan', indexController.japan_get)
router.get('/about/russia', indexController.russia_get)
router.get('/about/indonesia', indexController.indonesia_get)
router.get('/about/turkey', indexController.turkey_get)

module.exports = router 