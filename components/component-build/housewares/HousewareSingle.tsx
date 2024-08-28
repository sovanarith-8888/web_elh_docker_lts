'use client'
import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { SubUnitItemCardDefinition, SubUnitTpyDefinitions } from '@/lib/definitions';
import HousewareCard from './HousewareCard';
type SubUnitItemType = {
  items: SubUnitItemCardDefinition[]
}

const HousewareSingle = ({ items }: SubUnitItemType) => {
  return (
    <div className={``}>
      <div className="flex w-fit float-right pt-0 flex-col items-center">

        {
          items.map((item) => (

            <HousewareCard key={item.iconItem} itemCard={
              {
                iconItem: item.iconItem, descriptionItem: item.descriptionItem
              }
            } />
          ))
        }


      </div>
    </div>
  )
}

export default HousewareSingle