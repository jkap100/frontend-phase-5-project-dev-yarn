/* global google */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import MapStyles from "../components/MapStyles";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

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

export default function Map() {
  const [locations, setLocations] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
    libraries,
  });

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

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
            onLoad={onMapLoad}
            // onClick={(e) => {
            //   setMarkers((current) => [
            //     ...current,
            //     {
            //       lat: e.latLng.lat(),
            //       lng: e.latLng.lng(),
            //       time: new Date(),
            //     },
            //   ]);
            // }}
            onClick={onMapClick}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.time.toISOString()}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            ))}
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                icon={{
                  url: `../pizza.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(17, 17),
                  scaledSize: new window.google.maps.Size(35, 35),
                }}
                onClick={() => {
                  setSelected(location);
                }}
              />
            ))}

            {selected ? (
              <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
                <div className="has-text-center">
                  <h2 className="has-text-black">
                    <strong>{selected.street}</strong>
                  </h2>
                  <p className="has-text-black">{selected.city}</p>
                  <p className="has-text-black">{selected.state}</p>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
        <div className="column">
          <h3 id="container" className="mr-6 has-text-white">
            Select Location
          </h3>
          <div className="ml-6">
            <ul>
              {locations.map((location) => {
                return (
                  <motion.li
                    key={location.id}
                    id="mapLi"
                    // onClick={() => onAddCrust(location)}
                    whileHover={{
                      scale: 1.3,
                      originX: 0,
                      color: "#f8e112",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="active">{location.name}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Map;
// sss
