const bcrypt = require('bcrypt')
const UserMod = require('../models/User')
const passport = require('../lib/passportConfig')

exports.auth_signup_get = (req,res) => {
    res.render('auth/signup')
}

exports.auth_signin_get = (req,res) => {
    res.render('auth/signin')
}

exports.auth_signup_post = async (req,res) => {
    try{
        console.log(req.body)      //remove this to increase the security
        const user = new UserMod(req.body)

        const hash = bcrypt.hashSync(req.body.password, 10)  //10 is number of hashes will be replaced in the password //the higher the number the logn it will take to dencrypt it 
        console.log(hash)

        user.password =hash

        await user.save()
        res.redirect('/')

    } catch(error){
        res.send(error.message)
    }
}



exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/signin'
})


exports.auth_logout_get = (req,res) => {
    req.logout(function(err) {
        if(err){
            return next()
        }
        else{
            res.redirect('/auth/signin')
        }
    })
}