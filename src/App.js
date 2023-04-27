
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Series from './Components/Series';
import Live from './Components/Live';
import Vod from './Components/Vod';
import ChannelsLive from './Components/ChannelsLive';
import Player from './Components/Player';
import VodCat from './Components/VodCat';
import MovieDetail from './Components/MovieDetail';
import PlayerMovie from './Components/PlayerMovie';
import Intro from './Components/Intro';
import SeriesEpisodes from './Components/SeriesEpisodes';
import PlayerSeries from './Components/PlayerSeries';




function App() {

  

  return (
    <div className="App-login">
      

      <div className='app-menu' >
     <Routes>
     
      <Route path="/" element={<Intro/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/live" element={<Live/>}/>
      <Route path="/vod" element={<Vod/>}/>
      <Route path="/live/channelslive/:id" element={<ChannelsLive/>}/>
      <Route path="/live/channelslive/player/:id" element={<Player chan/>}/>
      <Route path="/vod/:id" element={<VodCat mov/>}/>
      <Route path="/moviedetail/:id" element={<MovieDetail movie/>}/>
      <Route path="/moviedetail/movieplayer/:id" element={<PlayerMovie />}/>
      <Route path="/series/:id" element={<SeriesEpisodes />}/>
      <Route path="/episodes/:id" element={<PlayerSeries episode />}/>


      </Routes>

      </div>
      
      
    </div>
  );
}

export default App;
