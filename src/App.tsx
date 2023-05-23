import './App.css';
import mapboxgl from 'mapbox-gl';

function App() {

  // const myAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
  async function initializeMap() {
    await new Promise((resolve) => {
      window.addEventListener('DOMContentLoaded', resolve);
    });

    mapboxgl.accessToken = "pk.eyJ1IjoidGVhbXZhdHRlbmZhbGwiLCJhIjoiY2xkdWFkbHN4MDN3MTQzbzVpa3ZydnhobiJ9.s1jE7Ai0VbUH3fxiZojDPg";
    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs',
      center: [-74.5, 40], 
      zoom: 2.5, 
    });
  }
  
  // Call the async function to initialize the map
  initializeMap();
    
  return (
    <>
      <div id="map"></div>
    </>
  )
}

export default App
