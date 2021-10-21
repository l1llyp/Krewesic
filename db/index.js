const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./db.config.js');
const pg = require('pg');
const {dbUser} = require('./models/users.js');

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

})

const Messages = db.define('Messages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: Sequelize.STRING
  }
})

User.hasMany(Messages);
Messages.belongsTo(User);

User.sync()
User = dbUser(db);


//sync the db
db.sync()
  .then(() => {
    console.log('db synced');
  })
  .catch((err) => console.error('err', err));

  Messages.sync()
  .then(() => {
    console.log('messages synced')
  })
  .catch((err) => console.error('err', err));

  module.exports = {
    db,
    User, Messages}
