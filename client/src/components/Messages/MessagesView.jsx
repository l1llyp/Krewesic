import React, {useState, useEffect} from 'react';

const MessagesView = ({messages}) => {

  return (
    <div className='messages-view'>
      {
        messages.map(message => {
          return (

<div className="d-flex flex-colum flex-grow-1">
  <div className="flex-grow-1 overflow-auto">
<div className="h-100 d-flex flex-column align-items-start justify-content-end px - 3">
{message.text}

</div>
  </div>

</div>
          )
        })
}
    </div>
  )
};

export default MessagesView;