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
      const { id, firstname,lastname, email,newPassword, confirmNewPassword } = req.body;
    
      if (newPassword && newPassword !== confirmNewPassword) {
        throw new Error("Passwords don't match");
        
      } else {
        await User.findByIdAndUpdate(req.query.id, req.body)
      }

      res.redirect('/');
    } catch (error) {
        console.log(error.message);
        res.redirect(`/profile/edit?id=${req.query.id}`);
    }
    };