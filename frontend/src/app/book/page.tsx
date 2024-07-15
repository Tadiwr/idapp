import BookingSideBar from '@/components/booking_side_bar'
import React from 'react'

export default function BookingPage() {
  return (
    <div className='flex p-10 w-full h-screen ' >
        {/* Sidebar */}
        <div className='ml-4'>
            <BookingSideBar officeFlag={true} confirmFlag={false} detailsFlag={false} />
        </div>
        {/* Input Area */}
        <div className=''>
          <h1>Enter Your Details</h1>
          
        </div>

    </div>
  )
}


