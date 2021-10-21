import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MessageForm = () => {

  //need to hold the value of the message in state
  const [value, setValue] = useState('');
  // const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
//where we need to send an axios post to create the message in the Messages db
 axios.post('/messages/sendMessage', { text: value })
 .then((results) => {
   console.log('messageCreated:', results);
   setValue('');
 })
 .catch(err => {
   console.log('ERROR:', err);
 })
    
  }
  // const handleSubmit = (event) => {
  //    event.preventDefault();
  // }

  const handleChange = (event) => {
     setValue(event.target.value);
  }

//   //**Get all messages from current User*/
//  const getMessages = () => {
//    axios.get('/messages/sendMessage')
//    .then( (results) => {
//      setMessages(results.data)
//    console.log('Messages:', results.data);
//    })
//    .catch( err => {
//      console.log('ERROR!:', err);
//    })
//  }

 useEffect(() => {
   //getMessages();
 }, []);

return (
 
  <form className="message-form" >
    <input className="message-input" placeholder="Send a message..." value={value} onChange={handleChange}  />

 <button className="message-button" onClick={sendMessage}> send </button>
  </form>

)
}

export default MessageForm;