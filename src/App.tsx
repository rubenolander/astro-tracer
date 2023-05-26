import { useState } from "react";
import IssPositionCard from './components/IssPositionCard';
import Astronauts from './components/Astronauts';
import MapData from './components/MapData';

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  return (
    <>
      <div className="fixed z-10 ml-5 mt-[30vh]">
        <img src="../src/assets/logo.svg" className="fixed top-10 left-10" />
        <Astronauts />
        <IssPositionCard latitude={latitude} longitude={longitude} />
      </div>
      
      <div className="flex relative justify-center items-center">
        <img className="w-80 z-10 pointer-events-none fixed" src="../src/assets/iss.png" />
        <MapData setLongitude={setLongitude} setLatitude={setLatitude}/>
      </div>
    </>
  )
}

export default App
