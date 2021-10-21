import React from 'react';
import styled from 'styled-components'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
//import GoogleMapReact from 'google-map-react';
//const google = window.google;

const MapStyles = styled.div`
  height: 200px;
  width: 200px;
`;

const Map = ( props) => {

  const center = { lat: 30.0, lng: -90.0 }; //coordinates to center map

  const 




  return (
    <MapStyles> 
      <div>map should b below</div>
      <GoogleMap
        zoom={12}
        center={center}
        height={100}
        width={100}
      />
  
      
    </MapStyles>
  )
}

export default Map

/**
 *  
 */