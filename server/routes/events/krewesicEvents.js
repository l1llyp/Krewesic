const {Router} = require('express');
const kEvents = Router();
require('dotenv').config();

kEvents.get('/krewesicevents', async(req, res) => {
  try {
//retrieve the events of krewesic users
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

module.exports = kEvents;