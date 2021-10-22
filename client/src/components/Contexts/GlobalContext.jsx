import React, { useState } from 'react';

const GlobalContext = React.createContext({
  name: '',
  type: '',
  // img: '',
  // artistOfTheDay: ''
});

export default GlobalContext; 