import BookingForm from '@/components/bookings_page/booking_form';
import FormButton from '@/components/form_button';
import OfficeCard from '@/components/office_card';
import { getOffice } from '@/data/office.data';
import React from 'react'

type Props = { params: { officeId: number } }

export default async function EnterBookingInfo({ params }: Props) {

  const office = await getOffice(params.officeId);

  return (
    <div className='text-3xl p-10' >
      <div>
        <OfficeCard office={office}/>
      </div>

      <h1 className='text-4xl font-bold my-7' >Enter your details</h1>

      <BookingForm officeId={office.id} />
    </div>
  )
}
