"use client";

import BookingSideBar from '@/components/booking_side_bar'
import SelectOffices from '@/components/bookings_page/select_office'
import React from 'react'


export default function BookingPage() {

  const [officeId, setOfficeId] = React.useState(-1);

  const onSelectOffice = (officeId: number) => {
    setOfficeId(officeId);
  }

  return (
    <div className='w-full h-screen' >
      <SelectOffices  onSelectOffice={onSelectOffice}/>
    </div>
  )
}


