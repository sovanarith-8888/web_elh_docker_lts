'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'

const EastSenSokCondominium = () => {
  const translateSensokAds = useTranslations("project_plans");
  return (
    <main className={`w-[74%] mt-32 m-auto`}>
      <LocationMap
        location={translateSensokAds("east_sensok_location")}
        imageMap='/map/images/ess.jpg'
      />
    </main>
  )
}

export default EastSenSokCondominium