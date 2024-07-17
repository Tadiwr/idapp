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

      <form className='grid grid-cols-1 gap-3 ' action="">
        <input type="text" name='first_name'  placeholder='First Name'/>
        <input type="text" name='last_name' placeholder='Last Name'/>
        <input type="tel" name='phone_number' placeholder='Phone Number'/>
        <FormButton>Submit Booking</FormButton>
      </form>
    </div>
  )
}
