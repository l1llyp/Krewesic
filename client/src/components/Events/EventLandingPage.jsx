import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EventLandingPage = () => {
  
  const {eventId, venue, city, performers, datetime } = useParams();
  console.log(eventId, venue, city, performers, datetime);
  //this should be displaying: performers, datetime, city, venue name, lat lng, users who are interested, comments about this event, link to the ticket sales to satisfy TOS

  return (
    <div>
      <div>{performers.split(',').map((performer, i) => <h1 key={i} >{performer}</h1>)}</div>

      <h2>{venue}, {city} </h2>
      <h3>{datetime} </h3>
      <button>interested</button>


    </div>
  );
};

export default EventLandingPage;
