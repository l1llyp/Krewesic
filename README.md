# Krewesic



  # .env 
 #  here put google clientID and clientSecret that you get for oauth2
# also you need session secret
# #should be in this format: 
  NODE_ENV=<development or production>
  PORT=<choose your port>
  GOOGLE_CLIENT_SECRET=yourgoogleclientsecrethere
  GOOGLE_CLIENT_ID=yourgoogleclientid
  SESSION_SECRET='whateversecretwordyouwantforsessions'




# db config
#in db folder create a file called db.config.js.  you want your db configuration here:

module.exports = {
  HOST: "localhost",
  USER: <username>,
  PASSWORD: <password>,
  DB: "krewesic",
  dialect: "postgres",

};

