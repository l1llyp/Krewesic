import React, {useContext, useEffect} from 'react';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


const ArtistOfDay = (props) => {

  

  const {name, setName, picture, setPicture, type, setType} = useContext(GlobalContext)

  useEffect(async()=>{
    const {data} = await axios.get('/form/user')
    console.log(data)
    setName(data.name)
    setPicture(data.picture)
    setType(data.type)
    console.log('picture', picture, 'type', type)

  },[])

  return (
    <div>
      this is the artist of the day and/or the home page??? {name} who is a type {type}
    
    </div>
  )
}

export default ArtistOfDay
