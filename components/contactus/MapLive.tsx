'use client'
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapLive = () => {
  const options = {
    mapId: "f870b9ae79c58b9b",
    title: "you are here"
  }
  const center = {
    lat: 11.544067280876929,
    lng: 104.93804282897477
  };
  const containerStyle = {
    height: '600px',
    width: '100%',
  };

  const [location, setLocation] = useState(center);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAm5nGiiONWGGGm6eDdtfzl_CgGWgN3oDo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
        options={options}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );

}

export default MapLive