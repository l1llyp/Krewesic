const {Sequelize} = require('sequelize');

const dbUser = (sequelize, DataTypes) => {
  return sequelize.define('User', {
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
    },
    bio: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    favArtist: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    favGenre: {
      type: Sequelize.STRING,
      defaultValue: null
    },
  });
};

module.exports = {dbUser};