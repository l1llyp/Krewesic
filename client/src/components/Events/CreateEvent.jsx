import React, {useState, useEffect, useContext} from 'react';
//import GlobalContext from './Contexts/GlobalContext.jsx';
import { TextField, MenuItem, Button } from '@material-ui/core';
import { FormControl, InputLabel, Select } from '@mui/material';
import axios from 'axios';

const CreateEvent = () => {

  const performers = 'performer names'; //this is going to be an array at some pt: needs, to match the format from the external api and also so more than one artist can be added to this event.  for starting, will just be the one artist who is adding, adding others will be a later addition.  will need to be .join(',') before being passed to req.body so can be stored in the db
  const [when, setWhen] = useState('');
  const [type, setType] = useState(''); //type will be musical performance, sports, meet and greet etc
  const [medium, setMedium] = useState('virtual'); //this will be the type of show: i.e. live or virtual.  

  //these are only to be displayed if live
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState('');

  //link or code only if virtual, this is de-prioritized option
  //const [link, setLink] = useState('')
  //const [code, setCode] = useState('')

  //-- have instead of entering lat , long, they enter an address and use google geocoding api to get lat long in the db

  const createEvent = async() => {
    axios.post('/events/createEvent', {performers, when, type, medium, lat, lng, city, venue});
  };


  return (
    <div>
      <TextField
        onChange={e => setWhen(e.target.value)}
     
        label="when"
        variant="outlined"
        value={when}
        placeholder='YYYY-MM-DD HH:MM:SS'
      />
      <br/><br/>
   
      
      <TextField
        onChange={e => setType(e.target.value)}
     
        label="type"
        variant="outlined"
        value={type}
        placeholder='ex: music performance, discussion..'
      />
      <br/><br/>
      <FormControl fullWidth>
        <InputLabel >at a venue or virtual?</InputLabel>
        <Select
          onChange={e => setMedium(e.target.value)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="medium"
          value={medium}
        >
          <MenuItem value={'virtual'}>Virtual</MenuItem>
          <MenuItem value={'venue'}>At a venue</MenuItem>
          
          
        </Select>
        <br/>
      </FormControl>
      <br/><br/>
      {medium === 'venue' &&
      <div>
        <TextField
          onChange={e => setLat(e.target.value)}
   
          label="lat"
          variant="outlined"
          value={lat}
          placeholder='lat'
        />
        <br />
        <TextField
          onChange={e => setLng(e.target.value)}
 
          label="lng"
          variant="outlined"
          value={lng}
          placeholder='lng'
        />
        <TextField
          onChange={e => setCity(e.target.value)}
      
          label="city"
          variant="outlined"
          value={city}
          placeholder='city'
        />
        <br />
        <TextField
          onChange={e => setVenue(e.target.value)}
 
          label="venue"
          variant="outlined"
          value={venue}
          placeholder='venue'
        />
        <br />
      </div>
      }
      <Button onClick={createEvent}>create event!</Button>
    </div>
  );
};

export default CreateEvent;
