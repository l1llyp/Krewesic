import React, {useContext, useEffect} from 'react';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


const ArtistOfDay = (props) => {

  

  const {name, setName, picture, setPicture} = useContext(GlobalContext)

  useEffect(async()=>{
    const {data} = await axios.get('/form/user')
    console.log(data)
    setName(data.name)
    setPicture(data.picture)
    console.log('picture', picture)
  },[])

  return (
    <div>
      this is the artist of the day and/or the home page??? {name}
    </div>
  )
}

export default ArtistOfDay
