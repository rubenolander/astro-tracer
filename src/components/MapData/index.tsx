import mapboxgl from "mapbox-gl";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type MapDataProps = {
    setLongitude: (longitude:number) => void,
    setLatitude: (latitude:number) => void
};

const MapData = (props: MapDataProps) => {
    const [newMap, setNewMap] = useState<mapboxgl.Map|null>(null);

    const { isLoading, isError } = useQuery<MapDataProps>({
        queryKey: ["coordinates"],
        queryFn: async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            const longitude = data.longitude;
            const latitude = data.latitude;
            !newMap && initializeMap(longitude, latitude);
            newMap && updateMap(longitude, latitude);
            props.setLongitude(longitude);
            props.setLatitude(latitude);
            console.log("New ISS coordinates fetched");
            return data;
        },
        refetchInterval: 3000, 
    })

    isLoading && console.log(isLoading);
    isError && console.log(isError);

    function initializeMap(longitude: number, latitude: number): void {
            mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
            let map = new mapboxgl.Map({
                container: 'map', 
                style: 'mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs',
                center: [longitude, latitude],
                zoom: 2.15,
            });
            console.log("Map initilized")
            setNewMap(map);
        }

    async function updateMap(longitude: number, latitude: number) {
        newMap?.flyTo({
                center: [longitude, latitude],
                zoom: 2.15,
            });
            console.log("Map updated")
    } 
    return <div className="w-[100vw] h-[100vh] relative" id="map"></div>
}

export default MapData;