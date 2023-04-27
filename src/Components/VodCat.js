import React from 'react'
import VodCatCard from './VodCatCard'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function VodCat() {

  const [movi, setMovi] = useState([])
  const params=useParams()
  useEffect(() => {
    const fetchData = async () =>{
      let result = await axios.get("/db/movies.json")
      const fmovies = result.data.filter((ch) => ch.category_id === params.id)   
      
      setMovi(fmovies)
      

  

      
    }

   fetchData()
   

  }, [params.id]);


  

  return (
    
    <div className='vod-cats'>

    {movi.map((el) => (
        
      <VodCatCard movie={el}/>

  ))}
   </div> 
  )
}

export default VodCat