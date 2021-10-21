const express = require('express');
const app = express()
const path = require('path')
require('dotenv').config()
const {PORT} = process.env
const http = require('http');
const frontEnd = path.resolve(__dirname, '..', 'client', 'dist')
const session = require('express-session');
const passport = require('passport');

const passportSetup = require('../config/passport-setup');
const {User} = require('../db')
const auth = require('./routes/authenticate')
const {form} = require('./routes/form.js')
const {Message} = require('./routes/message/messages.js');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


//create the server
const server = http.createServer(app);

app.use(express.static(frontEnd))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}));


app.use(session({
  secret: 'string',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth)
app.use('/form', form)
app.use('/messages', Message);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(frontEnd, 'index.html'));

});

server.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
})