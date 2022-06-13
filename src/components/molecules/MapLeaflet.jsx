/* eslint-disable */
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "../../css/images/marker-icon-2x.png";
import "../../css/react-leaflet.css";
import "../../css/leaflet.css";
import "../../figures/react-leaflet-icon";

// const position = [-6.45465465, 74.465465465];

function MapLeaflet() {
  const positionSensor = useSelector((state) => state.sensorSetChoosed);
  const position = [
    positionSensor.location.latitude,
    positionSensor.location.longitude,
  ];

  return (
    <div id="map">
      <MapContainer
        className="leaflet-container"
        center={position}
        zoom={8}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            Name set sensors.
            <br />
            {positionSensor.name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;
