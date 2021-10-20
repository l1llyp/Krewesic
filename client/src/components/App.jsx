import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './Login.jsx';
import Profile from './Profile/Profile.jsx';
import Form from './Profile/Form.jsx';
import FormArtist from './Profile/FormArtist.jsx';
import FormListener from './Profile/FormListener.jsx';
import ArtistOfDay from './Home/ArtistOfDay.jsx';
import BandsHome from './Bands/BandsHome.jsx';
import GlobalContext from './Contexts/GlobalContext.jsx';


const App = (props) =>  {

  const [name, setName] = useState('')
  const [picture, setPicture] = useState('')
  const [type, setType] = useState('')
const value = {name, setName, picture, setPicture, type, setType} 

    return (
      <GlobalContext.Provider value={value}>
      <Router>
        <nav>
          <Link to='/artistofday'>artist of day </Link>
          <Link to='/bands'>bands</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path='/artistofday' >
            <ArtistOfDay />
          </Route>
          <Route  path='/profile' >
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
          <Route>
            <div>404 page not available</div>
          </Route>
        </Switch>
      </Router>
    </GlobalContext.Provider>
    )
  
}

export default App;