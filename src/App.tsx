import { useState } from "react";
import IssPositionCard from './components/IssPositionCard';
import Astronauts from './components/Astronauts';
import MapData from './components/MapData';

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  return (
    <>
      <Astronauts />
      <IssPositionCard latitude={latitude} longitude={longitude} />
      <div className="flex justify-center items-center">
        <img className="w-80 z-10 pointer-events-none fixed" src="../src/assets/iss.png" />
        <MapData setLongitude={setLongitude} setLatitude={setLatitude}/>
      </div>
    </>
  )
}

export default App
