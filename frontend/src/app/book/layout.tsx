import BookingSideBar from '@/components/booking_side_bar'
import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function BookingLayout({children} : Props) {
  return (
    <div className='flex flex-row h-screen' >
        <div className='w-1/4 h-screen overflow-y' >
            <BookingSideBar officeFlag={true} confirmFlag={false} detailsFlag={false} />
        </div>

        <div className='w-full h-screen overflow-y' >
            {children}
        </div>
    </div>
  )
}
