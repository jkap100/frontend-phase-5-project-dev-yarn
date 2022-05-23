/* global google */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindo,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import MapStyles from "../components/MapStyles";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "30vw",
};

const center = {
  lat: 45.5008182,
  lng: -122.6683848,
};

const options = {
  //   styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
    libraries,
  });

  const [locations, setLocations] = useState([]);

  //State for marker click
  const [markers, setMarkers] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stores").then((r) => {
      if (r.ok) {
        r.json().then(setLocations);
      } else {
        r.json().then((error) => console.log(error.errors));
        // navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  // const onMapClick = React.useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     },
  //   ]);
  // }, []);

  return (
    <div className="ml-6  mb-6">
      <div className="columns">
        <div
          className="column is-two-thirds
        "
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={11}
            center={center}
            options={options}
            // onClick={onMapClick}
          ></GoogleMap>
        </div>
        <div className="column">
          <h3 id="container" className="mr-6 has-text-white">
            Locations
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Map;
// sssssssss
