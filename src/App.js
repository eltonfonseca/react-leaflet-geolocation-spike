import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import './App.css';
import coordenadas from './coord.json';

export default function App() {
  return (
    <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
      {
        coordenadas.map((coordenada) => (
          <Marker position={[coordenada.latitude, coordenada.longitude]} />
        ))
      }
      </MarkerClusterGroup>
    </MapContainer>
  );
}
