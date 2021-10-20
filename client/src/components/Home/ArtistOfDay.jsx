import React, {useContext, useEffect} from 'react';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import styled from 'styled-components';

const StyledArtistOfDay = styled.div`
  margin-top: 30px;
`;

const ArtistOfDay = (props) => {

  const {name, setName, picture, setPicture, type, setType, loggedIn, setLoggedIn} = useContext(GlobalContext);

  useEffect(async()=>{
    const {data} = await axios.get('/form/user');
    console.log(data);
    setName(data.name);
    setPicture(data.picture);
    setType(data.type);
    setLoggedIn(true);
    console.log('picture', picture, 'type', type);

  }, []);

  return (
    <StyledArtistOfDay>
      this is the artist of the day and/or the home page??? {name} who is a type {type}
    
    </StyledArtistOfDay>
  );
};

export default ArtistOfDay;
