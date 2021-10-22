import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MessagesView from './MessagesView.jsx';
import MessageForm from './MessageForm.jsx';

const MessagesPage = () => {

  //hold messages in state
  const [messages, setMessages] = useState([]);

  //**Get all messages from current User*/
 const getMessages = () => {
  axios.get('/messages/sendMessage')
  .then( (results) => {
    setMessages(results.data)
  console.log('Messages:', results.data);
  })
  .catch( err => {
    console.log('ERROR!:', err);
  })
}
 
useEffect(() => {
  getMessages();
}, []);

  return (
    <div className='chat'>

<MessageForm />
<MessagesView messages={messages}/>
    </div>
  )
}

export default MessagesPage;