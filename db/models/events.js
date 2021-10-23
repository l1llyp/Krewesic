const {Sequelize} = require('sequelize');

const dbEvent = (sequelize) => {
  return sequelize.define('Event', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sgId: {
      type: Sequelize.INTEGER,
      //foreign key pointing to seatgeek id
    },
    type: {
      type: Sequelize.STRING,
    }, 
    //etc
  
    
  });
};

module.exports = {dbEvent};