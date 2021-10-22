import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core/';
import axios from 'axios';
import Map from './Map.jsx';
//for date picker
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DateTime} from 'luxon';
import { MobileDatePicker, DesktopDatePicker, DatePicker } from '@material-ui/pickers';

//import './sample.json';


const MapEvents = () => {
  
  const [bandName, setBandName] = useState('');
  const [city, setCity] = useState('');
  const [events, setEvents] = useState([]);
  //const [value, setValue] = useState(DateTime.now)
  const [date1, setDate1] = useState('2021-10-29');
  const [date2, setDate2] = useState('2021-10-31');

  const searchBand = async() => {
    console.log('click search');
    //send bandName to the back end
    const {data} = await axios.get(`/events/bandSearch/${bandName}`);

    //right now hard coded to receive sample data so not use api key too much
    // const {data} = await axios.get('/events/sampleData');
    console.log(data);

    //clear the input text
  };

  const searchCity = async() => {
    console.log('search city');

    //const {data} = await axios.get(`/events/citySearch/`${city});

    //right now hard coded to retreive sample data so not use api key too much
    const {data} = await axios.get('/events/sampleCity');
    console.log('data', data);
  };

  const searchDate = async() => {
    //const {data} = await axios.get('/events/dateSearch') <-- include start date, fin date, city
    const {data} = await axios.get('/events/sampleLocalWeekend');
    console.log('daate data', data);
    setEvents(data);
  };
  
  const findLocalShows = async() => {
    const {data} = await axios.get(`/events/dateSearch/${date1}/${date2}/${city}`);
    console.log('fls data', data);
    setEvents(data);
  };
  
  return (
    
    <div>
      <TextField variant="outlined" placeholder='YYYY-MM-DD' onChange={(e)=>setDate1(e.target.value)} value={date1} />
      <TextField variant="outlined" placeholder='YYYY-MM-DD' onChange={(e)=>setDate2(e.target.value)} value={date2} />
      <TextField variant="outlined" placeholder='city' onChange={(e)=>setCity(e.target.value)} value={city} />
      <Button onClick={findLocalShows}>find local shows</Button>
  
    
     
     
     
      <Button onClick={searchDate}>search nolaween</Button>

      <Map events={events} />
    </div>
  );
};

export default MapEvents;

/**
 * Query String Parameters
Your can add client_id and optionally client_secret to the end of any valid url to authenticate your request.
 */
//http://platform.seatgeek.com/

/**
 * curl https://api.seatgeek.com/2/events?client_id=MYCLIENTID
curl https://api.seatgeek.com/2/events?client_id=MYCLIENTID&client_secret=MYCLIENTSECRET
 */
