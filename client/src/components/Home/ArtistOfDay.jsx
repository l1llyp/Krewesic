/* eslint-disable brace-style */
import React, { reactDOM, useContext, useState, useEffect} from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import styled from 'styled-components';
import dummyData from '../Profile/dummyData.js';

// const StyledArtistOfDay = styled.div`
//   margin-top: 30px;
// `;

const ArtistOfDay = () => {

  const [ artistOfTheDay, setArtistOfTheDay ] = useState(dummyData.artists[0]);
  const [ artistList, setArtistList ] = useState([]);

  // useEffect(async() => {
  //   const {data} = await axios.get('/form/user');
  //   console.log(data);
  //   setName(data.name);
  //   setPicture(data.picture);
  //   setType(data.type);
  //   setLoggedIn(true);
  //   console.log('picture', picture, 'type', type);

  // }, []);

  const renderArtistOfTheDay = () => {
//    await axios.get(artistApiUrl)
//   .then((data) => {
//     console.log('dataaa: ', data);
//     setArtistList(data.data);
//   })
//   .catch((err) => console.error(err));

    setArtistList(dummyData.artists);
    console.log(artistList);

    // setInterval(setArtistOfTheDay(artistList[Math.floor(Math.random() * artistList.length - 1)]), 86400000);
  };

  useEffect(() => {

    renderArtistOfTheDay();
      
  });


  return (
    <div className='dayHeader'>
      <img src={artistOfTheDay.strArtistThumb} alt='' />
      Today's Featured Artist: {artistOfTheDay.strArtist}
    </div>

    
    
  );
};

export default ArtistOfDay;
