const {Router} = require('express');
const auth = Router();
const passport = require('passport');


auth.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}) );

auth.get('/google/redirect', 
  passport.authenticate('google', {failureRedirect: '/login'}),
  (req, res, next) => {
    res.redirect('/') //redirect to the home/artist of day page
  }
)

module.exports = {auth};