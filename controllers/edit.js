const bcrypt = require('bcrypt');
const User = require('../models/User')


exports.editProfileForm = async(req, res) => {
    try {
        console.log(req.query.id)
        const user = await User.findById(req.query.id)
        res.render('profile/edit', {user})
       
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }}

    exports.updateProfile = async (req, res) => {
      try {
        const { id, firstname, lastname, email, newPassword, confirmNewPassword } = req.body;
    
        if (newPassword && newPassword !== confirmNewPassword) {
          throw new Error("Passwords don't match");
        } else {
          const user = await User.findByIdAndUpdate(req.query.id, { password: bcrypt.hashSync(newPassword, 10) });
    
          console.log('Updated user: ', user);
        }
    
        res.redirect('/profile/view');
      } catch (error) {
        console.log(error.message);
        res.redirect(`/profile/edit?id=${req.query.id}`);
    }
   }


    exports.view_profile_get = async (req,res) => {
      try {
          const user = await User.find()
          console.log(user)
          res.render('profile/view', { user }) 
      } catch (error){
          res.send(error.message)
      }

  }

