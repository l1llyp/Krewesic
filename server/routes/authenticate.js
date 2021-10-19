const {Router} = require('express');
const auth = Router();
const passport = require('passport');


auth.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}) );



//callback redirect for google
auth.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/drunk/');
  //res.redirect(`/${req.user.username}`);
})

//auth logout
auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = auth;