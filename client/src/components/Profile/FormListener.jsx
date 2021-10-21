
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import {Menu} from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import {MenuItem} from '@material-ui/core';
import {DropDownMenu} from '@material-ui/core';
const FormListener = () => {
  const [ bio, setBio ] = useState('');
  const [ favArtist, setArtist ] = useState('Type Artist');
  const [ favGenre, setGenre ] = useState('Pick Genre!');

  const createListener = () => {
    const [ bio, favArtist, favGenre ] = useState();
    axios.put('/createListener', {
      bio: bio,
      favArtist: favArtist,
      favGenre: favGenre
    })
      .catch(err => console.log('darn', err));
  };

  return (
    <div>
      <Typography
        align='center'
        color='secondary'
        variant='h4'
      >What kind of Listener are you?</Typography>
      <br/>
      <TextField
        onChange={e => setBio(e.target.value)}
        //id="outlined-basic"
        label="Bio"
        variant="outlined" />
      <br/><br/>
      <TextField
        onChange={e => setArtist(e.target.value)}
        id="outlined-basic"
        label="Favorite Artist"
        v
        ariant="outlined" />
      <br/>
      <br/>
      <FormControl fullWidth>
        <InputLabel >Favorite Genre</InputLabel>
        <Select
          defaultValue={ favGenre }
          onChange={e => setGenre(e.target.value)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Favorite Genre"
        >
          <MenuItem value={'Rock'}>Rock</MenuItem>
          <MenuItem value={'Pop'}>Pop</MenuItem>
          <MenuItem value={'Hip Hop'}>Hip Hop</MenuItem>
          <MenuItem value={'Metal'}>Metal</MenuItem>
          <MenuItem value={'Country'}>Country</MenuItem>
          <MenuItem value={'House'}>House</MenuItem>
        </Select>
        <br/>
      </FormControl>
      <Button
        onClick={() => createListener()}
        // href='/artistofday'
        color="primary"
        variant="contained"
        startIcon={ <AccountCircle/> }
      > Create Profile </Button>
      <br/><br/>

    </div>
  );
};

export default FormListener;
