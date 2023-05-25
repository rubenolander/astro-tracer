import mapboxgl from 'mapbox-gl';
import { useState, useEffect } from "react";
import IssPositionCard from './IssPositionCard';
import Astronauts from './Astronauts';

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    initializeISS();
    const interval = setInterval(updateMap, 3000); //Set this to 3000 when showing.

    return () => clearInterval(interval);
  }, []);

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  let map: mapboxgl.Map;

  
  function initializeMap(longitude: number, latitude: number): void {
    map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs',
      center: [longitude, latitude], 
      zoom: 2.15,
    });
  }

  async function initializeISS() {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const iss = await response.json();
    const longitude = iss.iss_position.longitude;
    const latitude = iss.iss_position.latitude;
    initializeMap(longitude, latitude);
    setLongitude(longitude);
    setLatitude(latitude);
  }

  async function updateMap() {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    const iss = await response.json();
    const longitude = iss.iss_position.longitude;
    const latitude = iss.iss_position.latitude;
    setLongitude(longitude);
    setLatitude(latitude);
    
    if (map) {
      map.flyTo({
        center: [longitude,latitude],
        zoom: 2.15
      });
    }
  }

  return (
    <>
        <Astronauts />
        <IssPositionCard latitude={latitude} longitude={longitude} />
      <div className="flex justify-center items-center">
        <img className="w-80 z-10 pointer-events-none fixed" src="../src/assets/iss.png" />
        <div className="w-[100vw] h-[100vh] relative" id="map"></div>
      </div>


    </>
  )
}

export default App
