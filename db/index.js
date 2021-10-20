const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config.js');
const pg = require('pg');

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { 
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

//to use mysql, comment out hte previous db ^, and uncomment the below db.  

// const db = new Sequelize('krewesic', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });


const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: null
  }

});

User.sync()
  .then(() => {
    console.log('user synced');
  })
  .catch((err) => console.error('err', err));

module.exports = {
  db,
  User};
