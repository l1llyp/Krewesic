import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core/';
import axios from 'axios';
//import './sample.json';


const MapEvents = () => {
  
  const [bandName, setBandName] = useState('');

  const search = async() => {
    console.log('click search');
    //send bandName to the back end
    //const {data} = await axios.get(`/events/search/${bandName}`);
    const {data} = await axios.get('/events/sampleData');
    console.log(data);

    //clear the input text
  };
  
  return (
    
    <div>
      <TextField variant="outlined" placeholder='placeholder' onChange={(e)=>setBandName(e.target.value)} value={bandName} />
      <Button onClick={search}>search</Button>
      map events component
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

//client_id=MjQwMDU0MjB8MTYzNDc0NDg3My44MDkwMTAz&client_secret=3eb3e9c659e45a2d1e07380a0146edf2313490dcbb6c89b377d08f6295208ab1