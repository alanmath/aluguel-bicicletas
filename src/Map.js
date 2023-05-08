import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "80%",
  height: "40vh",
};

const zoom = 15;

function Map({ currentPosition, markerPosition }) {
  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={currentPosition}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
}

export default Map;
