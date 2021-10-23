const Sequelize = require('sequelize');


const dbRooms = (sequelize, 
) => {

  
  return sequelize.define('Rooms', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      defaultValue: 'Music Chat Room'
    }
  });
};


module.exports = { dbRooms };