import {useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import mapboxgl from "mapbox-gl";

const MapData = (props:any) => {

    useEffect(() => {
    initializeISS();
    const interval = setInterval(updateMap, 3000);
    
    return () => clearInterval(interval);
    }, []);

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    let map: mapboxgl.Map;

    function initializeMap(longitude: number, latitude: number): void {
        if (!map){
            map = new mapboxgl.Map({
                container: 'map', 
                style: 'mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs',
                center: [longitude, latitude], 
                zoom: 2.15,
            });
        }
    };

    // function initializeISS(){
    // const {data, isLoading, isError} = useQuery({
    //     queryKey: ["ISS"],
    //     queryFn: async () => {
    //         const response = await fetch('http://api.open-notify.org/iss-now.json');
    //         const data = await response.json();
    //         console.log(data);
    //         const longitude = data.iss_position.longitude;
    //         const latitude = data.iss_position.latitude;    
    //         initializeMap(longitude, latitude);
    //         props.setLongitude(longitude);
    //         props.setLatitude(latitude);
    //         return {longitude, latitude};    
    //     } 
    // })
// }
    async function initializeISS() {
        const response = await fetch("http://api.open-notify.org/iss-now.json");
        const iss = await response.json();
        const longitude = iss.iss_position.longitude;
        const latitude = iss.iss_position.latitude;
        initializeMap(longitude, latitude);
        props.setLongitude(longitude);
        props.setLatitude(latitude);
        return {longitude, latitude};
    }
    
    async function updateMap() {
        if (map) {
            const { longitude, latitude } = await initializeISS();
            props.setLongitude(longitude);
            props.setLatitude(latitude);

          map.flyTo({
            center: [longitude,latitude],
            zoom: 2.15
          });
        }
    }

    return <div className="w-[100vw] h-[100vh] relative" id="map"></div>

}

export default MapData;