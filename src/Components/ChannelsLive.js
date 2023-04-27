import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TvCardLive from './TvCardLive';
import { useParams } from 'react-router-dom';


function ChannelsLive() {

  
  const [channel, setChannel] = useState([])
  
  const params=useParams()
  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.get("/db/live.json")
      const fchannels = result.data.filter((ch) => ch.category_id == params.id)   
      setChannel(fchannels)
     
      
    }

   fetchData()
   

  }, []);

  
  
  
  return (
    <div>

<div className='channels-list'>
      {channel.map((el) => (
        
        <TvCardLive chan={el}/>

    ))}
    

    </div>
  


    </div>
  )
}

export default ChannelsLive