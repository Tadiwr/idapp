import BookingCard from '@/components/booking_card';
import BookingNotFound from '@/components/error/booking_not_found';
import { getBookingInfo } from '@/data/bookings.data'
import React, { Suspense } from 'react'

type Props = {
    params : {bookingCode: string}
}

export default async function ConfirmBooking({params} : Props) {

  const booking = await getBookingInfo(params.bookingCode);
  const isValid = booking.isValid

  return <div className='p-10'>

    <Suspense >
      {isValid ? <BookingCard booking={booking.booking} /> : <BookingNotFound bookingCode={params.bookingCode} />}
    </Suspense>
  </div>
}
