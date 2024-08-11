'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'

const EastNaturalCityPage = () => {
  const translateNaturalCityAds = useTranslations("project_plans");
  return (
    <main className={`w-[74%] mt-32 m-auto`}>
      <LocationMap
        location={translateNaturalCityAds("east_natural_location")}
        imageMap='/map/images/enc.jpg'
      />
    </main>
  )
}

export default EastNaturalCityPage