const {Sequelize} = require('sequelize');
const { User, SGEvent } = require('..');

//the event will end up in the db when a user interacts wth it-- comments on it or likes it
const dbSGEventComment = (sequelize) => {
  return sequelize.define('SGEvent', {
 
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      unique: true

    },
    type: {
      type: Sequelize.STRING,
    }, 
    text: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
      //foreign key to user id
    },
    sgEventId: {
      type: Sequelize.INTEGER,
      references: {
        model: SGEvent,
        key: 'id'
      }
      //foreing key points to the id in sg event
    }
    

  });
};

module.exports = {dbSGEventComment};