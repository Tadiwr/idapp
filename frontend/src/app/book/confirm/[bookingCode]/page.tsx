import React from 'react'

type Props = {
    params : {bookingCode: string}
}

export default function ConfirmBooking({params} : Props) {



  return (
    <div>Booking Code {params.bookingCode}</div>
  )
}
