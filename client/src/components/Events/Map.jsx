import keys from './keys.js';
import React, {useState, memo, useEffect} from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import styled from 'styled-components';

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
const center = {
  lat: 30,
  lng: -90
};

const Map = () => {
  return (
    <MapStyles>
      <LoadScript
        googleMapsApiKey={keys.GOOGLE_MAPS_KEY}
      >
        <GoogleMap
      
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        
          <></>
        </GoogleMap>
      </LoadScript>
    </MapStyles>
  );
};

export default memo(Map);


