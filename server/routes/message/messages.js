const express = require('express');
const Message = express.Router();
const {Messages} = require('../../../db/index.js');

Message.post('/sendMessage/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
try {

  Messages.create({ text: text});
  res.sendStatus(200);
} catch (err) {
 console.log(err);
 res.sendStatus(500);
}
})

module.exports = { Message };