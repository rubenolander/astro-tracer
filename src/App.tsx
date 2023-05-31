import { useState } from "react";
import IssPositionCard from './components/IssPositionCard';
import Astronauts from './components/Astronauts';
import MapData from './components/MapData';

function App() {
  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();

  return (
    <>
      <div className="fixed z-10 ml-5 mt-5">
        <img src="../src/assets/logo.svg" className="mb-5 w-3/4" />
        <Astronauts />
        <IssPositionCard latitude={latitude} longitude={longitude} />
      </div>
      
      <div className="flex relative justify-center items-center">
        <img className="w-80 z-10 pointer-events-none fixed" src="../src/assets/iss.png" />
        {/* <MapData setLongitude={setLongitude} setLatitude={setLatitude}/> */}
      </div>
    </>
  )
}

export default App
