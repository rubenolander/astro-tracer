import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoidGVhbXZhdHRlbmZhbGwiLCJhIjoiY2xkdWFkbHN4MDN3MTQzbzVpa3ZydnhobiJ9.s1jE7Ai0VbUH3fxiZojDPg";

type Props = {
  longitude: number;
  latitude: number;
};

class Map extends React.Component<Props> {
  private mapContainer: any;
  private map: Map | undefined;

  componentDidMount(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [this.props.longitude, this.props.latitude],
      style: "mapbox://styles/teamvattenfall/clhzzzikw00cv01pgew7dbrxs",
      zoom: 2.5
    });
  }
  render(): JSX.Element {
    return (
      <div
        ref={(el): void => {
          this.mapContainer = el;
        }}
        className="mapContainer"
      />
    );
  }
}

export default Map;