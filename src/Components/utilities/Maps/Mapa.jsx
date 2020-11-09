import React from "react";
import LeafletIcon from "./LeafletIcon";
import UniversidadIcon from "./UniversidadIcon";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ handleMovement, ubicacion }) => {
  const PosicionUniversidad = [17.8268813, -97.8044047];
  let position = [];

  position[0] = ubicacion.lat;
  position[1] = ubicacion.lng;

  return (
    <Map center={position} zoom={16} className="">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        icon={LeafletIcon}
        draggable={true}
        ondragend={handleMovement}
      >
        <Popup autoClose={false}>¿Aqui está bien?</Popup>
      </Marker>
      <Marker position={PosicionUniversidad} icon={UniversidadIcon}>
        <Popup ope>
          <b>Universidad Tecnológica de la Mixteca</b>
        </Popup>
      </Marker>
    </Map>
  );
};

export default Mapa;
