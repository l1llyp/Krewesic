const {Router} = require('express');
const events = Router();
require('dotenv').config();
const axios = require('axios');
//const sampleData = require('./sampleData/sample.json');
//const citySample = require('./sampleData/citySample.json');
//const nolaweenSample = require('./sampleData/datesamplenolahalloweenwknd.json');

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
    const {date1, date2, city} = req.params;
  

    const {data} = await axios.get(`${baseUri}/events?client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}&datetime_local.gte=${date1}&datetime_local.lte=${date2}&venue.city=${city}`);

 
    const releventInfo = data.events.map(event => {
      const {datetime_local, type, performers, venue, id} = event;
      const lat = venue.location.lat;
      const lng = venue.location.lon;
      const sgId = 'sg-' + id.toString();
      return {datetime_local, type, performers, id, sgId, venue, lat, lng};
    });
    res.status(201).send(releventInfo);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

events.get('/interestedIn', async (req, res) => {
  try {
    //do a post

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//for requests that dont use the api call too much
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
      const {datetime_local, type, performers, venue, id} = event;
      const sgId = 'sg-' + id.toString();
      const lat = venue.location.lat;
      const lng = venue.location.lon;
      return {datetime_local, type, performers, id, venue, lat, lng, sgId};
    });
    res.status(201).json(releventInfo);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


module.exports = events;
