import React from 'react';

type Props = {
    bookingCode : string
}

export default function BookingNotFound({bookingCode} : Props) {
  return (
    <div className='flex flex-col rounded-2xl justify-center items-center p-10 w-full h-full border' >
        <h1 className='text-red-400 text-4xl font-bold' >Booking Not found</h1>
        <p className='' >Booking with code {bookingCode} was not found.</p>
    </div>
  )
}
