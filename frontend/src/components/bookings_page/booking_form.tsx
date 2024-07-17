"use client";

import React, { useState } from 'react'
import FormButton from '../form_button'
import { useFormState } from 'react-dom';
import makeBookingAction from '@/actions/make_booking.action';

type Props ={
    officeId : number
}


export default function BookingForm({officeId} : Props) {

    const [state, formAction] = useFormState(makeBookingAction, {message: ""})

    return (
        <form className='grid grid-cols-1 gap-3 ' action={formAction}>
            <input  hidden={true} name='office_id' value={officeId} type="number" />
            <input className="hover:border-purple-700 ease-in-out duration-150  focus:border-purple-500" type="text" name='first_name'  placeholder='First Name'/>
            <input className="hover:border-purple-700 ease-in-out duration-150 focus:border-purple-500" type="text" name='last_name' placeholder='Last Name'/>
            <input className="hover:border-purple-700 ease-in-out duration-150 focus:border-purple-500" type="tel" name='phone_number' placeholder='Phone Number'/>
            <FormButton>Submit Booking</FormButton>

            <p>{state.message}</p>
        </form>
    )
}
