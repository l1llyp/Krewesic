import keys from './keys.js'
import React, {useState, memo, useEffect} from 'react'
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
  )
}

export default memo(Map)


/**
 *  import React, {useEffect, useState, useCallback, memo} from 'react';
import styled from 'styled-components';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
//import GoogleMapReact from 'google-map-react';
//const google = window.google;

const MapStyles = styled.div`
  height: 200px;
  width: 200px;
  .mapContainer{
    height: 100px;
    width: 100px;
  }
`;

const Map = ( props) => {

  const center = { lat: 30.0, lng: -90.0 }; //coordinates to center map

  // const {isLoaded, loadError} = useJsApiLoader({
  //   id: 'google-map-script',
  //   apiKey: 
  // })

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  })

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])





  return  (
    <MapStyles> 
      <LoadScript
        googleMapsApiKey='AIzaSyCn9YMdbxwNL3hkpTpVS5mNrUhpyXpg_qg'
      >
      <GoogleMap className='mapContainer'
        zoom={12}
        center={center}
        
      />
      <></>
  
  </LoadScript>
    </MapStyles>
  
  )
}

export default memo(Map)
 */