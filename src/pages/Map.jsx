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
  width: "100%",
  height: "40vw",
};

const center = {
  lat: 45.5008182,
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
    <div className="container  mb-6">
      <div class="columns">
        <div class="column is-three-quarters">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={11}
            center={center}
          ></GoogleMap>
        </div>
        <div class="column">Second column</div>
        {/* <div class="column">Third column</div>
        <div class="column">Fourth column</div> */}
      </div>
    </div>
  );
}

export default Map;
