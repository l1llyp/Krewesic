# Krewesic

# in config folder: create file called keys.js
# here put google clientID and clientSecret that you get for oauth2
# also you need session secret
# #should be in this format: 
  module.exports = {
    google: {
       clientId: 'your google client id here',
    clientSecret: 'your google client secret here
    }
   session: {
     cookieKie: 'whatever string for a cookie key you choose here'
   }
  }

  # .emv file
  NODE_ENV=<development or production>
  PORT=<choose your port>


# db config
#in db folder create a file called db.config.js.  you want your db configuration here:

module.exports = {
  HOST: "localhost",
  USER: <username>,
  PASSWORD: <password>,
  DB: "krewesic",
  dialect: "postgres",

};

