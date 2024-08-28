'use client'
import React from 'react'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { SubUnitTpyDefinitions } from '@/lib/definitions';
import HousewareCard from './HousewareCard';
type SubUnitItemType = {
  items: SubUnitTpyDefinitions[]
}

const Houseware = ({items}: SubUnitItemType) => {
  return (
    <div className={``}>
      <div className="flex w-full flex-col items-center">
      <Tabs aria-label="Options" placement='bottom' color='success'>
        {
          items.map((item) => (
            <Tab key={item.key} title={item.subUnitName}
            style={{ height: "45px", width: "120px", fontSize: "16px" }}>
              {
                item.properties.map((cardItem)=>(
                  <HousewareCard key={cardItem.iconItem} itemCard={
                    {
                      iconItem:cardItem.iconItem,descriptionItem:cardItem.descriptionItem
                    }
                  }/>
                ))
              }
          
            </Tab>
          ))
        }
        
      </Tabs>
    </div>  
    </div>
  )
}

export default Houseware
