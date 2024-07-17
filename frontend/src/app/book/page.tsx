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
    <div className='flex px-10 py-4 w-full h-screen ' >
        {/* Sidebar */}
        <div className='ml-4'>
           
        </div>
        {/* Input Area */}
        <div className='h-screen overflow-scroll w-full' >
        <SelectOffices  onSelectOffice={onSelectOffice}/>
        </div>
    </div>
  )
}


