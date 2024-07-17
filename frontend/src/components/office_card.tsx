import React from 'react'
import { getOffices } from '../data/office.data'
import { Office } from '@/data/types'

type Props = {
  office: Office,
  shouldLink? : boolean

  /** deprecated */
  onSelectOffice? : (officeId: number) => void
}

export default async function OfficeCard({office, onSelectOffice, shouldLink = true} : Props) {
  
  return (
    <a href={ shouldLink ? `/book/enter_info/${office.id}` : ""} className='flex flex-col p-5 border rounded-2xl' >
      <h1 className='text-3xl font-bold' >{office.officeName}</h1>
      <h1 className='font-semibold text-slate-600 text-xl' >{office.shortName}</h1>
      <h1 className='font-medium text-slate-400 text-lg' ><span>Daily Capacity: </span>{office.capacity}</h1>
    </a>
  )
}