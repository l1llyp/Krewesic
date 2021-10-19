const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./keys');
const User = require('../db');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
})

passport.use(
  new GoogleStrategy({
    //options for google strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    //passport cb
    //check if user already exists
    User.findOne({ where: { email: email } })
      .then(currentUser => {
        if (currentUser) {
          //user already exists
          done(null, currentUser);
        } else {
          console.log(profile, 'PROFILE!!!!!')
          //user doesn't exist, create new user
          User.create({
            username: profile.displayName,
            email: profile.email,
            picture: profile.picture,
          })
          .then(newUser => {
            done(null, newUser);
          })
        }
      })
  })
);