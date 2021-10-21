import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core/';
import axios from 'axios';
import Map from './Map.jsx';

//import './sample.json';


const MapEvents = () => {
  
  const [bandName, setBandName] = useState('');
  const [city, setCity] = useState('');

  const searchBand = async() => {
    console.log('click search');
    //send bandName to the back end
    //const {data} = await axios.get(`/events/bandSearch/${bandName}`);

    //right now hard coded to receive sample data so not use api key too much
    const {data} = await axios.get('/events/sampleData');
    console.log(data);

    //clear the input text
  };

  const searchCity = async() => {
    console.log('search city');

    //const {data} = await axios.get(`/events/citySearch/`${city});

    //right now hard coded to retreive sample data so not use api key too much
    const {data} = await axios.get('/events/sampleCity');
    console.log(data);
  };
  
  return (
    
    <div>
      <TextField variant="outlined" placeholder='band name' onChange={(e)=>setBandName(e.target.value)} value={bandName} />
      <Button onClick={searchBand}>search band</Button>
      <TextField variant="outlined" placeholder='city' onChange={(e)=>setBandName(e.target.value)} value={city} />
     
      <Button onClick={searchCity}>search city</Button>
      map events component
      <Map />
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
