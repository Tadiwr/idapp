import React from 'react'
import { getOffices } from '../data/office.data'

const OfficeList = async () => {
    const offices = await getOffices()
    
  return (
    <div>
      {offices.map((office, index) => {
        return <div>{office.officeName}</div>
      })}
    </div>
  )
}

export default OfficeList