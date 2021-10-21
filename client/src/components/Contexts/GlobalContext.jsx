import React from 'react';

const GlobalContext = React.createContext({
  name: '',
  type: '',
  bio: '',
});

export default GlobalContext;
