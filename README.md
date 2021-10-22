# Krewesic
## purpose
A social media app that allows you to find like minded music lovers to attend concerts with.  Also allows local artists to post upcoming events, and host  live streams on the platform.
## features
-artist and listener profile pages
-a home page displaying artist of the day to bring attention to a variety of artists
-a map to display events in a local area for a range of dates
-a way to find other users who are interested in attending those events and easily provide a networking environment to connect
-a messaging service to communicate with other users
## tech stack
-NodeJS and Express for server side
-React for front end
-MaterialUI for styling
-Postgres for the database
-Sequelize for ORM
-axios for making api requests
-SeatGeek API for concert information
-AudioDB API for artist information
-Google OAuth2 for authentication
-Google Maps and Places API for google maps and places
# setup
This app was developed using node v14.17.5 and postgres 12.7
1. Clone down repo , change into the root directory for the project, and run npm install
2. Make sure postgres is installed on your computer.  Open postgres shell and create a database 'krewesic',  (CREATE DATABASE krewesic)
3. To use the database use \dt krewesic
4. Set up db.config -- see db.config below
5. Run npm run dev or npm run build to compile the webpack, depending if you are working in production or development mode
6. Set up environmental variables.  see the env section below for format
7. The Google_CLIENT_ID and GOOGLE_CLIENT_SECRET are the keys from OAuth 2 (https://console.cloud.google.com/apis/dashboard
).  SEATGEEK_CLIENT_ID and SEATGEEK_SECRET come from the seatgeek platform. (https://seatgeek.com/account/develop)
8. For the google maps api key, see instructions below in google maps api key
9. after all this set up, run npm start from the root directory and the app should be running from the designated PORT.
## env
  root directory, create .env  file
   here put google clientID and clientSecret that you get for oauth2
 also you need session secret
 should be in this format:
  NODE_ENV=<development or production>
  PORT=<choose your port>
  GOOGLE_CLIENT_SECRET=yourgoogleclientsecrethere
  GOOGLE_CLIENT_ID=yourgoogleclientid
  SESSION_SECRET='whateversecretwordyouwantforsessions'
  SEATGEEK_CLIENT_ID='your seat geek client id here'
  SEATGEEK_SECRET='your seatgeek secret here"
## db config
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
## google maps api key
in the client/components/events create a file called keys.js. the contents of it should follow this format:
const keys = {
  GOOGLE_MAPS_KEY: 'yourgooglemapsapikeyhere'
};

GOOGLE MAPS API:

https://console.cloud.google.com/apis/dashboard

SEATGEEK API:
https://seatgeek.com/?next=%2Faccount%2Fdevelop#login