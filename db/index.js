const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./db.config.js');
const pg = require('pg');
const {dbUser} = require('./models/users.js');
const { dbMessages } = require('./models/messages.js');
const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { 
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

//to use mysql, comment out hte previous db ^, and uncomment the below db.  

// const db = new Sequelize('krewesic', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });


User = dbUser(db);
Messages = dbMessages(db);

User.hasMany(Messages);
Messages.belongsTo(User);

//sync the db
db.sync()
  .then(() => {
    console.log('db synced');
  })
  .catch((err) => console.error('err', err));

module.exports = {
  db,
  User, Messages};
