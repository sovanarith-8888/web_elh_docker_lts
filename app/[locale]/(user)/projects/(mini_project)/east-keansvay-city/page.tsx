'use client'
import LocationMap from '@/components/component-build/location-map/LocationMap';
import { useTranslations } from 'next-intl';
import React from 'react'

const EastkeansvayCityPage = () => {
  const translatekeansvayCityAds= useTranslations("project_plans");
  return (
    <main className={`w-[74%] mt-32 m-auto`}>
      <LocationMap
        location={translatekeansvayCityAds("east_keansvay_location")}
        imageMap='/map/images/ekc.jpg'
      />
    </main>
  )
}

export default EastkeansvayCityPage