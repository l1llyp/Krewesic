
import React, { useState } from 'react';
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
        id="outlined-basic"
        label="Bio"
        variant="outlined" />
      <br/><br/>
      <TextField
        id="outlined-basic"
        label="FavArtist"
        v
        ariant="outlined" />
      <br/>
      <br/>
      <FormControl fullWidth>
        <InputLabel >Favorite Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Fav Genre"
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
        href='/artistofday'
        color="primary"
        variant="contained"
        startIcon={ <AccountCircle/> }
      > Create Profile </Button>
      <br/><br/>

    </div>
  );
};

export default FormListener;
