'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'

const EastMiniCondo1Page = () => {
  const translateMini1Ads = useTranslations("project_plans");
  return (
    <main className={`w-[74%] mt-32 m-auto`}>
      <LocationMap
        location={translateMini1Ads("east_minicondo1_location")}
        imageMap='/map/images/emc.jpg'
      />
    </main>
  )
}

export default EastMiniCondo1Page