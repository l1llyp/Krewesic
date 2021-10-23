const {Sequelize} = require('sequelize');

//the event will end up in the db when a user interacts wth it-- comments on it or likes it
const dbSGEvent = (sequelize) => {
  return sequelize.define('SGEvent', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
     
    },
  
    type: {
      type: Sequelize.STRING,
    }, 
    performers: {
      type: Sequelize.STRING,
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
    }, 
    city: {
      type: Sequelize.STRING
    }

    

  });
};

module.exports = {dbSGEvent};