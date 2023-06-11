const express = require('express');
const mongoose = require('mongoose')
const expressLayout = require('express-ejs-layouts')

const session = require('express-session')
const passport = require('./lib/passportConfig')

//Initialise our app (Invoking express and store it in app so we can use it easlly)
const app = express();

const port = 4500;

app.use(expressLayout)
app.set('view engine', 'ejs')           // set our view engine to ejs
app.use(express.static('public'))

app.use(express.urlencoded({          //below view engine and up mount
    extended: true
}))  
app.use(session({
    secret: 'This is a secret!',  
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}      
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(function(req,res, next){
    res.locals.currentUser = req.user
    next()           //move on to mount our routs
})






//import our Routes
const profileRoute = require('./routes/profile')           
const authRoute = require('./routes/auth')
const bookingRoute = require('./routes/booking')
const indexRoute = require('./routes/index')



 
//Mount our Routes
app.use('/', profileRoute)               
app.use('/', authRoute)               
app.use('/', bookingRoute)                 
app.use('/', indexRoute)               



app.listen(port, ()=>{
    console.log(`The port ${port} is running`)
})
mongoose.connect('mongodb+srv://travore:Travore06@cluster0.8ghu9kc.mongodb.net/travore',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
).then(() =>{
    console.log("MongoDB Is connected!")
}).catch((error) => {
    console.log("an error occurred",error)
})
