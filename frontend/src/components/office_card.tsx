import React from 'react'
import { getOffices } from '../data/office.data'
import { Office } from '@/data/types'

type Props = {
  office: Office
}

export default async function OfficeCard({office} : Props) {
  
  return (
    <div className='flex flex-col p-5 border rounded-2xl' >
      <h1 className='text-3xl font-bold' >{office.officeName}</h1>
      <h1 className='font-semibold text-slate-600 text-xl' >{office.shortName}</h1>
      <h1 className='font-medium text-slate-400 text-lg' ><span>Daily Capacity: </span>{office.capacity}</h1>
    </div>
  )
}