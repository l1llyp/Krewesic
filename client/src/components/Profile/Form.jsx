import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import FormListener from './FormListener.jsx';
import FormArtist from './FormArtist.jsx';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


const Form = (props) => {
  //get user info
  const history = useHistory();

 
   
 

  const selectType = (type) => {
    axios.put(`/form/${type}`)
  }
  return (
    <div>
      form component
      <div> are you user or artist</div>
      <button onClick={() => {
        selectType('listener')
        history.push(`/listenerform`)
      }} >listener</button>
      <button onClick={() => {
        selectType('artist')
        history.push(`/artistform`)
      }} 
      >artist</button>
    </div>
  )
}

export default Form
