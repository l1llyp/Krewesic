import React from 'react';

const InfoCard = ({event}) => {
  const {datetime_local, performers, type, venue } = event;


  return (
    <div>
      
      {performers.map((performer, i) => <h3 key={i}>{performer.name}</h3>)}
      <h4>{venue.name}</h4>
      <p>{datetime_local}</p>
    </div>
  );
};

export default InfoCard;
