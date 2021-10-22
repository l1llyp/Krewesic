import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const InfoCard = ({event}) => {
  const {datetime_local, performers, type, venue, id, sgId } = event;
  
  const performersString = performers.map(performer => performer.name ).join(',');
  const history = useHistory();

  const interestedIn = async() => {
    await axios.post('/interestedIn', {eventId: id, sgId: sgId, });
  };

  return (
    <div>
      <div onClick={() => { history.push(`/eventLandingPage/${id}/${venue.name}/${venue.city}/${performersString}/${datetime_local}`); }}>
        {performers.map((performer, i) => <h3 key={i}>{performer.name}</h3>)}
      </div>
      <h4>{venue.name}</h4>
      <p>{datetime_local}</p>
      <button>interested in</button>
    </div>
  );
};

export default InfoCard;
