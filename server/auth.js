// const passport = require ('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// //serialize

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });



// //deserialize
// passport.deserializeUser((id, done) => {
//   User.findOne({
//     where: {
//       id: id
//     }
//   })
//     .then((user) => { //id
//       // if (id) {
//       done(null, user); //id
//       // }
//     }).catch((err) => {
//       console.log('Error deserial:', err);
//     });
// });

// //google strategy

// passport.use(new GoogleStrategy({
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: '/auth/google/redirect'
// }, (accessToken, refreshToken, profile, done) => {
//   const {name, picture, email} = profile._json;

//   User.findOne({
//     where: {
//       email: email
//     }
//   }).then( (user) => { // user already exists---- redirect follows this.
//     if(user) {
//       return done(null, user);
//     } else {
//       User.create(profile._json)
//         .then(newUser => {
//           return done(null, newUser); //this will be a different redirect becasue needs to go to the form?  figure out how to do this

//         })
//         .catch((err) => {
//           console.log('auth err', err);
//         })
//     }
//   })
//   .catch( (err) => {
//     console.log('auth err', err);
//   })
// }
// ))