import React from "react";
import LeafletIcon from "./LeafletIcon";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Mapa = () => {
  const moveEnd = () => {
    alert("Terminó");
  };
  const position = [17.82771, -97.809164];
  return (
    <Map center={position} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={LeafletIcon} draggable={false}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default Mapa;
