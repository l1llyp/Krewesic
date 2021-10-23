const express = require('express');
const { async } = require('regenerator-runtime');
const Users = express.Router();
const {User, Messages} = require('../../../db/index.js');


Users.get('/users/:user', async (req, res) => {
  const {user} = req.params;
  try {
    const users = await User.findAll({where: {name: user}});
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);

  }
});

module.exports = { Users };