import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TvCard from './TvCard';


function Live() {


  const [channel, setChannel] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      let result = await axios.get("/db/live_cats.json")
      setChannel(result.data)
      
      
    }

   fetchData()
   

  }, []);


  return (
    
    <div className='channels-list'>
      {channel.map((el) => (
        
        <TvCard chan={el}/>

    ))}
    

    </div>
  
  )
}

export default Live