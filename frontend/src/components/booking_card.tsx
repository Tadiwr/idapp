import { Booking } from '@/data/types'
import React from 'react'
import OfficeCard from './office_card'
import { getOffice } from '@/data/office.data'

type Props = {
    booking : Booking
}

export default async function BookingCard({booking} : Props) {

    return (
        <div className='rounded-2xl p-10 grid grid-cols-1 gap-3' >
            <h1 className='text-4xl font-bold mb-10 text-center' >Booking was Successfully Made!</h1>
            <h1 className='text-3xl font-bold' >{booking.code}</h1>
            <h1 className='text-2xl text-slate-400' >First Name: {booking.firstName}</h1>
            <h1 className='text-2xl text-slate-400' >Last Name: {booking.lastName}</h1>
            <h1 className='text-2xl text-slate-400' >Phone Number: {booking.phoneNumber}</h1>
            <h1 className='text-2xl text-slate-400' >Date: {booking.date.toString()}</h1>
            
            <div className='w-full' >
                <OfficeCard office={booking.office} />
            </div>
        </div>
  )
}
