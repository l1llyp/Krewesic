import React, {useState, useEffect, useContext} from 'react';
import io from 'socket.io-client';
import Search from './Search.jsx';
//need the socket to connect to the server, which is the local host
// const socket = io.connect('http://localhost:1337');


const DirectMessages = () => {


  // socket.on('', ({name, message}) => {
  //   console.log(chat);
  //   setChat([...chat, {name, message: message}]);
  // });

  return (
    <div>
      <Search />
    </div>
  );
};

export default DirectMessages;