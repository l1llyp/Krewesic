const express = require('express');
const app = express()
const path = require('path')
const PORT = 1337
const http = require('http');
const frontEnd = path.resolve(__dirname, '..', 'client', 'dist')
const session = require('express-session');
const passport = require('passport');
require('./routes/authenticate');
const passportSetup = require('../config/passport-setup');
const {User} = require('../db')
const auth = require('./routes/authenticate')

//create the server
const server = http.createServer(app);

app.use(express.static(frontEnd))
app.use(express.json())

app.use(session({
  secret: 'string',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth)


app.get('*', (req, res) => {
  res.sendFile(path.resolve(frontEnd, 'index.html'));

});

server.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
})