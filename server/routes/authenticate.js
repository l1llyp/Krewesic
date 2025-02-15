const {Router} = require('express');
const auth = Router();
const passport = require('passport');



auth.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}) );



//callback redirect for google
auth.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // console.log(req.user.name);
  res.cookie('user', req.user.name);
  // console.log(req.headers.cookie);
  //if the type is null: this redirects to the form
  if (req.user.type !== null) { // //if the type is not null: redirect to the artistOfDay page
    res.redirect('/artistofday');
  } else {
    res.redirect('/form');
  }
 

  
  
});

//auth logout
auth.get('/logout', (req, res) => {
  console.log('logout');
  res.clearCookie('user');
  req.logout();
  res.redirect('/');
});

//get request to get the cookie and user's name
auth.get('/cookie', (req, res) => {
  const arr = req.headers.cookie.split('; ');
  
  let user = null;
  for (let i = 0; i < arr.length; i++) {
    const cookie = arr[i].split('=');
    if (cookie[0] === 'user') {
      user = cookie[1];
    } 
  }
  res.json(user);
});
module.exports = auth;
