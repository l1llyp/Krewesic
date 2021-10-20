const {Router} = require('express');
const events = Router();
require('dotenv').config();
const axios = require('axios');
const sampleData = require('./sample.json');

const fs = require('fs');


const baseUri = 'https://api.seatgeek.com/2/events?';

events.get('/search/:bandName', async (req, res) => {
  try {
    const {bandName} = req.params;
    console.log('bandname', bandName);
    // const bandName = 'new-york-mets'
    console.log('get event');
    //console.log('clientID!!!' , process.env.SEATGEEK_CLIENT_ID)

    const {data} = await axios.get(`${baseUri}client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}&performers.slug=${bandName}`);
    const jdata = JSON.stringify(data);

    // fs.writeFile('sample.txt', jdata, (err) => {
    //   console.log('err', err)
    // })
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

events.get('/sampleData', async(req, res) => {
  try {
    res.status(201).json(sampleData);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


module.exports = events;
