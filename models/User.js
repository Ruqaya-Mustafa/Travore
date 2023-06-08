const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = mongoose.Schema({
    firstName: {
                type:String,
                required: true,
                minlength: [2, 'Name must be 2 or more characters'],
                maxlength: [60, 'Name cannot be more than 60 characters']
                },
    lastName: {
                type:String,
                required: true,
                minlength: [2, 'Name must be 2 or more characters'],
                maxlength: [60, 'Name cannot be more than 60 characters']
                },
    email: {
        type: String,
        required: true,
        lowercase: true,     //user have to enter lower case email
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true        //as second argument : do add (create and update) in our mongoDB
})

userSchema.methods.verifyPassword = function(password){
    console.log('verifying Password: ', password)
    return bcrypt.compareSync(password, this.password)   // boolean return when compare two hash passwords 
}

const User = mongoose.model('User', userSchema)

module.exports = User

