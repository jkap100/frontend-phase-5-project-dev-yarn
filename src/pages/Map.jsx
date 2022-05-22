import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindo,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vw",
};

const center = {
  lat: 45.4608182,
  lng: -122.6683848,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      ></GoogleMap>
    </div>
  );
}

export default Map;
