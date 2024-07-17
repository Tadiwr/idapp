import OfficeCard from '@/components/office_card';
import { getOffice } from '@/data/office.data';
import React from 'react'

type Props = { params: { officeId: number } }

export default async function EnterBookingInfo({ params }: Props) {

  const office = await getOffice(params.officeId);

  return (
    <div className='text-3xl p-10' >
      <div>
        <OfficeCard office={office}/>
      </div>
    </div>
  )
}
