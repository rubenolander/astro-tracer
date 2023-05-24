import mapboxgl from 'mapbox-gl';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initializeISS();
  }, []);

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  function initializeMap(longitude: number, latitude: number): void {
    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs',
      center: [longitude, latitude], 
      zoom: 2.5, 
    });
  }

  async function initializeISS() {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const iss = await response.json();
    const longitude = iss.iss_position.longitude;
    const latitude = iss.iss_position.latitude;
    initializeMap(longitude, latitude);
  }

  return (
    <>
    <div className="flex justify-center items-center">
      <img className="w-80 z-10 pointer-events-none fixed" src="../src/assets/iss.png" />
      <div className="w-[100vw] h-[100vh] relative" id="map"></div>
    </div>
    </>
  )
}

export default App
