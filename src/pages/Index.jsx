import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Custom icon for the markers
const customIcon = new Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Generate random coordinates within New York City bounds
const generateRandomCoordinates = (count) => {
  const nyBounds = {
    minLat: 40.4774,
    maxLat: 40.9176,
    minLng: -74.2591,
    maxLng: -73.7004,
  };

  return Array.from({ length: count }, () => ({
    lat: nyBounds.minLat + Math.random() * (nyBounds.maxLat - nyBounds.minLat),
    lng: nyBounds.minLng + Math.random() * (nyBounds.maxLng - nyBounds.minLng),
  }));
};

const Index = () => {
  const markers = generateRandomCoordinates(20);

  return (
    <div className="h-screen w-full">
      <MapContainer center={[40.7128, -74.0060]} zoom={11} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((position, idx) => (
          <Marker key={idx} position={[position.lat, position.lng]} icon={customIcon}>
            <Popup>
              Random location {idx + 1}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Index;
