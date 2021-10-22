const {Router} = require('express');
const events = Router();
require('dotenv').config();
const axios = require('axios');
const sampleData = require('./sampleData/sample.json');
const citySample = require('./sampleData/citySample.json');
const nolaweenSample = require('./sampleData/datesamplenolahalloweenwknd.json');

const fs = require('fs');


const baseUri = 'https://api.seatgeek.com/2';

events.get('/bandSearch/:bandName', async (req, res) => {
  try {
    const {bandName} = req.params;
    console.log('bandname', bandName);
  
    console.log('get event');
    //console.log('clientID!!!' , process.env.SEATGEEK_CLIENT_ID)

    const {data} = await axios.get(`${baseUri}/events?client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}&performers.slug=${bandName}`);
    //const jdata = JSON.stringify(data);
    // console.log(data)

    // fs.writeFile('sample.txt', jdata, (err) => {
    //   console.log('err', err)
    // })
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

events.get('/citySearch/:city', async(req, res) => {
  try {
    
    //const {city} = req.params;
  

    const {data} = await axios.get(`${baseUri}/venues?client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}&city=${city}`);

    // //to create sample data
    // const jdata = JSON.stringify(data);
    // await fs.writeFile('citySample.txt', jdata, (err) => {
    //   console.log('err', err);
    // });

    res.status(200).send(data);



  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


events.get('/dateSearch/:date1/:date2/:city', async (req, res) => {
  try {
    //const {date1, date2, city} = req.params;
    //hardcoded for testing
    const date1 = '2021-10-29';
    const date2 = '2021-10-31';
    const city = 'New Orleans';
    
    
    console.log('get datetime');


    const {data} = await axios.get(`${baseUri}/events?client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}&datetime_local.gte=${date1}&datetime_local.lte=${date2}&venue.city=${city}`);

    //const localEvents = data.events.filter(event => event.venue.state === 'LA')
    const jdata = JSON.stringify(data);

    await fs.writeFile('datesamplenolahalloweenwknd.txt', jdata, (err) => {
      console.log('err', err);
    });

    console.log('data', data);
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

events.get('/sampleCity', async(req, res) => {
  try {
    console.log(citySample.venues[0]);

    res.status(201).json(citySample);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

events.get('/sampleLocalWeekend', async(req, res) => {
  try {

    // console.log(nolaweenSample.events)
    const releventInfo = nolaweenSample.events.map(event => {
      const {datetime_local, type, performers, venue} = event;
      return {datetime_local, type, performers, venue};
    });
    res.status(201).json(releventInfo);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


module.exports = events;
