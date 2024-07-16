import React from 'react'

type Props = { params: { officeId: string } }

export default function EnterBookingInfo({ params }: Props) {
  return (
    <div className='text-3xl' >{params.officeId ?? "Hie"}</div>
  )
}
