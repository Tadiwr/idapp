import BookingSideBar from '@/components/booking_side_bar'
import SelectOffoces from '@/components/bookings_page/select_office'
import React from 'react'


export default function BookingPage() {
  return (
    <div className='flex p-10 w-full h-screen ' >
        {/* Sidebar */}
        <div className='ml-4'>
            <BookingSideBar officeFlag={true} confirmFlag={false} detailsFlag={false} />
        </div>
        {/* Input Area */}
        <div className='h-screen overflow-scroll w-full' >
        <SelectOffoces/>
        </div>
    </div>
  )
}


