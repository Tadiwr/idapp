import BookingSideBar from '@/components/booking_side_bar'
import React from 'react'

export default function BookingPage() {
  return (
    <div className='flex p-10 w-full h-screen' >
        {/* Sidebar */}
        <div>
            <BookingSideBar officeFlag={true} confirmFlag={false} detailsFlag={false} />
        </div>

        {/* Input Area */}
        <div></div>
    </div>
  )
}
