import React from 'react';

const EventPreview = ({eventDetails}) => {
  const {performers, id, User, when, venue, medium} = eventDetails;
  const {name} = User;
  return (
    <div>
      <p>
        {name} {when} {medium === 'virtual' ? 'virtual' : venue}
      </p>
        
     
    </div>
  );
};

export default EventPreview;
