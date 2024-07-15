import React from 'react'
import { getOffices } from '../data/office.data'

const OfficeList = async () => {
    const offices = await getOffices()
    
  return (
    <div>{
        offices.map((offic,index)=>{
            return <div key={index}>{offic.officeName}</div>
        })
    }</div>
  )
}

export default OfficeList