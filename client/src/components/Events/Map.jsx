import keys from './keys.js'; //this cant be permanent
import React, {useState, memo, useEffect, useCallback, useRef} from 'react';
import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import styled from 'styled-components';
//require('dotenv').config()
import MusicNoteIcon from '@material-ui/icons/MusicNote';

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

  const [venues, setVenues] = useState([]);
  const [selected, setSelected] = useState(null);

  const showVenues = useCallback((e) => {
    setVenues(current => [...current, {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }]);
    console.log(venues);
  } , [])


    const mapRef = useRef();
    const onMapLoad = useCallback(map => {
      mapRef.current = map
    },[])
  


  //return the map component
  if (isLoaded) {
    return (
      <div>
      
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={showVenues}
          onLoad={onMapLoad}
            
        >
          
          {venues.map((venue, i) => (
            <Marker 
              key={i} 
              position={{lat: venue.lat, lng: venue.lng}} 
              onClick={() => {
                setSelected(venue)
              }}
            />
          ))}
          {selected && (<InfoWindow 
            position={{lat: selected.lat, lng: selected.lng}}
            onCloseClick={() => setSelected(null)}
          >
            <h3>info window</h3>
            </InfoWindow>)}
        </GoogleMap>
    
      </div>
    ); 

  } else {
    return <div>else</div>;
  }
  
};

export default memo(Map);


// if(loadError) return 'Error loadng maps'; 
// if(!loadError) {
//   console.log('cool')
//   return <h1>"Loading Maps"</h1>;}

/**
   *  <LoadScript
        googleMapsApiKey={keys.GOOGLE_MAPS_KEY}
      >
   */