import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCatCard from './MovieCatCard';


function Vod() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      let result = await axios.get("/db/movies_cat.json")
      setMovie(result.data)
     
      
    }

   fetchData()
   

  }, []);


  return (
    
    <div className='movies-cats'>
      
      {movie.map((el) => (
        
        <MovieCatCard mov={el}/>

    ))}
    
    

    </div>
  
  )
}

export default Vod