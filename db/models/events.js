const {Sequelize} = require('sequelize');

const dbEvent = (sequelize) => {
  return sequelize.define('Event', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    artistId: {
      type: Sequelize.INTEGER,
      //foreign key pointing to artist or sgid
    },
    type: {
      type: Sequelize.STRING,
    }, 
    //etc
    

  });
};

module.exports = {dbEvent};