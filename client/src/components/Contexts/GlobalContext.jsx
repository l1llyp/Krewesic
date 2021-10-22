import React, { useState } from 'react';

const GlobalContext = React.createContext({
  name: '',
  type: '',
  bio: '',
  city: '',
  artistName: '',
  favGenre: '',
  myGenre: '',
  artistBio: '',
  favArtist: '',
});

export default GlobalContext;
