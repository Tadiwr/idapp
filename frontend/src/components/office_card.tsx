import React from 'react'
import { getOffices } from '../data/office.data'
import { Office } from '@/data/types'

type Props = {
  office: Office
}

export default async function OfficeCard({office} : Props) {
  
  return (
    <div>
      <h1>{office.officeName}</h1>
      <h1>{office.shortName}</h1>
      <h1><span>Daily Capacity: </span>{office.capacity}</h1>
    </div>
  )
}