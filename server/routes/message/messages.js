const express = require('express');
const { async } = require('regenerator-runtime');
const Message = express.Router();
const {User, Messages} = require('../../../db/index.js');

Message.post('/sendMessage', async (req, res) => {
  const { id } = req.user; //
  const { text } = req.body;
  try {

    Messages.create({ text: text, UserId: id});
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//get all messages from current user
Message.get('/sendMessage', async (req, res) => {
  const {id} = req.user;
  try {
    const messages = await Messages.findAll({where: { UserId: id }, include: [{model: User }]});
    res.status(200).send(messages);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);

  }
});

module.exports = { Message };