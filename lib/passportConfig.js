const passport = require('passport')

const localStrategy = require('passport-local').Strategy
const User = require('../models/User')


//save the ID into the session
passport.serializeUser(function(user,done){
    console.log("user,", user)
    done(null, user.id)
})

passport.deserializeUser(async function(id, done){
    try{
        const user = await User.findById(id)
    console.log("user,", user)

        done(null, user)
    } catch(error){
        console.log(error)
    }
})

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async function(email,password, done){
        try{

            const user= await User.findOne({email})
            console.log("user", user)
            if (!user){return done(null,false)}
            if(!user.verifyPassword(password)){return done(null, false)}
            return done(null, user)
        } catch(error){
            return done(error)
        }
    }
))

module.exports = passport;