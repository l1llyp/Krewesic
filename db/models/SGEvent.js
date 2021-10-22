const {Sequelize} = require('sequelize');

//the event will end up in the db when a user interacts wth it-- comments on it or likes it
const dbSGEvent = (sequelize) => {
  return sequelize.define('SGEvent', {
 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
      // pointing to seatgeek id
    },
    type: {
      type: Sequelize.STRING,
    }, 
    performers: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    when: {
      type: Sequelize.DATE
    },
    venue: {
      type: Sequelize.STRING
    },
    lat: {
      type: Sequelize.FLOAT,
      
    },
    lng: {
      type: Sequelize.FLOAT
    }

    

  });
};

module.exports = {dbSGEvent};