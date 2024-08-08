'use client'
import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const MapLive = () => {
const center = {
  lat: -3.745,
  lng: -38.523,
};
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY'
  })

  const [map, setMap] = useState<undefined | any | null>(null);

  const onLoad = useCallback(function callback(map: { fitBounds: (arg0: google.maps.LatLngBounds) => void; }){
    // this is just example
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  },[])

  const onUnmount = useCallback(function(){
    setMap(null);
  },[])


  return isLoaded? (
    <GoogleMap
      mapContainerStyle={{
        height: '400px',
        width: '100%',
      }}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
     <></>
    </GoogleMap>
  ) : <></>

  
  return (
    <main className={`w-[60%] mt-12`}>MapLive</main>
  )
}

export default MapLive