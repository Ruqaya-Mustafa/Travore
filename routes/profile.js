// routes/profile.js

const express = require('express');
const router = express.Router();
const isLoggedIn = require('../lib/isLoggedIn')
const profileController = require('../controllers/edit');

// Route to display the profile edit form
router.get('/profile/edit',isLoggedIn, profileController.editProfileForm);

// Route to handle profile updates
router.post('/profile/edit',isLoggedIn , profileController.updateProfile);

module.exports = router;

