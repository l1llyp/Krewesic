import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import Login from './Login.jsx';
import Profile from './Profile/Profile.jsx';
import Form from './Profile/Form.jsx';
import FormArtist from './Profile/FormArtist.jsx';
import FormListener from './Profile/FormListener.jsx';
import ArtistOfDay from './Home/ArtistOfDay.jsx';
import BandsHome from './Bands/BandsHome.jsx';
import MapEvents from './Events/MapEvents.jsx';
import Header from './Header.jsx';
import GlobalContext from './Contexts/GlobalContext.jsx';
import MessagesPage from './Messages/MessagesPage.jsx';



const AppStyles = styled.div`
  margin: 50px;
`;

const App = (props) => {
  const [ artistBio, setMyBio ] = useState('');
  const [ influences, setInfluence ] = useState('');
  const [ artistName, setMyName ] = useState('');
  const [ myGenre, setMyGenre ] = useState('');
  const [ pic, setPic ] = useState('');
  const [ favArtist, setArtist ] = useState('');
  const [ favGenre, setGenre ] = useState('');
  const [ bio, setBio ] = useState('');
  const [ city, setCity ] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [type, setType] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const value = {name, setName, picture, setPicture, type, setType, loggedIn, setLoggedIn, city, setCity, bio, setBio, favArtist, setArtist, favGenre, setGenre, artistBio, setMyBio, artistName, setMyName, pic, setPic, myGenre, setMyGenre, influences, setInfluence };

  return (
    <AppStyles>

      <GlobalContext.Provider value={value}>
        <Router>
          <Header />
          <nav>
            <Link to='/artistofday'>artist of day </Link>
            <Link to='/bands'>bands</Link>
            <Link to='/mapevents'>map events</Link>
            <Link to='/messages'>Messages</Link>
            <Link to='/profile'>Profile</Link>
          </nav>

          <Switch>
            <Route exact path="/" component={Login}>
            </Route>
            <Route path='/artistofday' >
              <ArtistOfDay />
            </Route>
            <Route path='/profile' >
              <Profile />
            </Route>
            <Route path='/form' >
              <Form />
            </Route>
            <Route path='/listenerform' >
              <FormListener />
            </Route>
            <Route path='/artistform' >
              <FormArtist />
            </Route>
            <Route path='/bands' >
              <BandsHome />
            </Route>
            <Route path='/mapevents' >
              <MapEvents />
            </Route>
            <Route path='/messages' component={MessagesPage}>
            </Route>
            <Route>
              <div>404 page not available</div>
            </Route>
          </Switch>
        </Router>
      </GlobalContext.Provider>

    </AppStyles>
  );

};

export default App;
