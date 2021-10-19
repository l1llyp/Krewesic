const {Router} = require('express');
const auth = Router();
const passport = require('passport');
const rimraf = require('rimraf');


auth.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}) );



//callback redirect for google
auth.get('/google/redirect', passport.authenticate('google'), (req, res) => {
 // console.log(req.user)
  //if the type is null: this redirects to the form
  if(req.user.type !== null) { // //if the type is not null: redirect to the artistOfDay page
    res.redirect('/profile')
  }
  else {
    res.redirect('/form')
  }
 

  
  
})

//auth logout
auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = auth;