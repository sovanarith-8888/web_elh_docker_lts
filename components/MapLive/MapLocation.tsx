'use client'
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Tooltip } from '@nextui-org/react';

const MapLocation = ({lat,lng}: any) => {
  const options = {
    mapId: "f870b9ae79c58b9b",
    title: "you are here",
    draggableCursor: 'default', // Cursor style when hovering over the map
    draggingCursor: 'move'
  }
  const center = {
    lat: lat,
    lng: lng
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

  if(lat === undefined || lng === undefined){
    return <p>No location data provided.</p>
  }

  return (
    <Tooltip content="I am a tooltip">
    <LoadScript googleMapsApiKey="AIzaSyAm5nGiiONWGGGm6eDdtfzl_CgGWgN3oDo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:lat, lng: lng}}
        zoom={15}
        options={options}
      >
        <Marker position={center} />

      </GoogleMap>
    </LoadScript>
    </Tooltip>
  );

}


export default MapLocation