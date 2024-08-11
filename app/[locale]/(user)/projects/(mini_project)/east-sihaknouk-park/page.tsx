'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'

const EastSihaknoukParkPage = () => {
  const translateSihaknoukPark = useTranslations("project_plans");
  return (
    <main className={`w-[74%] mt-32 m-auto`}>
      <LocationMap
        location={translateSihaknoukPark("east_sihanoukpark_location")}
        imageMap='/map/images/esp.jpg'
      />
    </main>
  )
}

export default EastSihaknoukParkPage