const {Router} = require('express');
const events = Router();


events.get('/', async (req, res) => {
  try {
    console.log('get event');
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


module.exports = events;
