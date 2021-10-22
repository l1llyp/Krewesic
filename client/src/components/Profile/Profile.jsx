import React, {useContext, useEffect} from 'react';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormArtist from './FormArtist.jsx';
import FormListener from './FormListener.jsx';

const Profile = () => {



  const {name, setName, picture, setPicture, type, setType, city, setCity, bio, setBio, favArtist, setArtist, favGenre, setGenre, artistBio, setMyBio, artistName, setMyName, myGenre, setMyGenre, pic, setPic } = useContext(GlobalContext);

  useEffect(async()=>{
    const {data} = await axios.get('/form/user');
    console.log(data);
    setName(data.name);
    setPicture(data.picture);
    setType(data.type);
    setCity(data.city);
    setBio(data.bio);
    setArtist(data.favArtist);
    setGenre(data.favGenre);
    setMyGenre(data.myGenre);
    setMyBio(data.artistBio);
    setPic(data.pic);
    console.log('picture', picture);
  }, []);

  return (
    <Box
      bgcolor="primary.dark"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <br/>
      <Box>
        <Typography
          align='left'
          color='textSecondary'
          variant='h4'
        >
          My Profile
        </Typography>
        <br/>
      </Box>
      <Typography
        align='center'
        variant='h4'
      >
        { artistName || name }
      </Typography>
      <br/>
      <Box
        align='center'
      >
        <img
          src={pic}
        />
        { bio || artistBio }
      </Box>
      <br/>
      <Box
        align='center'
      >
        { city }
      </Box>
      <br/>
      <Box
        align='center'
      >
        { favGenre || myGenre }
      </Box>
      <br/>
      <Box
        align='center'
      >
        { favArtist || null }
      </Box>
    </Box>
  );
};

export default Profile;
