'use client'
import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { title } from 'process';
const MapLive = () => {
const options = {
  mapId: "f870b9ae79c58b9b",
  title:"you are here"
}
const center = {
  lat: 11.544067280876929,
  lng: 104.93804282897477,
  title: "you are here"
};
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAm5nGiiONWGGGm6eDdtfzl_CgGWgN3oDo",
  })



  return isLoaded? (
    <GoogleMap
    options={options}
      mapContainerStyle={{
        height: '600px',
        width: '100%',
      }}
      center={center}
      zoom={15}
      

    >
     <></>
    </GoogleMap>
  ) : <></>

  
  return (
    <main className={`w-[60%] mt-12`}>MapLive</main>
  )
}

export default MapLive