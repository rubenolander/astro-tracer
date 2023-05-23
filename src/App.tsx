import './App.css';
import mapboxgl from 'mapbox-gl';

function App() {
  async function initializeMap() {
    await new Promise((resolve) => {
      window.addEventListener('DOMContentLoaded', resolve);
    });

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs',
      center: [-74.5, 40], 
      zoom: 2.5, 
    });
  }
  
  initializeMap();
    
  return (
    <>
    <div id="flex">
      <img id="ISS" src="../src/assets/iss.png" />
      <div id="map"></div>
    </div>
    </>
  )
}

export default App
