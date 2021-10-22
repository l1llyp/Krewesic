
# Krewesic

# setup
[] env 

  root directory, create .env  file
   here put google clientID and clientSecret that you get for oauth2
 also you need session secret
 should be in this format: 
  NODE_ENV=<development or production>
  PORT=<choose your port>
  GOOGLE_CLIENT_SECRET=yourgoogleclientsecrethere
  GOOGLE_CLIENT_ID=yourgoogleclientid
  SESSION_SECRET='whateversecretwordyouwantforsessions'

[] db config
this app is designed to work with postgres
in db folder create a file called db.config.js.  you want your db configuration here:

module.exports = {
  HOST: "localhost",
  USER: {your postgres username here},
  PASSWORD: {your password here},
  DB: "krewesic",
  dialect: "postgres",

};

you will need to create your krewesic db in the postgres shell.

[] google maps api key
in the client/components/events create a file called keys.js. the contents of it should follow this format: 

const keys = {
  GOOGLE_MAPS_KEY: 'yourgooglemapsapikeyhere'
};

export default keys;

