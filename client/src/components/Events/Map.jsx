import keys from './keys.js'; //this cant be permanent
import React, {useState, memo, useEffect} from 'react';
import { GoogleMap, LoadScript, useLoadScript} from '@react-google-maps/api';
import styled from 'styled-components';
//require('dotenv').config()

const MapStyles = styled.div`
  .container {
    width: '400px',
  height: '400px'
  }
`;

const containerStyle = {
  width: '400px',
  height: '400px'
};
//  mapContainerStyle={containerStyle}


const libraries = ['places'];

const Map = () => {
  
  const center = { lat: 30, lng: -90 };
 
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: keys.GOOGLE_MAPS_KEY,
    libraries
  });
  // if(loadError) return 'Error loadng maps'; 
  // if(!loadError) {
  //   console.log('cool')
  //   return <h1>"Loading Maps"</h1>;}

  /**
   *  <LoadScript
        googleMapsApiKey={keys.GOOGLE_MAPS_KEY}
      >
   */
  if(isLoaded) {

    return (
      <div>
      
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            
          >
          
            <></>
          </GoogleMap>
    
      </div>
    ) 

  } else {
    return <div>else</div>
  }
  
};

export default memo(Map);


