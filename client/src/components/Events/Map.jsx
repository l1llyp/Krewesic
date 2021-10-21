import React from 'react';
import {GoogleMap} from '@react-google-maps/api';
const google = window.google;

const Map = ( props) => {

  const center = {
    lat: 30.0,
    lng: -90.0
  };
  return (
    <div> 
      <GoogleMap 
        zoom={12}
        center={center}
      />
      
    </div>
  )
}

export default Map
