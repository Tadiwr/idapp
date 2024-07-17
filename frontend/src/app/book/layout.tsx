import BookingSideBar from '@/components/booking_side_bar'
import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function BookingLayout({children} : Props) {
  return (
    <div className='flex flex-row h-screen' >
        <aside className='fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0' >
            <BookingSideBar officeFlag={true} confirmFlag={false} detailsFlag={false} />
        </aside>

        <div className='p-4 sm:ml-72 w-full' >
            {children}
        </div>
    </div>
  )
}
