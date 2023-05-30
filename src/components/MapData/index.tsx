import mapboxgl from "mapbox-gl";
import { useQuery } from "@tanstack/react-query";

const MapData = (props: any) => {
    const { isLoading, isError } = useQuery({
        queryKey: ["coordinates"],
        queryFn: async () => {
            const response = await fetch('http://api.open-notify.org/iss-now.json');
            const data = await response.json();
            const longitude = data.iss_position.longitude;
            const latitude = data.iss_position.latitude;
            if (!map) {
                initializeMap(longitude, latitude);
            }
            if (map) {
                updateMap(longitude, latitude);
            }
            props.setLongitude(longitude);
            props.setLatitude(latitude);
            return data;
        },
        refetchInterval: 3000, 
    })
    
    if (isLoading) {
        console.log(isLoading);
    }

    if (isError) {
        console.log(isError);
    }

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

    async function updateMap(longitude: number, latitude: number) {
        map.flyTo({
            center: [longitude, latitude],
            zoom: 2.15
        });
    } 

    return <div className="w-[100vw] h-[100vh] relative" id="map"></div>
}

export default MapData;
