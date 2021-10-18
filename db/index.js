const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config.js')
 
const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { //????
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
})

User.sync() 
  .then(() => {
    console.log('user synced')
  })
  .catch((err) => console.error('err', err));

  module.exports = {User}
