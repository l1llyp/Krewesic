import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './Login.jsx';
import Profile from './Profile/Profile.jsx';
import Form from './Profile/Form.jsx';
import FormArtist from './Profile/FormArtist.jsx';
import FormListener from './Profile/FormListener.jsx';


const App = (props) =>  {

    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}>
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
          <Route>
            <div>404 page not available</div>
          </Route>
        </Switch>
      </Router>
    </div>
    )
  
}

export default App;